import ExpensesDao from '../dao/Expenses'

class Expenses {
  static async createExpense(dataObj) {
    return await ExpensesDao.createExpense(dataObj)
  }
  static async updateExpense(key, dataObj) {
    return await ExpensesDao.updateExpense(key, dataObj)
  }
  static async deleteExpense(key) {
    return await ExpensesDao.deleteExpense(key)
  }
}

export default Expenses