import express, { Application } from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

import { app } from './routes/App'
import { categories } from './routes/Categories'
import { expenses } from './routes/Expenses'

class App {
  public express: Application

  constructor() {
    this.express = express()
    this.setMiddlewares()
    this.setRoutes()
  }

  private setMiddlewares(): void {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(express.json())
    this.express.use(express.static(path.join(__dirname, '../../../dist')))
  }

  private setRoutes(): void {
    this.express.use('/', app)
    this.express.use('/categories', categories)
    this.express.use('/expenses', expenses)
  }
}

export default new App().express