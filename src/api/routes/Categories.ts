import { Router } from 'express'
import Controller from '../controller/Categories'

export const categories: Router = Router()
const controller = new Controller()

categories.post('/create', controller.createCategory)
categories.post('/update', controller.updateCategory)
categories.post('/delete', controller.deleteCategory)