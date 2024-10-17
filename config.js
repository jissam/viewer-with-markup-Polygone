// a Node.js script that reads environment variables using the dotenv package and exports these variables for use in other parts of your application.

// This line imports the dotenv package, which is used for loading environment variables from a .env file into the Node.js process.env object.
const dotenv = require('dotenv')

// This line loads the environment variables from a .env file (if one exists in the project directory) into process.env.
dotenv.config()

// This line destructures specific environment variables (APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET, and PORT) from the process.env object. These variables are typically defined in the .env file.
let { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET, PORT } = process.env

// This conditional check ensures that the required environment variables (APS_CLIENT_ID and APS_CLIENT_SECRET) are defined. If they are missing, a warning is logged to the console, and the script exits with a non-zero status code (1).
if (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {
  console.warn('Missing some of the environment variables.')
  process.exit(1)
}

// This line sets the APS_BUCKET variable to the value of APS_CLIENT_ID converted to lowercase followed by "-basic-app" if APS_BUCKET is not defined in the environment variables. This provides a default value for the bucket name.
APS_BUCKET = APS_BUCKET || `${APS_CLIENT_ID.toLowerCase()}-basic-app`

// this line sets the PORT variable to the value defined in the environment variables or 8080 as a default if not defined.
PORT = PORT || 8080

// This exports an object containing the environment variables and their values, making them available for other parts of your Node.js application. These variables can be accessed using require in other modules or scripts.
module.exports = {
  APS_CLIENT_ID,
  APS_CLIENT_SECRET,
  APS_BUCKET,
  PORT
}
