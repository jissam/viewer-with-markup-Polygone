export class BaseExtension extends Autodesk.Viewing.Extension {
  constructor(viewer, options) {
    super(viewer, options);
    this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);
    this._onSelectionChanged = (ev) =>
      this.onSelectionChanged(ev.model, ev.dbIdArray);
    this._onIsolationChanged = (ev) =>
      this.onIsolationChanged(ev.model, ev.nodeIdArray);
  }

  load() {
    this.viewer.addEventListener(
      Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
      this._onObjectTreeCreated
    );
    this.viewer.addEventListener(
      Autodesk.Viewing.SELECTION_CHANGED_EVENT,
      this._onSelectionChanged
    );
    this.viewer.addEventListener(
      Autodesk.Viewing.ISOLATE_EVENT,
      this._onIsolationChanged
    );
    return true;
  }

  unload() {
    this.viewer.removeEventListener(
      Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
      this._onObjectTreeCreated
    );
    this.viewer.removeEventListener(
      Autodesk.Viewing.SELECTION_CHANGED_EVENT,
      this._onSelectionChanged
    );
    this.viewer.removeEventListener(
      Autodesk.Viewing.ISOLATE_EVENT,
      this._onIsolationChanged
    );
    return true;
  }

  onToolbarCreated() {}

  onModelLoaded(model) {}

  onSelectionChanged(model, dbids) {}

  onIsolationChanged(model, dbids) {}

  findLeafNodes(model) {
    return new Promise(function (resolve, reject) {
      model.getObjectTree(function (tree) {
        const leaves = [];
        tree.enumNodeChildren(
          tree.getRootId(),
          function (dbid) {
            if (tree.getChildCount(dbid) === 0) {
              leaves.push(dbid);
            }
          },
          true
        );
        resolve(leaves);
      }, reject);
    });
  }

  async findPropertyNames(model) {
    const dbids = await this.findLeafNodes(model);
    return new Promise(function (resolve, reject) {
      model.getBulkProperties(
        dbids,
        {},
        function (results) {
          const propNames = new Set();
          for (const result of results) {
            for (const prop of result.properties) {
              propNames.add(prop.displayName);
            }
          }
          resolve(Array.from(propNames.values()));
        },
        reject
      );
    });
  }

  /**
   * Create the toolbar dedictaed to the issues management
   * @param {string} buttonId         :  The ID if the intial button to create
   * @param {string} buttonIconUrl    :  The url icons of the initial button
   * @param {string} buttonTooltip    :  The tooltip of the inoitial button
   * @returns : the initial button
   * @author : aharzli
   */
  createToolbarButton(buttonId, buttonIconUrl, buttonTooltip) {
    let group = this.viewer.toolbar.getControl("dashboard-toolbar-group");
    if (!group) {
      group = new Autodesk.Viewing.UI.ControlGroup("dashboard-toolbar-group");
      this.viewer.toolbar.addControl(group);
    }
    //const button1 = new Autodesk.Viewing.UI.Button("my-button");
    //button1.onClick = function (e) {
    //  viewer.setLightPreset(16);
    //};
    //button1.addClass("my-button");
    //button1.setToolTip("Click herexxxxxx");
    const button = new Autodesk.Viewing.UI.Button(buttonId);
    button.setToolTip(buttonTooltip);
    group.addControl(button);
    //group.addControl(button1);
    const icon = button.container.querySelector(".adsk-button-icon");
    if (icon) {
      icon.style.backgroundImage = `url(${buttonIconUrl})`;
      icon.style.backgroundSize = "24px";
      icon.style.backgroundRepeat = "no-repeat";
      icon.style.backgroundPosition = "center";
    }
    return button;
  }

  /**
   * Add additional button to the toolbar
   * @param {string} buttonId         :  The ID if the additional button to create
   * @param {string} buttonIconUrl    :  The url icons of the additional button
   * @param {string} buttonTooltip    :  The tooltip of the additional button
   * @returns : the additional button
   * @author :  aharzli
   */
  addToolbarButton(buttonId, buttonIconUrl, buttonTooltip) {
    const group = this.viewer.toolbar.getControl("dashboard-toolbar-group");
    const button = new Autodesk.Viewing.UI.Button(buttonId);
    button.setToolTip(buttonTooltip);
    group.addControl(button);
    const icon = button.container.querySelector(".adsk-button-icon");
    if (icon) {
      icon.style.backgroundImage = `url(${buttonIconUrl})`;
      icon.style.backgroundSize = "24px";
      icon.style.backgroundRepeat = "no-repeat";
      icon.style.backgroundPosition = "center";
    }
    return button;
  }

  /**
   * remove a given button from the toolbar
   * @param {string} button : The ID of the  button to remove
   * @author :  aharzli
   */
  removeToolbarButton(button) {
    const group = this.viewer.toolbar.getControl("dashboard-toolbar-group");
    group.removeControl(button);
  }
}
