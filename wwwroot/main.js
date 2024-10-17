import "./main.css";
import { initViewer, loadModel } from "./viewer.js";

/**
 * The document's URN
 */
let urnIdDocument = "";

/**
 * Get document ID / name
 */
const currentURL = window.location.href;
const url = new URL(currentURL);
const idDocument = url.searchParams.get("idDocument");

/**
 * If document found load it in the viewer
 */
if (idDocument) {
  const urn = window.location.hash?.substring(1);
  initViewer(document.getElementById("preview")).then((viewer) => {
    setupModelSelection(viewer, urn);
  });
} else {
  dispayPicNoSelect();
}

/**
 * handles the selection of models for display in an Autodesk viewer.
 * @param {*} viewer
 * @param {*} selectedUrn
 */
async function setupModelSelection(viewer, selectedUrn) {
  try {
    // Fetch the list of models from an API
    const resp = await fetch("./api/models");
    if (!resp.ok) {
      throw new Error(await resp.text());
    }

    // Parse the JSON response containing model data
    const models = await resp.json();
    const urnsArray = models.map((model) => model.urn);
    const namesArray = models.map((model) => model.name);

    for (let i = 0; i < namesArray.length; i++) {
      if (namesArray[i] === idDocument) {
        urnIdDocument = urnsArray[i];
        break;
      }
    }

    if (urnIdDocument) {
      onModelSelected(viewer, urnIdDocument);
    } else {
      // Avant d'appeler dispayPicNoSelect, masquez le viewer
      const viewerElement = document.getElementById("preview");
      viewerElement.style.display = "none";

      dispayPicNoSelect();
      console.log("Calling dispayPicNoSelect in setupModelSelection");
    }
  } catch (err) {
    // Handle errors
    alert("Could not list models. See the console for more details.");
    console.error(err);
  }
}

// handles the selection of a 3D model to be displayed in the viewer. It checks the translation status of the model, updates the URL fragment identifier, and takes appropriate actions based on the status.
async function onModelSelected(viewer, urn) {
  // Clear a previous timeout, if it exists
  if (window.onModelSelectedTimeout) {
    clearTimeout(window.onModelSelectedTimeout);
    delete window.onModelSelectedTimeout;
  }

  // Update the URL fragment identifier with the selected URN
  window.location.hash = urn;

  try {
    // Fetch the translation status of the model
    const resp = await fetch(`./api/models/${urn}/status`);
    if (!resp.ok) {
      throw new Error(await resp.text());
    }

    // Parse the JSON response containing the model status
    const status = await resp.json();
    console.log(
      "------------------------------------------> resp status",
      status
    );
    // Handle different translation status cases
    switch (status.status) {
      case "n/a":
        showNotification("Model has not been translated.");
        break;
      case "inprogress":
        showNotification(`Model is being translated (${status.progress})...`);
        window.onModelSelectedTimeout = setTimeout(
          onModelSelected,
          5000,
          viewer,
          urn
        );
        break;
      case "failed":
        showNotification(
          `Translation failed. <ul>${status.messages
            .map((msg) => `<li>${JSON.stringify(msg)}</li>`)
            .join("")}</ul>`
        );
        break;
      default:
        clearNotification();
        loadModel(viewer, urn);
        break;
    }
  } catch (err) {
    alert("Could not load model. See the console for more details.");
    console.error(err);
  }
}

function dispayPicNoSelect() {
  console.log("Calling dispayPicNoSelect");
  // Récupérer l'élément overlay existant
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = "";
  overlay.innerHTML =
    '<img src="wait_user_selection.png" id="resizableImage"></img>';

  document.body.style.overflow = "hidden"; // Désactiver la barre de défilement sur le corps
  document.documentElement.style.overflow = "hidden"; // Désactiver la barre de défilement sur l'élément html

  overlay.style.margin = "0"; // Ajouter cette ligne pour réinitialiser les marges de l'overlay

  // Ajouter d'autres styles à la div overlay

  overlay.style.display = "block"; // Utiliser flex pour centrer l'image

  // Récupérer l'élément de l'image
  const img = document.getElementById("resizableImage");

  // Ajuster la largeur et la hauteur de l'image en fonction de la taille de la div overlay
  img.style.width = "110%"; // Ajuster la largeur à 110% pour dépasser légèrement les bords
  img.style.height = "100%";

  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log(windowWidth);
    img.style.width = windowWidth * 1.0 + "px";
    img.style.height = windowHeight * 1.0 + "px";
  });
}

function showNotification(message) {
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = `<div class="notification">${message}</div>`;
  overlay.style.display = "flex";
}

function clearNotification() {
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = "";
  overlay.style.display = "none";
}
