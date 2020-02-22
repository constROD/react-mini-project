import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'

import CardContent from '../components/Card'
import ChartContent from '../components/Chart'

const BodyContainer = () => {
  const [categories, setCategories] = useState({})
  const [expenses, setExpenses] = useState({})

  useEffect(() => {
    const expensesDatabase = firebase.database().ref('database/expenses')
    const categoriesDatabase = firebase.database().ref('database/categories')
    expensesDatabase.on('value', snapshot => {
      snapshot.val() === null ? setExpenses({}) : setExpenses(snapshot.val())
    })
    categoriesDatabase.on('value', snapshot => {
      snapshot.val() === null ? setCategories({}) : setCategories(snapshot.val())
    })

    return () => {
      expensesDatabase,
      categoriesDatabase
    }
  }, [])

  return (
    <>
      <div className="card-main">
        <CardContent
          noOfCategories={Object.values(categories).length}
          noOfExpenses={Object.values(expenses).length}
        />
      </div>
      <div className="chart-main">
        <ChartContent 
          categories={categories}
          expenses={expenses}
        />
      </div>
    </>
  )
}

export default BodyContainer