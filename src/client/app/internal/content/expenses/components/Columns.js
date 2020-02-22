import React from 'react'
import { Popconfirm, Icon } from 'antd'
import moment from 'moment'

export const COLUMNS = (handleOnClickEdit, handleOnClickDelete) => ([
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    sorter: (a, b) => a.category.length - b.category.length
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: e => moment(e).format('YY-MM-DD'),
    sorter: (a, b) => new Date(a.date) - new Date(b.date)
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    sorter: (a, b) => a.value.length - b.value.length
  },
  {
    title: 'Action',
    key: 'action',
    className: "action-column",
    render: e => (
      <>
        <div className="edit-icon" onClick={() => handleOnClickEdit(e)}>
          <Icon type="edit" />
        </div>
        <Popconfirm
          title="Are you sure to delete this expense?"
          onConfirm={() => handleOnClickDelete(e.key)}
          okText="Yes"
          cancelText="No"
        >
          <div className="delete-icon">
            <Icon type="delete" />
          </div>
        </Popconfirm>
      </>
    )
  }
])