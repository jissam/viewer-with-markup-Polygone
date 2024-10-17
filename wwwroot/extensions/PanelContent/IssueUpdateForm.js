import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class IssueUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issueTitle: props.issue.issueTitle,
            elementName: props.issue.elementName,
            issueId: props.issue.issueId,
            author: props.issue.author,
            status: props.issue.status,
            issues: props.issue.issues,
            elementId: props.issue.elementId,
            modelId: props.issue.modelId,
            formSubmitted: false,
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        // Validation de tous les champs
        if (!this.isValidTitle() || !this.state.elementName 
        ||!this.state.issueId 
        ||!this.state.author || !this.state.status || !this.state.issues) {
            // Afficher une notification d'erreur
            NotificationManager.error('Please fill in all required fields.', 'Error');
            // Mettre à jour l'état du formulaire pour indiquer qu'il a été soumis
            this.setState({ formSubmitted: true });
            return;
        }

        // Si tous les champs sont remplis, soumettre le formulaire
        const formData = {
            issueTitle: this.state.issueTitle,
            elementName: this.state.elementName,
            issueId: this.state.issueId,
            author: this.state.author,
            status: this.state.status,
            issues: this.state.issues,
            elementId: this.state.elementId,
            modelId: this.state.modelId
        };

        try {
            const response = await fetch(`/aps/api/issues/${this.state.issueId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Réponse du serveur:', data);
                this.showSuccessNotification("Success!\nIssue Title updated successfully.");
                // Réinitialiser les champs après soumission réussie
                this.setState({
                    issueTitle: '',
                    elementName: '',
                    issueId: '',
                    author: '',
                    status: 'Open',
                    issues: '',
                    elementId: '',
                    modelId: '',
                    formSubmitted: false,
                });
            } else {
                console.error('Erreur de soumission du formulaire:', response.statusText);
                this.showErrorNotification("Form submission error");
            }
        } catch (error) {
            console.error('Erreur de soumission du formulaire:', error);
            this.showErrorNotification("Form submission error");
        }
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    isValidTitle = () => {
        // Validation du titre : pas de caractères spéciaux
        const regex = /^[a-zA-Z0-9 _\- ]*$/; // Permet uniquement les lettres, les chiffres et les espaces
        return regex.test(this.state.issueTitle);
    };

    showSuccessNotification = (message) => {
        NotificationManager.success(message, 'Success');
    };

    showErrorNotification = (message) => {
        NotificationManager.error(message, 'Error');
    };

    render() {
        const { formSubmitted } = this.state;
        return (
            <div className="issue-form-container">
                <div className="flex justify-between items-center mb-4 bas-border ">
                    <div className=' title-update'>Update Issue </div>
                    <button className="flex items-center" onClick={this.props.onClose}>
                        
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="issue-title" className="form-label">Title<span className="required-field">*</span>:</label>
                    <input type="text" id="issue-title" name="issueTitle" className={`form-input ${formSubmitted && !this.state.issueTitle ? 'invalid-input' : ''}`} value={this.state.issueTitle} onChange={this.handleInputChange} /><br />
                    {!this.isValidTitle() && <p style={{ color: 'red', margin: '0' }}>Special characters are not allowed.</p>}

                    <label htmlFor="element-name" className="form-label">Element Name:</label>
                    <input type="text" id="element-name" name="elementName" className={`form-input ${formSubmitted && !this.state.elementName ? 'invalid-input' : ''}`} value={this.state.elementName} onChange={this.handleInputChange} disabled /><br />

                   {/* <label htmlFor="issue-id" className="form-label">Issue ID:</label><br />
                    <input type="text" id="issue-id" name="issueId" className={`form-input ${formSubmitted && !this.state.issueId ? 'invalid-input' : ''}`} value={this.state.issueId} onChange={this.handleInputChange} disabled /><br />
                   */}
                    <label htmlFor="author" className="form-label">Author:</label>
                    <input type="text" id="author" name="author" className={`form-input ${formSubmitted && !this.state.author ? 'invalid-input' : ''}`} value={this.state.author} onChange={this.handleInputChange} disabled /><br />

                    <label htmlFor="status" className="form-label">Status:</label>
                    <select id="status" name="status" className={`form-input ${formSubmitted && !this.state.status ? 'invalid-input' : ''}`} value={this.state.status} onChange={this.handleInputChange}>
                        <option value="Open">Open</option>
                        <option value="Assigned">Assigned</option>
                        <option value="Closed">Closed</option>
                        <option value="Resolved">Resolved</option>
                    </select><br />

                    <label htmlFor="issues" className="form-label">Issue Description<span className="required-field">*</span>:</label><br />
                    <textarea id="issues" name="issues" style={{ width: '318.44px', height: '110px', resize: 'none', overflow: 'auto' }} className={`form-input ${formSubmitted && !this.state.issues ? 'invalid-input' : ''}`} value={this.state.issues} onChange={this.handleInputChange} ></textarea><br />
                    <button style={{ width: '318.44px' }} type="submit" className="submit-button">Save</button>


                </form>
            </div>
        );
    }
}

export default IssueUpdateForm;