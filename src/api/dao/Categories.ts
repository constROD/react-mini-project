import * as firebase from 'firebase-admin'

class Categories {
  public createCategory = async (dataObj): Promise<any> => {
    try {
      const categoriesDatabase = firebase.database().ref('database/categories')
      await categoriesDatabase.push().set(dataObj)

      return true
    } catch (err) {
      console.log("DAO Error createCategory: ", err)
      return false
    }
  }

  public updateCategory = async (key, dataObj): Promise<any> => {
    try {
      const categoriesDatabase = firebase.database().ref('database/categories')
      await categoriesDatabase.child(key).set(dataObj)

      return true
    } catch (err) {
      console.log("DAO Error updateCategory: ", err)
      return false
    }
  }

  public deleteCategory = async (key): Promise<any> => {
    try {
      const categoriesDatabase = firebase.database().ref('database/categories')
      await categoriesDatabase.child(key).remove()

      return true
    } catch (err) {
      console.log("DAO Error deleteCategory: ", err)
      return false
    }
  }
}

export default Categories