import React from 'react'
import PropTypes from 'prop-types'
import {Button as Btn} from "antd" 

const Button = ({text ,onClick, disabled}) => {
  return (
       <Btn disabled={!disabled} onClick={onClick} type='primary'>{text}</Btn>
  )
}

Button.propTypes={
  text: PropTypes.string
}
export default Button
