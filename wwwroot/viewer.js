/* global Autodesk */
import "./extensions/IssueExtension.js";
import "./extensions/IssueDisplayExtension.js";
import "./extensions/MarkupExtension.js";
import "./extensions/MarkupDisplayExtension.js";
import "./extensions/Edit2dExtension.js";

// fetches an access token from the server using an API endpoint and passes it to a callback function.
async function getAccessToken(callback) {
  try {
    // Fetch an access token from the server
    const resp = await fetch("./api/auth/token");
    if (!resp.ok) {
      throw new Error(await resp.text());
    }

    // Parse the JSON response containing the access token and its expiration
    const { access_token, expires_in } = await resp.json();

    // Call the callback function with the access token and its expiration
    callback(access_token, expires_in);
  } catch (err) {
    // Handle errors and display an alert
    alert("Could not obtain access token. See the console for more details.");
    console.error(err);
  }
}

// initializes an Autodesk viewer for displaying 3D models.
export function initViewer(container) {
  return new Promise(function (resolve, reject) {
    Autodesk.Viewing.Initializer({ getAccessToken }, function () {
      const config = {
        extensions: [
          "Autodesk.DocumentBrowser",
          "IssueExtension",
          "IssueDisplayExtension",
          "MarkupExtension",
          "MarkupDisplayExtension",
          "Autodesk.Viewing.MarkupsCore",
          "Autodesk.Viewing.MarkupsGui",
          "Edit2dExtension",
        ],
      };
      const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);
      viewer.start();
      viewer.setTheme("light-theme");
      resolve(viewer);
    });
  });
}

// loads a 3D model into an Autodesk viewer.
export function loadModel(viewer, urn) {
  return new Promise(function (resolve, reject) {
    function onDocumentLoadSuccess(doc) {
      resolve(viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()));
    }
    function onDocumentLoadFailure(code, message, errors) {
      reject(new Error({ code, message, errors }));
    }
    viewer.setLightPreset(0);
    Autodesk.Viewing.Document.load(
      "urn:" + urn,
      onDocumentLoadSuccess,
      onDocumentLoadFailure
    );
  });
}
