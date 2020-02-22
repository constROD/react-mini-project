import * as firebase from 'firebase-admin'

class Expenses {
  public createExpense = async (dataObj): Promise<any> => {
    try {
      const expensesDatabase = firebase.database().ref('database/expenses')
      await expensesDatabase.push().set(dataObj)

      return true
    } catch (err) {
      console.log("DAO Error createExpense: ", err)
      return true
    }
  }

  public updateExpense = async (key, dataObj): Promise<any> => {
    try {
      const expensesDatabase = firebase.database().ref('database/expenses')
      await expensesDatabase.child(key).set(dataObj)

      return true
    } catch (err) {
      console.log("DAO Error updateExpense: ", err)
      return true
    }
  }

  public deleteExpense = async (key): Promise<any> => {
    try {
      const expensesDatabase = firebase.database().ref('database/expenses')
      await expensesDatabase.child(key).remove()

      return true
    } catch (err) {
      console.log("DAO Error deleteExpense: ", err)
      return true
    }
  }
}

export default Expenses