import React, { useState, useEffect } from 'react'
import MaskedInput from 'react-text-mask'

const PhoneMask = (props) => {
  const { inputRef, ...other } = props

  const [value, setValue] = useState('')

  useEffect(() => {
    let updatedValue = String(other.value)
    updatedValue = updatedValue.replace(/_/g, '')
    updatedValue = updatedValue.replace(/-/g, '')
    updatedValue = updatedValue.replace(/\s/g, '')
    updatedValue = updatedValue.replace(/\(/g, '')
    updatedValue = updatedValue.replace(/\)/g, '')
    setValue(updatedValue)
  }, [other.value])  
  
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={value.length <= 10 ?
        ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]
      :
        ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      }
      placeholderChar={'\u2000'}
    />
  )
}

export default PhoneMask