import React from 'react'
import { Card, Spin } from 'antd'

const CardContent = props => {
  return (
    <>
      <Card title="No. of Categories" bordered={false}>
        {
          props.noOfCategories == 0 ? <Spin tip="Loading..." /> : props.noOfCategories
        }
      </Card>
      <Card title="No. of Expenses " bordered={false}>
        {
          props.noOfExpenses == 0 ? <Spin tip="Loading..." /> : props.noOfExpenses
        }
      </Card>
    </>
  )
}

export default CardContent