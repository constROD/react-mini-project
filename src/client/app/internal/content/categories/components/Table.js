import React, { useState, useEffect } from 'react'
import { Table, Modal, Button, Spin } from 'antd'
import firebase from 'firebase/app'
import { toast } from 'react-toastify'
import uuid from 'uuid/v4'

import { COLUMNS } from './Columns'
import { CATEGORIES_MODEL } from '../../../../../shared/enums/Schema'
import CategoriesService from '../../../../../shared/impl/Categories'

import ModalContent from './Modal'

const TableContent = () => {
  const CATEGORY_DEFAULT = CATEGORIES_MODEL.reduce((accuCategory, currentCategory) => (
    { ...accuCategory, [currentCategory.field]: currentCategory.defaultValue }
  ), {})

  const initialState = {
    visible: false,
    title: '',
    type: '',
    category: {
      ...CATEGORY_DEFAULT,
      id: uuid()
    }
  }

  const [modal, setModal] = useState(initialState)
  const [categories, setCategories] = useState({})
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    const categoriesDatabase = firebase.database().ref('database/categories')
    const categoriesListener = categoriesDatabase.on('value', snapshot => {
      setCategories(snapshot.val() || {})
    })

    return () => categoriesDatabase.off('value', categoriesListener)
  }, [])

  useEffect(() => {
    getDataSource()

    return () => getDataSource()
  }, [categories])

  const getDataSource = () => {
    Object.keys(categories).length > 0 ?
      setDataSource(
        Object.values(categories).map((category, key) => {
          return {
            ...category,
            key: Object.keys(categories)[key]
          }
        })
      ) : setDataSource([])
  }

  const handleOnClickAdd = () => {
    setModal({
      ...modal,
      visible: true,
      title: 'Add Category',
      type: 'Add'
    })
  }

  const handleOnClickEdit = (category) => {
    setModal({
      ...modal,
      visible: true,
      title: 'Edit Category',
      type: 'Edit',
      category: {
        ...category
      }
    })
  }

  const handleOnClickDelete = async (key) => {
    await CategoriesService.deleteCategory(key)
    toast.success('Successfully deleted!')
  }

  const handleOnClickSaveModal = async () => {
    if (handleOnValidate()) {
      if (modal.type === 'Add') {
        await CategoriesService.createCategory(modal.category)
        toast.success('Successfully added!')
      } else {
        const category = modal.category
        const categoryKey = category.key
        delete category.key

        await CategoriesService.updateCategory(categoryKey, category)
        toast.success('Successfully updated!')
      }

      setModal(initialState)
    }
  }

  const handleOnClickCancelModal = () => {
    setModal(initialState)
  }

  const handleOnChange = (e) => {
    const { id, value } = e.target

    setModal({
      ...modal,
      category: {
        ...modal.category, [id]: value
      }
    })
  }

  const handleOnValidate = () => {
    const { id, title, description } = modal.category

    if (id == '' || title == '' || description == '') {
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
        className="categories-modal"
        title={modal.title}
        visible={modal.visible}
        onCancel={handleOnClickCancelModal}
        footer={
          <div className="categories-modal-content">
            <Button type="primary" className="save-button" onClick={handleOnClickSaveModal}>Save</Button>
            <Button type="default" className="cancel-button" onClick={handleOnClickCancelModal}>Cancel</Button>
          </div>
        }
      >
        <ModalContent
          type={modal.type}
          category={modal.category}
          handleOnChange={handleOnChange}
          handleOnKeyPress={handleOnKeyPress}
        />
      </Modal>
      <div className="categories-header">
        <span>Categories Record</span>
        <Button
          type="primary"
          onClick={handleOnClickAdd}
        >
          Add Category
      </Button>
      </div>
      {
        dataSource.length == 0 ?
          <Spin tip="Loading...">
            <Table
              className="categories-table"
              dataSource={dataSource}
              columns={COLUMNS(handleOnClickEdit, handleOnClickDelete)}
            />
          </Spin> :
          <Table
            className="categories-table"
            dataSource={dataSource}
            columns={COLUMNS(handleOnClickEdit, handleOnClickDelete)}
          />
      }
    </>
  )
}

export default TableContent