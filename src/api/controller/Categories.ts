import { Request, Response } from 'express'
import CategoriesService from '../impl/Categories'

const CategoriesClass: CategoriesService = new CategoriesService()

class Categories {
  public createCategory = async (req: Request, res: Response): Promise<any> => {
    const { dataObj } = req.body

    try {
      const results = await CategoriesClass.createCategory(dataObj)
      
      res.status(200).json(results)
    } catch (err) {
      console.log('CONTROLLER Error createCategory: ', err)
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }

  public updateCategory = async (req: Request, res: Response): Promise<any> => {
    const { key, dataObj } = req.body

    try {
      const results = await CategoriesClass.updateCategory(key, dataObj)
      
      res.status(200).json(results)
    } catch (err) {
      console.log('CONTROLLER Error updateCategory: ', err)
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }

  public deleteCategory = async (req: Request, res: Response): Promise<any> => {
    const { key } = req.body

    try {
      const results = await CategoriesClass.deleteCategory(key)
      
      res.status(200).json(results)
    } catch (err) {
      console.log('CONTROLLER Error deleteCategory: ', err)
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }
}

export default Categories