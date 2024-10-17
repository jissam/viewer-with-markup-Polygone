/* global Autodesk */
import { BaseExtension } from './BaseExtension.js';
import { MarkupDisplayPanel } from './MarkupDisplayPanel.js';
import '../img/note.png';

class MarkupDisplayExtension extends BaseExtension {
  constructor(viewer, options) {
    super(viewer, options);
    this._panelVisible = false;
    this._panelContainer = null;
    this._startX = 0;
    this._startPanelWidth = 0;
    this._startViewerWidth = 0;
    this._previewContainerWidth = 0;
    this._minPanelWidth = 0.3; // 30% de la largeur de l'aperçu
    this._maxPanelWidth = 0.7; // 70% de la largeur de l'aperçu
    this._resizing = false;
  }

  onToolbarCreated() {
    this._showButton = this.createToolbarButton('markups-button', 'img/note.png', 'Markups Display');
    this._showButton.onClick = () => {
      console.log('Button clicked.');
      if (!this._panelVisible) {
        this.showPanel();
      } else {
        this.hidePanel();
      }
    };
  }

  showPanel() {
    const previewContainer = document.getElementById('preview');
    previewContainer.innerHTML = '';

    const viewerDiv = document.createElement('div');
    viewerDiv.id = 'viewer-container';
    viewerDiv.style.width = '70%';
    viewerDiv.style.height = '100%';
    viewerDiv.style.position = 'relative';
    previewContainer.appendChild(viewerDiv);

    const viewerContainer = this.viewer.container;
    if (viewerContainer) {
      viewerDiv.appendChild(viewerContainer);
      this._startViewerWidth = viewerContainer.offsetWidth;
      Autodesk.Viewing.Private.GuiViewer3D.prototype.resize.call(this.viewer);
    } else {
      console.error('Viewer container is not defined.');
    }

    this._panelContainer = document.createElement('div');
    this._panelContainer.classList.add('panel-container');
    previewContainer.appendChild(this._panelContainer);

    if (this._panelContainer) {
      const titleDiv = document.createElement('div');
      titleDiv.textContent = 'Display Markups';
      titleDiv.classList.add('title-div');
      this._panelContainer.appendChild(titleDiv);
      
      const closeButton = document.createElement('button');
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', () => {
        this.hidePanel();
      });
      this._panelContainer.appendChild(closeButton);

      this._panel = new MarkupDisplayPanel(this, 'model-tab-panel', 'Display Markups');
      this._panel.setVisible(!this._panel.isVisible());
      this._panelContainer.appendChild(this._panel.content);
      this._showButton.setState(Autodesk.Viewing.UI.Button.State.ACTIVE);
      this._panelVisible = true; // Mettre à jour la visibilité du panneau
      console.log("Panel shown");
    } else {
      console.error('Panel container is not defined.');
    }

    this._previewContainerWidth = previewContainer.offsetWidth;

    document.addEventListener('mousedown', this.startPanelResize.bind(this));
    document.addEventListener('mousemove', this.handlePanelResize.bind(this));
    document.addEventListener('mouseup', this.stopPanelResize.bind(this));

    // Ajouter un gestionnaire d'événements mouseover pour modifier le curseur uniquement dans la zone de redimensionnement
    this._panelContainer.addEventListener('mouseover', this.changeCursor.bind(this));
  }

  startPanelResize(e) {
    const panelLeft = this._panelContainer.getBoundingClientRect().left;
    // Vérifie si le clic de souris est dans la zone de redimensionnement (10 pixels de la bordure gauche du panneau)
    if (e.clientX < panelLeft + 10 && e.clientX > panelLeft) {
      this._resizing = true;
      this._startX = e.clientX;
      this._startPanelWidth = parseFloat(getComputedStyle(this._panelContainer, null).getPropertyValue('width').replace('px', ''));
    }
  }

  stopPanelResize() {
    this._resizing = false;

    if (this._panelContainer) {
      // Réinitialiser les valeurs de départ pour le prochain redimensionnement
      this._startX = 0;
      this._startPanelWidth = parseFloat(getComputedStyle(this._panelContainer, null).getPropertyValue('width').replace('px', ''));
      this._startViewerWidth = parseFloat(getComputedStyle(document.getElementById('viewer-container'), null).getPropertyValue('width').replace('px', ''));
    }
  }

  handlePanelResize(e) {
    if (this._resizing || e.buttons === 1) {
      const deltaX = e.clientX - this._startX;
      const previewWidth = this._previewContainerWidth;
      const newPanelWidth = this._startPanelWidth - deltaX;

      // Limiter la largeur du panneau à 70% de la largeur de l'aperçu
      const maxPanelWidth = previewWidth * this._maxPanelWidth;
      if (newPanelWidth > maxPanelWidth) {
        return; // Arrêter la fonction si la limite est atteinte
      }

      // Limiter la réduction du panneau à une largeur minimale
      const minPanelWidth = previewWidth * this._minPanelWidth;
      if (newPanelWidth < minPanelWidth) {
        return; // Arrêter la fonction si la limite de la largeur minimale est atteinte
      }

      // Mettre à jour la taille du panneau
      this._panelContainer.style.width = `${newPanelWidth}px`;

      // Mettre à jour la taille du visualiseur
      const newViewerWidth = this._startViewerWidth + deltaX;
      document.getElementById('viewer-container').style.width = `${newViewerWidth}px`;

      // Après le redimensionnement, centrer le modèle dans le viewer
      Autodesk.Viewing.Private.GuiViewer3D.prototype.resize.call(this.viewer);
    }
  }

  changeCursor(e) {
    const panelLeft = this._panelContainer.getBoundingClientRect().left;
    const mouseX = e.clientX;
    if (mouseX > panelLeft && mouseX < panelLeft + 10) { // Si le curseur est dans la zone de redimensionnement
      this._panelContainer.style.cursor = 'ew-resize'; // Changer le curseur
    } else {
      this._panelContainer.style.cursor = 'auto'; // Rétablir le curseur par défaut
    }
  }

  hidePanel() {
    const previewContainer = document.getElementById('preview');
    const panelWidth = this._panelContainer.offsetWidth;
    const panelLeft = this._panelContainer.getBoundingClientRect().left;
    const panelRight = this._panelContainer.getBoundingClientRect().right;
    if (panelWidth < 20) {
      this._panelContainer.style.width = '20px';
      document.getElementById('viewer-container').style.width = 'calc(100% - 20px)';
    } else if (panelLeft < 0) {
      this._panelContainer.style.width = panelWidth + panelLeft + 'px';
      document.getElementById('viewer-container').style.width = 'calc(100% - ' + (panelWidth + panelLeft) + 'px)';
    } else if (panelRight > window.innerWidth) {
      this._panelContainer.style.width = window.innerWidth - panelLeft + 'px';
      document.getElementById('viewer-container').style.width = 'calc(100% - ' + (window.innerWidth - panelLeft) + 'px)';
    }
    previewContainer.removeChild(this._panelContainer);
    previewContainer.innerHTML = '';
    this._showButton.setState(Autodesk.Viewing.UI.Button.State.INACTIVE);
    this._panel.setVisible(false);
    this._panelVisible = false; // Mettre à jour la visibilité du panneau
    this.viewer.clearThemingColors();
    this.viewer.fitToView();

    const viewerContainer = this.viewer.container;
    if (viewerContainer) {
      viewerContainer.style.width = '100%';
      Autodesk.Viewing.Private.GuiViewer3D.prototype.resize.call(this.viewer);
      if (viewerContainer.parentElement !== previewContainer) {
        previewContainer.appendChild(viewerContainer);
        Autodesk.Viewing.Private.GuiViewer3D.prototype.resize.call(this.viewer);
      }
    } else {
      console.error('Viewer container is not defined.');
    }

    // Supprimer l'écouteur d'événements lorsque le panneau est masqué
    this._panelContainer.removeEventListener('mouseover', this.changeCursor.bind(this));
    document.removeEventListener('mousemove', this.handlePanelResize.bind(this));
    document.removeEventListener('mouseup', this.stopPanelResize.bind(this));
  }

  unload() {
    super.unload();
    console.log('MarkupExtension unloaded.');
    return true;
  }

  onModelLoaded(model) {
    super.onModelLoaded(model);
    if (this._panel && this._panel.isVisible()) {
      console.log("Model Loaded")
    }
  }

  onSelectionChanged(model, dbids) {
    super.onSelectionChanged(model, dbids);
    this.update();
  }

  onIsolationChanged(model, dbids) {
    super.onIsolationChanged(model, dbids);
    this.update();
  }

  async update() {
    // Implémenter la logique de mise à jour si nécessaire
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension('MarkupDisplayExtension', MarkupDisplayExtension);
