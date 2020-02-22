import ExpensesDao from '../dao/Expenses'

const ExpensesClass: ExpensesDao = new ExpensesDao()

class Expenses {
  public createExpense = async (dataObj): Promise<any> => {
    return await ExpensesClass.createExpense(dataObj)
  }
  public updateExpense = async (key, dataObj): Promise<any> => {
    return await ExpensesClass.updateExpense(key, dataObj)
  }
  public deleteExpense = async (key): Promise<any> => {
    return await ExpensesClass.deleteExpense(key)
  }
}

export default Expenses