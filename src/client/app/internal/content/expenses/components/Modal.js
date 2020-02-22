import React from 'react'
import { Input, Select, DatePicker, InputNumber } from 'antd'
import moment from 'moment'

const ModalContent = props => {
  return (
    <>
      <div className="input-wrapper">
        <Input
          value={props.expense.title}
          placeholder="Enter a title"
          id="title"
          onChange={props.handleOnChange}
          onKeyPress={props.handleOnKeyPress}
        />
      </div>
      <div className="input-wrapper">
        <Select
          value={props.expense.category}
          placeholder="Choose a category"
          onChange={value => props.handleOnChange('category', value)}
          onKeyPress={props.handleOnKeyPress}
        >
          {
            props.categories.map((category, key) => {
              return <Select.Option key={key} value={category.id}>{category.title}</Select.Option>
            })
          }
        </Select>
      </div>
      <div className="input-wrapper">
        <DatePicker
          value={moment(props.expense.date)}
          onChange={(date, dateString) => props.handleOnChange('date', moment(date).valueOf())}
          onKeyPress={props.handleOnKeyPress}
        />
      </div>
      <div className="input-wrapper">
        <InputNumber
          value={props.expense.value}
          placeholder="Enter a value"
          onChange={value => props.handleOnChange('value', value)}
          onKeyPress={props.handleOnKeyPress}
        />
      </div>
    </>
  )
}

export default ModalContent