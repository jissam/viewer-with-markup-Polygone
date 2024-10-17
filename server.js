// a Node.js script that creates an Express.js server, serves static files from the 'wwwroot' directory, and sets up routes for authentication and models.

// This line imports the Express.js framework, allowing you to create a web server and define routes for handling HTTP requests.
const express = require('express')

// Db connectivity
const db = require('./db/index')

// This line imports the PORT variable from the 'config' module you defined in your previous code snippet. The PORT variable specifies the port on which the server will listen for incoming requests.
const { PORT } = require('./config')
const bodyParser = require('body-parser');

// This line creates an Express application by invoking the express function and storing the result in the app variable. This app object represents your web server and can be used to define routes and middleware.
const app = express()
app.use(bodyParser.json());

// This line sets up a middleware using express.static to serve static files located in the 'wwwroot' directory. This is typically used to serve HTML, CSS, JavaScript, and other client-side assets.
app.use('/aps', express.static('dist'))

// This line uses the auth routes defined in the 'auth' module. It sets up the routes and associated handlers for authentication-related endpoints.
app.use('/aps', require('./routes/auth'))

// This line uses the models routes defined in the 'models' module. It sets up the routes and handlers for endpoints related to models.
app.use('/aps', require('./routes/models'))
app.use('/aps', require('./routes/issues')); // Montez les routes de formulaire
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

db.sequelize.sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })


// This code starts the Express application and makes it listen on the port specified by the PORT variable. When the server starts listening, it logs a message to the console indicating the port on which it's listening.
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`) })
