import axios from 'axios'

class Categories {
  constructor() {
    this.url = `${process.env.API_URL}/categories`
  }

  async createCategory(dataObj) {
    const results = await axios({
      url: `${this.url}/create`,
      method: 'POST',
      data: {
        dataObj
      }
    })

    return results.data
  }

  async updateCategory(key, dataObj) {
    const results = await axios({
      url: `${this.url}/update`,
      method: 'POST',
      data: {
        key,
        dataObj
      }
    })

    return results.data
  }

  async deleteCategory(key) {
    const results = await axios({
      url: `${this.url}/delete`,
      method: 'POST',
      data: {
        key
      }
    })

    return results.data
  }
}

export default Categories