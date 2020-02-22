import React from 'react'
import { Popconfirm, Icon } from 'antd'

export const COLUMNS = (handleOnClickEdit, handleOnClickDelete) => ([
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    sorter: (a, b) => a.description.length - b.description.length
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
          title="Are you sure to delete this category?"
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