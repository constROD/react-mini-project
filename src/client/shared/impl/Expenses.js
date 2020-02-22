import ExpensesDao from '../dao/Expenses'

const ExpensesClass = new ExpensesDao()

class Expenses {
  static async createExpense(dataObj) {
    return await ExpensesClass.createExpense(dataObj)
  }
  static async updateExpense(key, dataObj) {
    return await ExpensesClass.updateExpense(key, dataObj)
  }
  static async deleteExpense(key) {
    return await ExpensesClass.deleteExpense(key)
  }
}

export default Expenses