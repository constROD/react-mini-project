import { Request, Response } from 'express'
import ExpensesService from '../impl/Expenses'

const ExpensesClass: ExpensesService = new ExpensesService()

class Expenses {
  public createExpense = async (req: Request, res: Response): Promise<any> => {
    const { dataObj } = req.body

    try {
      const results = await ExpensesClass.createExpense(dataObj)
      
      res.status(200).json(results)
    } catch (err) {
      console.log('CONTROLLER Error createExpense: ', err)
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }

  public updateExpense = async (req: Request, res: Response): Promise<any> => {
    const { key, dataObj } = req.body

    try {
      const results = await ExpensesClass.updateExpense(key, dataObj)
      
      res.status(200).json(results)
    } catch (err) {
      console.log('CONTROLLER Error updateExpense: ', err)
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }

  public deleteExpense = async (req: Request, res: Response): Promise<any> => {
    const { key } = req.body

    try {
      const results = await ExpensesClass.deleteExpense(key)
      
      res.status(200).json(results)
    } catch (err) {
      console.log('CONTROLLER Error deleteExpense: ', err)
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }
}

export default Expenses