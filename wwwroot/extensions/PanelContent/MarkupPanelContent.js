import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

class MarkupPanelContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markupTitle: "",
      elementName: "",
      markupId: "",
      author: "",
      status: "Assigned", //open,
      markups: "",
      elementId: "",
      modelId: "",
      formSubmitted: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    // Validation de tous les champs
    if (
      !this.isValidTitle() ||
      !this.state.elementName ||
      !this.state.markupId ||
      !this.state.author ||
      !this.state.status ||
      !this.state.markups
    ) {
      // Afficher une notification d'erreur
      NotificationManager.error("Please fill in all required fields.", "Error");
      // Mettre à jour l'état du formulaire pour indiquer qu'il a été soumis
      this.setState({ formSubmitted: true });
      return;
    }

    // Si tous les champs sont remplis, soumettre le formulaire
    const formData = {
      markupTitle: this.state.markupTitle,
      elementName: this.state.elementName,
      markupId: this.state.markupId,
      author: this.state.author,
      status: this.state.status,
      markups: this.state.markups,
      elementId: this.state.elementId,
      modelId: this.state.modelId,
    };

    try {
      const response = await fetch("/aps/api/markups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Réponse du serveur:", data);
        this.showSuccessNotification(
          "Success!\nMarkup Title created successfully."
        );
        // Réinitialiser les champs après soumission réussie
        this.setState({
          markupTitle: "",
          elementName: "",
          markupId: "",
          author: "",
          status: "open",
          markups: "",
          elementId: "",
          modelId: "",
          formSubmitted: false,
        });
      } else {
        console.error(
          "Erreur de soumission du formulaire:",
          response.statusText
        );
        this.showErrorNotification("Form submission error");
      }
    } catch (error) {
      console.error("Erreur de soumission du formulaire:", error);
      this.showErrorNotification("Form submission error");
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isValidTitle = () => {
    // Validation du titre : pas de caractères spéciaux
    const regex = /^[a-zA-Z0-9 _\- ]*$/; // Permet uniquement les lettres, les chiffres et les espaces et _ et -
    return regex.test(this.state.markupTitle);
  };

  showSuccessNotification = (message) => {
    NotificationManager.success(message, "Success");
  };

  showErrorNotification = (message) => {
    NotificationManager.error(message, "Error");
  };

  render() {
    const { formSubmitted } = this.state;
    return (
      <div className="markup-form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="markup-title" className="form-label">
            Title<span className="required-field">*</span>:
          </label>
          <input
            type="text"
            id="markup-title"
            name="markupTitle"
            className={`form-input ${
              formSubmitted && !this.state.markupTitle ? "invalid-input" : ""
            }`}
            value={this.state.markupTitle}
            onChange={this.handleInputChange}
          />
          <br />
          {!this.isValidTitle() && (
            <p style={{ color: "red", margin: "0" }}>
              Special characters are not allowed.
            </p>
          )}
          <label htmlFor="element-name" className="form-label">
            Element Name:
          </label>
          <input
            type="text"
            id="element-name"
            name="elementName"
            className={`form-input ${
              formSubmitted && !this.state.elementName ? "invalid-input" : ""
            }`}
            value={this.state.elementName}
            onChange={this.handleInputChange}
            disabled
          />
          <br />
          <label htmlFor="markup-id" className="form-label">
            Markup ID:
          </label>
          <br />
          <input
            type="text"
            id="markup-id"
            name="markupId"
            className={`form-input ${
              formSubmitted && !this.state.markupId ? "invalid-input" : ""
            }`}
            value={this.state.markupId}
            onChange={this.handleInputChange}
            disabled
          />
          <br />
          <label htmlFor="author" className="form-label">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className={`form-input ${
              formSubmitted && !this.state.author ? "invalid-input" : ""
            }`}
            value={this.state.author}
            onChange={this.handleInputChange}
            disabled
          />
          <br />
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            id="status"
            name="status"
            className={`form-input ${
              formSubmitted && !this.state.status ? "invalid-input" : ""
            }`}
            value={this.state.status}
            onChange={this.handleInputChange}
          >
            <option value="Open">Open</option>
            <option value="Assigned">Assigned</option>
            {/*<option value="Closed">Closed</option>
                        <option value="Resolved">Resolved</option>*/}
          </select>
          <br />
          <button type="button" className="geo-button" color="#841584">
            Cercle
          </button>
          <br />
          <select class="lmv-markup-tool-select">
            <option value="arrow">Arrow</option>
            <option value="rectangle">Rectangle</option>
            <option value="ellipse">Circle</option>
            <option value="label">Text</option>
            <option value="callout">Callout</option>
            <option value="cloud">Cloud</option>
            <option value="polyline">PolyLine</option>
            <option value="polycloud">Polycloud</option>
          </select>
          <br />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MarkupPanelContent;
