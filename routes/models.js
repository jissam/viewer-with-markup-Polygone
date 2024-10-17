// This line imports the Express.js framework.
const express = require('express')

// This line imports the express-formidable middleware, which is used for parsing form data in incoming requests. This middleware simplifies handling file uploads and form data.
const formidable = require('express-formidable')

// This line imports several functions from a module located in '../services/aps.js'. These functions are likely related to managing 3D objects and translation services, and they are being used in this Express router.
const { listObjects, uploadObject, translateObject, getManifest, urnify } = require('../services/aps.js')

// This line creates an instance of an Express router.
// Routers are used to define groups of related routes and middleware that can be mounted in your main Express application.
// The router is currently empty and will be populated with route definitions and middleware later in the code.
const router = express.Router()

// defines a route using Express.js for handling GET requests to the '/api/models' endpoint.
router.get('/api/models', async function (req, res, next) { // This defines a route handler for GET requests to the '/api/models' endpoint. When a client makes a GET request to this endpoint, this handler will be executed.
  try {
    // Inside the try block, the listObjects function is called asynchronously.
    // This function likely retrieves a list of 3D objects using Autodesk Forge services. It awaits the result, meaning it will wait for the listObjects function to complete before proceeding to the next line.
    const objects = await listObjects()

    // If the listObjects function call is successful, the route handler responds with a JSON object.
    // It maps the retrieved objects to a new array, transforming each object into an object with 'name' and 'urn' properties.
    // This response is sent back to the client as JSON data.
    res.json(objects.map(o => ({
      name: o.objectKey,
      urn: urnify(o.objectId)
    })))
  } catch (err) {
    next(err)
  }
})

// defines another route using Express.js for handling GET requests to the '/api/models/:urn/status' endpoint, which appears to be used to retrieve the translation status of a 3D model given its URN (Unique Resource Name).
// This route is used to query the translation status of a 3D model based on its URN. It gathers information from the manifest, including status, progress, and messages, and returns this information as a JSON response.
// If the manifest is not found, it responds with a status of 'n/a'. Errors are handled by delegating them to the Express error-handling mechanism.
router.get('/api/models/:urn/status', async function (req, res, next) { // This route handler is defined for GET requests to the '/api/models/:urn/status' endpoint. The :urn in the route path indicates a dynamic parameter that can be accessed as req.params.urn.
  try {
    // Inside the try block, the getManifest function is called with the URN from the request parameters (req.params.urn).
    // This function likely retrieves the manifest of the specified 3D model asynchronously.
    // It awaits the result, indicating that it will wait for the getManifest function to complete before proceeding.
    const manifest = await getManifest(req.params.urn)

    if (manifest) {
      let messages = []
      if (manifest.derivatives) {
        for (const derivative of manifest.derivatives) {
          messages = messages.concat(derivative.messages || [])
          if (derivative.children) {
            for (const child of derivative.children) {
              messages.concat(child.messages || [])
            }
          }
        }
      }
      res.json({ status: manifest.status, progress: manifest.progress, messages })
    } else {
      res.json({ status: 'n/a' })
    }
  } catch (err) {
    next(err)
  }
})

// defines an Express route handler for handling POST requests to the '/api/models' endpoint. It appears to handle the upload and translation of 3D models.
router.post('/api/models', formidable(), async function (req, res, next) { // This route handler is defined for POST requests to the '/api/models' endpoint. It uses the formidable middleware to parse the incoming request for form data, which may include uploaded files.
  // This line attempts to access the uploaded file from the request. It checks whether the file with the field name 'model-file' is included in the request.
  const file = req.files['model-file']

  // the route handler responds with a 400 Bad Request status and a message indicating that the required field "model-file" is missing.
  if (!file) {
    res.status(400).send('The required field ("model-file") is missing.')
    return
  }
  try {
    // Inside the try block, the uploaded file is passed to the uploadObject function, which likely uploads the file to a storage location. The function is awaited to complete the upload.
    const obj = await uploadObject(file.name, file.path)

    // After the successful upload, the code proceeds to call the translateObject function, which translates the uploaded 3D model. It uses the URN of the uploaded object and, optionally, a model zip entry point. This translation is awaited as well.
    await translateObject(urnify(obj.objectId), req.fields['model-zip-entrypoint'])
    res.json({
      name: obj.objectKey,
      urn: urnify(obj.objectId)
    })
  } catch (err) {
    next(err)
  }
})

// at the end of your code exports the Express router instance defined in your previous code. By exporting the router, you make it available for use in other parts of your application.
module.exports = router
