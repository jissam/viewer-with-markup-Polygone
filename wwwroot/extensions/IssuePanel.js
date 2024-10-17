import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import IssuePanelContent from './PanelContent/IssuePanelContent';
import { NotificationContainer } from 'react-notifications';
import { v4 as uuidv4 } from 'uuid';

const APS_AUTHOR = process.env.APS_DEFAULT_USER

export class IssuePanel extends Autodesk.Viewing.UI.DockingPanel {
    constructor(extension, id, title, options) {
        super(extension.viewer.container, id, title, options);
        this.extension = extension;
        this.container.style.right = '150px';
        this.container.style.bottom = '100px';
        this.container.style.width = (options && options.width) ? options.width + 'px' : '380px';
        this.container.style.height = (options && options.height) ? options.height + 'px' : '580px';
        this.container.style.backgroundColor = 'white';

    }

    initialize() {

        this.title = this.createTitleBar(this.titleLabel || this.container.id);
        this.initializeMoveHandlers(this.title);
        this.container.appendChild(this.title);

        this.closer = this.createCloseButton();
        
        this.closer.addEventListener('click', () => {
            this.extension._button.setState(Autodesk.Viewing.UI.Button.State.INACTIVE);
        } );

        this.container.appendChild(this.closer);
      
        this.initializeCloseHandler(this.closer)
        
        this.content = document.createElement('div');
        //this.content.style.height = '350px';
        this.content.style.backgroundColor = 'white';

        // Add CSS styles to position the content horizontally centered
        this.content.style.position = 'absolute';
        this.content.style.left = '50%';
        this.content.style.top = '10%';
        this.content.style.transform = 'translateX(-50%)';
        this.container.appendChild(this.content);
        this.renderContent();
        
    }

    renderContent() {
        const root = createRoot(this.content);
        root.render(
            <IssuePanelContent
                ref={ref => (this.issuePanelContentRef = ref)} // Store a reference to the IssuePanelContent component
            />
        );
        const appContainer = document.createElement('div');
        document.body.appendChild(appContainer);
        const notificationRoot = createRoot(appContainer);
        notificationRoot.render(<NotificationContainer />);
    }

    uninitialize() {
        super.uninitialize();
        // Unmount the React component when the panel is unmounted
        const root = createRoot(this.content);
        root.unmount();
    }

    update(model, dbids, propNames) {
        // Vérifiez si dbids est un tableau vide
        if (dbids.length === 0) {
            // Aucun élément sélectionné, définissez les valeurs sur null
            if (this.issuePanelContentRef) {
                this.issuePanelContentRef.setState({
                    elementName: '', // ou undefined
                    issueId: '', // ou undefined
                    author:'',
                });
            } else {
                console.error("IssuePanelContent component reference is not available.");
            }
            return; // Sortez de la fonction car aucun élément n'est sélectionné
        }

        console.log("prop Names", propNames);
        const uuid = uuidv4();
        console.log('Your UUID is: ' + uuid);
        // Retrieve relevant information about the selected element using model.getBulkProperties
        model.getBulkProperties(dbids, { propFilter: propNames }, (results) => {
            
            if (results && results.length > 0) {
                console.log("results", results);
                const elementInfo = results[0];
                console.log("elementInfo*****", elementInfo);
                //console.log("elementInfo.dbid",process.env.APS_AUTHOR);
                // Update the state of the IssuePanelContent component using the stored reference
                if (this.issuePanelContentRef) {
                    
                    console.log('this.issuePanelContentRef', this.issuePanelContentRef)
                    this.issuePanelContentRef.setState({
                        elementName: elementInfo.name,
                        issueId: uuid,
                        author:APS_AUTHOR,
                        elementId:elementInfo.dbId,
                        modelId:this.extension.viewer.model.myData.urn
                        
                    });
                } else {
                    console.error("IssuePanelContent component reference is not available.");
                }
            } else {
                console.error("No information about selected elements.");
            }
        }, (err) => {
            console.error(err);
        });
    }

}
