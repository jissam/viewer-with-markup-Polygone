const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../db/index');

// Middleware to parse JSON bodies
router.use(bodyParser.json());

// Route pour gérer les requêtes POST sur /aps/issues
router.post('/api/issues', async (req, res) => {
  try {
    const { issueTitle, elementName, issueId, author, status, issues,elementId,modelId } = req.body;
    const newIssue = await db.Issue.create({
      issueTitle,
      elementName,
      issueId,
      author,
      status,
      issues,
      elementId,
      modelId
    });
    res.status(201).json({ message: 'Formulaire soumis avec succès', issue: newIssue });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la soumission du formulaire' });
  }
});

// Route pour récupérer les issues depuis la base de données
router.get('/api/issues', async (req, res) => {
  try {
    const issues = await db.Issue.findAll();
    res.status(200).json(issues);
  } catch (error) {
    console.error('Erreur lors de la récupération des issues:', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des issues', error: error.message });
  }
});
// Route pour gérer les requêtes PUT sur /aps/issues/:id
router.put('/api/issues/:issueId', async (req, res) => {
  try {
    const { id } = req.params;
    const { issueTitle, elementName, issueId, author, status, issues, elementId, modelId } = req.body;
    const updatedIssue = await db.Issue.update(
      { issueTitle, elementName, issueId, author, status, issues, elementId, modelId },
      { where: { issueId } }
    );
    if (updatedIssue[0] === 1) {
      res.status(200).json({ message: 'Issue updated successfully' });
    } else {
      res.status(404).json({ message: 'Issue not found' });
    }
  } catch (error) {
    console.error('Error updating issue:', error);
    res.status(500).json({ message: 'An error occurred while updating the issue' });
  }
});
module.exports = router;
