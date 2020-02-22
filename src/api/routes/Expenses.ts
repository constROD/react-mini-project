import { Router } from 'express'
import Controller from '../controller/Expenses'

export const expenses: Router = Router()
const controller = new Controller()

expenses.post('/create', controller.createExpense)
expenses.post('/update', controller.updateExpense)
expenses.post('/delete', controller.deleteExpense)