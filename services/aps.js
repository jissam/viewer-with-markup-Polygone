// sets up an Autodesk Forge service module for interacting with the Forge APIs.

// This line imports the Node.js File System module, which is used for file-related operations.
const fs = require('fs')

// This line imports the 'forge-apis' module, which likely provides a Node.js SDK for interacting with Autodesk Forge APIs.
const APS = require('forge-apis')

// This line imports the client ID, client secret, and bucket name from a configuration file (presumably 'config.js').
const { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } = require('../config.js')

// This line creates a new instance of the AuthClientTwoLegged class from the 'forge-apis' module.
// It's used for two-legged authentication (client credentials flow).
// It uses the client ID and client secret obtained from the configuration to authenticate and authorize with Autodesk Forge APIs.
// The array ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'] represents the desired permissions or scopes for the authentication.
const internalAuthClient = new APS.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true)

// This creates another instance of AuthClientTwoLegged. However, this instance appears to be intended for a public token with the 'viewables:read' scope. Public tokens are typically used for viewer-related functionality.
const publicAuthClient = new APS.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['viewables:read'], true)

// This line exports an empty service object. The service object is likely intended to contain methods and functions related to interacting with Autodesk Forge APIs.
const service = module.exports = {}

// This code defines a method getInternalToken within the service object. The getInternalToken method is used to obtain an internal access token for making authenticated requests to Autodesk Forge APIs.
service.getInternalToken = async () => {
  if (!internalAuthClient.isAuthorized()) {
    await internalAuthClient.authenticate()
  }
  return internalAuthClient.getCredentials()
}

// This code defines another method getPublicToken within the service object. The getPublicToken method is used to obtain a public access token for making authenticated requests to Autodesk Forge APIs, typically for viewer-related functionality.
service.getPublicToken = async () => {
  if (!publicAuthClient.isAuthorized()) {
    await publicAuthClient.authenticate()
  }
  return publicAuthClient.getCredentials()
}

// This code defines a method ensureBucketExists within the service object. The ensureBucketExists method is responsible for ensuring the existence of a specific bucket in Autodesk Forge, which is used for storing data.
service.ensureBucketExists = async (bucketKey) => {
  try {
    await new APS.BucketsApi().getBucketDetails(bucketKey, null, await service.getInternalToken())
  } catch (err) {
    if (err.response.status === 404) {
      await new APS.BucketsApi().createBucket({ bucketKey, policyKey: 'persistent' }, {}, null, await service.getInternalToken())
    } else {
      throw err
    }
  }
}

// This code defines a method listObjects within the service object. The listObjects method is used to list objects stored in a specific Autodesk Forge bucket.
service.listObjects = async () => {
  await service.ensureBucketExists(APS_BUCKET)
  let resp = await new APS.ObjectsApi().getObjects(APS_BUCKET, { limit: 64 }, null, await service.getInternalToken())
  let objects = resp.body.items
  while (resp.body.next) {
    const startAt = new URL(resp.body.next).searchParams.get('startAt')
    resp = await new APS.ObjectsApi().getObjects(APS_BUCKET, { limit: 64, startAt }, null, await service.getInternalToken())
    objects = objects.concat(resp.body.items)
  }
  return objects
}

// This code defines a method uploadObject within the service object. The uploadObject method is used to upload a file (object) to a specific Autodesk Forge bucket
service.uploadObject = async (objectName, filePath) => {
  await service.ensureBucketExists(APS_BUCKET)
  const buffer = await fs.promises.readFile(filePath)
  const results = await new APS.ObjectsApi().uploadResources(
    APS_BUCKET,
    [{ objectKey: objectName, data: buffer }],
    { useAcceleration: false, minutesExpiration: 15 },
    null,
    await service.getInternalToken()
  )
  if (results[0].error) {
    throw results[0].completed
  } else {
    return results[0].completed
  }
}

// This code defines a method translateObject within the service object. The translateObject method is used to initiate a translation job for a specific object (URN) in Autodesk Forge.
// Translation is the process of converting a source file into multiple output formats, such as the SVF (Simple Viewing Format), which is commonly used for 2D and 3D model viewing.
service.translateObject = async (urn, rootFilename) => {
  const job = {
    input: { urn },
    output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }
  }
  if (rootFilename) {
    job.input.compressedUrn = true
    job.input.rootFilename = rootFilename
  }
  const resp = await new APS.DerivativesApi().translate(job, {}, null, await service.getInternalToken())
  return resp.body
}

// This code defines a method getManifest within the service object. The getManifest method is used to retrieve the manifest information for a specific object (URN) in Autodesk Forge.
// The manifest provides details about the derivatives and translations of the object.
service.getManifest = async (urn) => {
  try {
    const resp = await new APS.DerivativesApi().getManifest(urn, {}, null, await service.getInternalToken())
    return resp.body
  } catch (err) {
    if (err.response.status === 404) {
      return null
    } else {
      throw err
    }
  }
}

// This code defines a method urnify within the service object. The urnify method is used to convert an ID into a URN (Uniform Resource Name) format as required by Autodesk Forge. URNs are typically used to uniquely identify resources within Autodesk Forge.
service.urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '')
