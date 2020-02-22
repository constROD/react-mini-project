import axios from 'axios'

class Expenses {
  constructor () {
    this.path = `${process.env.API_URL}/expenses`
  }

  static async createExpense(dataObj) {
    const results = await axios({
      url: `${this.path}/create`,
      method: 'POST',
      data: {
        dataObj
      }
    })

    return results.data
  }

  static async updateExpense(key, dataObj) {
    const results = await axios({
      url: `${process.env.API_URL}/expenses/update`,
      method: 'POST',
      data: {
        key,
        dataObj
      }
    })

    return results.data
  }

  static async deleteExpense(key) {
    const results = await axios({
      url: `${process.env.API_URL}/expenses/delete`,
      method: 'POST',
      data: {
        key
      }
    })

    return results.data
  }
}

export default Expenses