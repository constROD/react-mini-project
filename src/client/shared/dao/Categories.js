import axios from 'axios'

class Categories {
  static async createCategory(dataObj) {
    const results = await axios({
      url: `${process.env.API_URL}/categories/create`,
      method: 'POST',
      data: {
        dataObj
      }
    })

    return results.data
  }

  static async updateCategory(key, dataObj) {
    const results = await axios({
      url: `${process.env.API_URL}/categories/update`,
      method: 'POST',
      data: {
        key,
        dataObj
      }
    })

    return results.data
  }

  static async deleteCategory(key) {
    const results = await axios({
      url: `${process.env.API_URL}/categories/delete`,
      method: 'POST',
      data: {
        key
      }
    })

    return results.data
  }
}

export default Categories