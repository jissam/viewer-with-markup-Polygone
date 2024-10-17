import React from 'react';
import { createRoot } from 'react-dom/client';
import IssueDisplayPanelContent from './PanelContent/IssueDisplayPanelContent';


let OBJECT_URN;

// Export de la variable OBJECT_URN
export { OBJECT_URN };

export class IssueDisplayPanel extends Autodesk.Viewing.UI.DockingPanel {
    constructor(extension, id, title, options) {
        super(extension.viewer.container, id, title, options);
        this.extension = extension;
        this.container.style.right = '150px';
        this.container.style.bottom = '100px';
        this.container.style.width = (options && options.width) ? options.width + 'px' : '750';//750
        this.container.style.height = (options && options.height) ? options.height + 'px' : '580';//580
        this.container.style.backgroundColor = 'white';
        OBJECT_URN = this.extension.viewer.model.myData.urn;
    }

    initialize() {
        this.content = document.createElement('div');
        this.content.style.height = '400px';
        this.content.style.backgroundColor = 'white';
        this.container.appendChild(this.content);
        this.renderContent();
    }

    renderContent() {
        const root = createRoot(this.content);
        root.render(
            <IssueDisplayPanelContent
                onUpdate={this.update.bind(this)}
            />
        );
    }

    uninitialize() {
        super.uninitialize();
        // Unmount the React component when the panel is unmounted
        const root = createRoot(this.content);
        root.unmount();
    }

    update(elementId) {
        console.log("elementId****", elementId);
        const viewer = this.extension.viewer;
    
        // Réinitialiser la couleur de tous les éléments
        viewer.clearThemingColors();
    
        // Zoom sur l'élément sélectionné
        viewer.fitToView([elementId]);
    
        // Couleur rouge 
        const color = new THREE.Vector4(1, 0, 0, 1); 
    
        // Appliquer la nouvelle couleur à l'élément sélectionné
        viewer.setThemingColor([elementId], color);
    }
    
    
}
