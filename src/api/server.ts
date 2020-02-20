import https from 'https'
import fs from 'fs'

import app from './App'
import CONFIG from './config/App'

if (CONFIG.APP_ZONE === 'production') {
  const server = {
    key: fs.readFileSync('SSL KEY PATH'),
    cert: fs.readFileSync('SSL CERT PATH'),
    ca: fs.readFileSync('SSL CA PATH')
  }

  https.createServer(server, app).listen(CONFIG.APP_PORT, () => {
    console.log(`_________________________________`)
    console.log(`*********************************`)
    console.log(`------------ RUNNING ------------`)
    console.log(`[APP]  : ${CONFIG.APP_NAME}`)
    console.log(`[PORT] : ${CONFIG.APP_PORT}`)
    console.log(`[ZONE] : ${CONFIG.APP_ZONE}`)
    console.log(`_________________________________`)
    console.log(`*********************************`)
  })
} else {
  app.listen(CONFIG.APP_PORT, () => {
    console.log(`_________________________________`)
    console.log(`*********************************`)
    console.log(`------------ RUNNING ------------`)
    console.log(`[APP]  : ${CONFIG.APP_NAME}`)
    console.log(`[PORT] : ${CONFIG.APP_PORT}`)
    console.log(`[ZONE] : ${CONFIG.APP_ZONE}`)
    console.log(`_________________________________`)
    console.log(`*********************************`)
  })
}