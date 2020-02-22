import CategoriesDao from '../dao/Categories'

class Categories {
  static async createCategory(dataObj) {
    return await CategoriesDao.createCategory(dataObj)
  }
  static async updateCategory(key, dataObj) {
    return await CategoriesDao.updateCategory(key, dataObj)
  }
  static async deleteCategory(key) {
    return await CategoriesDao.deleteCategory(key)
  }
}

export default Categories