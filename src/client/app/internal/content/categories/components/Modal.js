import React from 'react'
import { Input } from 'antd'

const ModalContent = props => {
  return (
    <>
      <div className="input-wrapper">
        <Input
          placeholder="Enter a title"
          id="title"
          value={props.category.title}
          onChange={props.handleOnChange}
          onKeyPress={props.handleOnKeyPress}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="Enter a description"
          id="description"
          value={props.category.description}
          onChange={props.handleOnChange}
          onKeyPress={props.handleOnKeyPress}
        />
      </div>
    </>
  )
}

export default ModalContent