import CategoriesDao from '../dao/Categories'

const CategoriesClass = new CategoriesDao()

class Categories {
  static async createCategory(dataObj) {
    return await CategoriesClass.createCategory(dataObj)
  }
  static async updateCategory(key, dataObj) {
    return await CategoriesClass.updateCategory(key, dataObj)
  }
  static async deleteCategory(key) {
    return await CategoriesClass.deleteCategory(key)
  }
}

export default Categories