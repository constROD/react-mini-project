import CategoriesDao from '../dao/Categories'

const CategoriesClass: CategoriesDao = new CategoriesDao()

class Categories {
  public createCategory = async (dataObj): Promise<any> => {
    return await CategoriesClass.createCategory(dataObj)
  }
  public updateCategory = async (key, dataObj): Promise<any> => {
    return await CategoriesClass.updateCategory(key, dataObj)
  }
  public deleteCategory = async (key): Promise<any> => {
    return await CategoriesClass.deleteCategory(key)
  }
}

export default Categories