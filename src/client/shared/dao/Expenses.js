import axios from 'axios'

class Expenses {
  constructor() {
    this.url = `${process.env.API_URL}/expenses`
  }

  async createExpense(dataObj) {
    const results = await axios({
      url: `${this.url}/create`,
      method: 'POST',
      data: {
        dataObj
      }
    })

    return results.data
  }

  async updateExpense(key, dataObj) {
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

  async deleteExpense(key) {
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

export default Expenses