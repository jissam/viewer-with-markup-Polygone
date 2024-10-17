/**
 * ---------------------------------------------------------------------------------------
 * Defines an Express.js router specifically for handling authentication-related routes.
 * ---------------------------------------------------------------------------------------
 */

/** Express Framework */
const express = require('express')

// This line imports the getPublicToken function from the 'aps' service, which likely deals with authentication using public tokens.
const { getPublicToken } = require('../services/aps')

// This line creates an instance of an Express router, which will be used to define and handle routes related to authentication.
const router = express.Router()

// This code defines a route handler for handling GET requests to the '/api/auth/token' endpoint, which is used to request a public authentication token.
router.get('/api/auth/token', async function (req, res, next) {
  try {
    // Inside the try block, the route handler responds with a JSON object containing the result of the getPublicToken function. The await keyword indicates that the function call is asynchronous and will wait for the result.
    res.json(await getPublicToken())
  } catch (err) {
    next(err)
  }
})

// By exporting this router using module.exports, you can use it in your main Express application by mounting it at a specific base path, similar to how routers were used in the previous code snippets.
// This modular approach helps you organize and separate routes for different parts of your application.
module.exports = router
