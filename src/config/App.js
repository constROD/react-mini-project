const dotenv = require('dotenv')
dotenv.config()

const APP_ZONE = process.env.APP_ZONE || 'development'
const APP_PORT = process.env.APP_PORT || 3000

const API_HOSTNAME = process.env.API_HOSTNAME || 'localhost'
const API_PORT = APP_PORT

module.exports = {
  /* APP */
  APP_NAME: process.env.APP_NAME || 'Dev App',
  APP_ZONE,
  APP_PORT,
  
  /* API */
  API_HOSTNAME,
  API_PORT,
  API_URL: APP_ZONE == 'production' ? '' : `http://${API_HOSTNAME}:${API_PORT}`
}