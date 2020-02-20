import { Router } from 'express'
import Controller from '../controller/App'

export const app: Router = Router()
const controller = new Controller()

app.get('*', controller.get)