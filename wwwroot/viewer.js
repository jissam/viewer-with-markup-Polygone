/* global Autodesk */
import "./extensions/IssueExtension.js";
import "./extensions/IssueDisplayExtension.js";
import "./extensions/MarkupExtension.js";
import "./extensions/MarkupDisplayExtension.js";
import "./extensions/Edit2dExtension.js";
import SuperVizRoom, { Comments } from "@superviz/sdk"; // Importation de SuperViz SDK
import { Presence3D, AutodeskPin } from "@superviz/autodesk-viewer-plugin"; // SuperViz Plugins pour Autodesk

const apiKey = "jos3rv4vdubdv293m30rmamdmo5xws"; // Remplace par ta clé API SuperViz
const ROOM_ID = "live-autodesk-session"; // ID de la session en direct
const PLAYER_ID = "player_" + Math.random().toString(36).substr(2, 9); // Génération d'un ID unique pour le participant

// Fonction pour obtenir le token d'authentification
async function getAccessToken(callback) {
  try {
    const resp = await fetch("./api/auth/token");
    if (!resp.ok) throw new Error(await resp.text());

    const { access_token, expires_in } = await resp.json();
    callback(access_token, expires_in);
  } catch (err) {
    alert("Could not obtain access token. See the console for more details.");
    console.error(err);
  }
}

// Fonction pour initialiser Autodesk Viewer et SuperViz
export function initViewer(container) {
  return new Promise((resolve, reject) => {
    Autodesk.Viewing.Initializer({ getAccessToken }, function () {
      const config = {
        extensions: [
          "Autodesk.DocumentBrowser",
          "IssueExtension",
          "IssueDisplayExtension",
          //"MarkupExtension",
          //"MarkupDisplayExtension",
          //"Autodesk.Viewing.MarkupsCore",
          //"Autodesk.Viewing.MarkupsGui",
          //"Edit2dExtension",
        ],
      };
      const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);
      viewer.start();
      viewer.setTheme("light-theme");

      // Initialisation de SuperViz une fois que Autodesk Viewer est prêt
      initializeSuperViz(viewer)
        .then(() => {
          resolve(viewer);
        })
        .catch(reject);
    });
  });
}

// Fonction pour charger un modèle dans Autodesk Viewer
export function loadModel(viewer, urn) {
  return new Promise((resolve, reject) => {
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

// Fonction pour initialiser SuperViz avec Autodesk Viewer
async function initializeSuperViz(viewer) {
  try {
    const superviz = await SuperVizRoom(apiKey, {
      roomId: ROOM_ID,
      participant: {
        id: PLAYER_ID,
        name: "Collaborateur", // Nom du participant
      },
      group: {
        id: "autodesk-group",
        name: "Autodesk Collaboration Session",
      },
    });

    // Ajout de la présence 3D dans Autodesk Viewer
    const presence = new Presence3D(viewer);
    superviz.addComponent(presence);

    // Ajout des pins/commentaires dans Autodesk Viewer
    const pinAdapter = new AutodeskPin(viewer);
    const comments = new Comments(pinAdapter, {
      buttonLocation: "top-right", // Localisation du bouton de commentaire
    });
    superviz.addComponent(comments);

    console.log("SuperViz session initialized");
  } catch (err) {
    console.error("Error initializing SuperViz:", err);
  }
}
