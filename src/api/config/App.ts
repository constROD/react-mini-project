import * as dotenv from 'dotenv'
dotenv.config()

export default {
  /* APP */
  APP_NAME: process.env.APP_NAME || 'Dev App',
  APP_ZONE: process.env.APP_ZONE || 'development',
  APP_PORT: process.env.APP_PORT || 3000
}