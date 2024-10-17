const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../db/index');

// Middleware to parse JSON bodies
router.use(bodyParser.json());

// Route pour gérer les requêtes POST sur /aps/markups
router.post('/api/markups', async (req, res) => {
  try {
    const { markupTitle, elementName, markupId, author, status, markups,elementId,modelId } = req.body;
    const newMarkup = await db.Markup.create({
      markupTitle,
      elementName,
      markupId,
      author,
      status,
      markups,
      elementId,
      modelId
    });
    res.status(201).json({ message: 'Formulaire soumis avec succès', markup: newMarkup });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la soumission du formulaire' });
  }
});

// Route pour récupérer les markups depuis la base de données
router.get('/api/markups', async (req, res) => {
  try {
    const markups = await db.Markup.findAll();
    res.status(200).json(markups);
  } catch (error) {
    console.error('Erreur lors de la récupération des markups:', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des markups', error: error.message });
  }
});
// Route pour gérer les requêtes PUT sur /aps/markups/:id
router.put('/api/markups/:markupId', async (req, res) => {
  try {
    const { id } = req.params;
    const { markupTitle, elementName, markupId, author, status, markups, elementId, modelId } = req.body;
    const updatedMarkup = await db.Markup.update(
      { markupTitle, elementName, markupId, author, status, markups, elementId, modelId },
      { where: { markupId } }
    );
    if (updatedMarkup[0] === 1) {
      res.status(200).json({ message: 'Markup updated successfully' });
    } else {
      res.status(404).json({ message: 'Markup not found' });
    }
  } catch (error) {
    console.error('Error updating markup:', error);
    res.status(500).json({ message: 'An error occurred while updating the markup' });
  }
});
module.exports = router;
