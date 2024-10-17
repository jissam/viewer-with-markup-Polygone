/* global Autodesk */
import { BaseExtension } from './BaseExtension.js'
import { MarkupPanel } from './MarkupPanel.js';
import '../img/markup.png'
const FORM_PROPS = ['name','externalId',];

class MarkupExtension extends BaseExtension {
  constructor(viewer, options) {
    super(viewer, options);
    this._button = null;
    this._panel = null;
    //this._showButton=null;
  }

  load() {
    super.load();
    console.log('MarkupExtension loaded.');
    return true;
  }

  unload() {
    super.unload();
    if (this._button) {
      this.removeToolbarButton(this._button);
      this._button = null;
    }
    if (this._panel) {
      this._panel.setVisible(false);
      this._panel.uninitialize();
      this._panel = null;
    }
    console.log('MarkupExtension unloaded.');
    return true;
  }

  onToolbarCreated() {
    this._panel = new MarkupPanel(this, 'Create Markup', 'Create Markup');
    this._button = this.createToolbarButton('markup-button', 'img/markup.png', 'Markup Creation');
    this._button.onClick = () => {
      this._panel.setVisible(!this._panel.isVisible());
      this._button.setState(this._panel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);
      if (this._panel.isVisible() && this.viewer.model) {
        
        //this.update();
        console.log("panel");
      }
    };
  }


  onModelLoaded(model) {
    super.onModelLoaded(model);
    if (this._panel && this._panel.isVisible()) {
      //this.update();
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
    if (this._panel) {
    
      const selectedIds = this.viewer.getSelection();
      const isolatedIds = this.viewer.getIsolatedNodes();
      if (selectedIds.length > 0) {
        this._panel.update(this.viewer.model, selectedIds, FORM_PROPS);
      } else if (isolatedIds.length > 0) {
        this._panel.update(this.viewer.model, isolatedIds, FORM_PROPS);
      } else {
        //const dbids = await this.findLeafNodes(this.viewer.model);
        //this._panel.update(this.viewer.model, dbids, FORM_PROPS);
        // Cas où aucun élément ni ensemble isolé n'est sélectionné (clic sur une zone vide)
        this._panel.update(this.viewer.model, [], FORM_PROPS);
      }
    }
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension('MarkupExtension', MarkupExtension);
