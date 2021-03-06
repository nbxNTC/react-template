import React from 'react'
import MaskedInput from 'react-text-mask'

const CardCVVMask = (props) => {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[/\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  )
}

export default CardCVVMask