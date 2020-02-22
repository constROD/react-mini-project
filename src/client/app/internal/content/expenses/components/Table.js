import React, { useState, useEffect } from 'react'
import { Table, Modal, Button, Spin } from 'antd'
import firebase from 'firebase/app'
import { toast } from 'react-toastify'
import uuid from 'uuid/v4'

import { COLUMNS } from './Columns'
import { EXPENSES_MODEL } from '../../../../../shared/enums/Schema'
import ExpensesService from '../../../../../shared/impl/Expenses'

import ModalContent from './Modal'

const ExpensesClass = new ExpensesService()

const TableContent = () => {
  const EXPENSE_DEFAULT = EXPENSES_MODEL.reduce((accuExpense, currentExpense) => (
    { ...accuExpense, [currentExpense.field]: currentExpense.defaultValue }
  ), {})

  const initialState = {
    visible: false,
    title: '',
    type: '',
    expense: {
      ...EXPENSE_DEFAULT,
      id: uuid()
    }
  }

  const [modal, setModal] = useState(initialState)
  const [expenses, setExpenses] = useState({})
  const [categories, setCategories] = useState({})
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    const expensesDatabase = firebase.database().ref('database/expenses')
    const categoriesDatabase = firebase.database().ref('database/categories')

    const expensesListener = expensesDatabase.on('value', snapshot => {
      setExpenses(snapshot.val() || {})
    })
    const categoriesListener = categoriesDatabase.on('value', snapshot => {
      setCategories(snapshot.val() || {})
    })

    return () => {
      expensesDatabase.off('value', expensesListener),
        categoriesDatabase.off('value', categoriesListener)
    }
  }, [])

  useEffect(() => {
    getDataSource()

    return () => getDataSource()
  }, [expenses, categories])

  const getDataSource = () => {
    Object.keys(expenses).length > 0 ?
      setDataSource(
        Object.values(expenses).map((expense, key) => {
          const category = Object.values(categories).filter(category => category.id == expense.category)[0]

          return {
            ...expense,
            category: category ? category.title : expense.category,
            key: Object.keys(expenses)[key]
          }
        })
      ) : setDataSource([])
  }

  const handleOnClickAdd = () => {
    setModal({
      ...modal,
      visible: true,
      title: 'Add Expense',
      type: 'Add'
    })
  }

  const handleOnClickEdit = (expense) => {
    setModal({
      ...modal,
      visible: true,
      title: 'Edit Expense',
      type: 'Edit',
      expense: {
        ...expense
      }
    })
  }

  const handleOnClickDelete = async (key) => {
    await ExpensesClass.deleteExpense(key)
  }

  const handleOnClickSaveModal = async () => {
    if (handleOnValidate()) {
      if (modal.type === 'Add') {
        await ExpensesClass.createExpense(modal.expense)
        toast.success('Successfully added!')
      } else {
        const expense = modal.expense
        const expenseKey = expense.key
        delete expense.key

        await ExpensesClass.updateExpense(expenseKey, expense)
        toast.success('Successfully updated!')
      }

      setModal(initialState)
    }
  }

  const handleOnClickCancelModal = () => {
    setModal(initialState)
  }

  const handleOnChange = (e, selectVal) => {
    if (typeof e !== 'string') {
      const { id, value } = e.target

      setModal({
        ...modal,
        expense: {
          ...modal.expense, [id]: value
        }
      })
    } else {
      setModal({
        ...modal,
        expense: {
          ...modal.expense, [e]: selectVal
        }
      })
    }
  }

  const handleOnValidate = () => {
    const { id, title, category, date, value } = modal.expense

    if (id == '' || title == '' || category == '' || date == '' || value == '') {
      toast.warn('Please fill up all fields')

      return false
    } else {
      return true
    }
  }

  const handleOnKeyPress = (e) => {
    e.key == 'Enter' && handleOnClickSaveModal()
  }

  return (
    <>
      <Modal
        className="expenses-modal"
        title={modal.title}
        visible={modal.visible}
        onCancel={handleOnClickCancelModal}
        footer={
          <>
            <Button
              type="primary"
              className="save-button"
              onClick={handleOnClickSaveModal}
            >
              Save
            </Button>
            <Button
              type="default"
              className="cancel-button"
              onClick={handleOnClickCancelModal}
            >
              Cancel
            </Button>
          </>
        }
      >
        <ModalContent
          type={modal.type}
          expense={modal.expense}
          categories={Object.values(categories)}
          handleOnChange={handleOnChange}
          handleOnKeyPress={handleOnKeyPress}
        />
      </Modal>
      <div className="expenses-header">
        <span>Expenses Record</span>
        <Button
          type="primary"
          onClick={handleOnClickAdd}
        >
          Add Expense
      </Button>
      </div>
      {
        dataSource.length == 0 ?
          <Spin tip="Loading...">
            <Table
              className="expenses-table"
              dataSource={dataSource}
              columns={COLUMNS(handleOnClickEdit, handleOnClickDelete)}
            />
          </Spin> :
          <Table
            className="expenses-table"
            dataSource={dataSource}
            columns={COLUMNS(handleOnClickEdit, handleOnClickDelete)}
          />
      }
    </>
  )
}

export default TableContent