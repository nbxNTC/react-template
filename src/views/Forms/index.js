import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { validate } from 'validate.js'

import { TextField } from '@material-ui/core'

import './styles.css'

import { parsePhone } from '../../utils/parsePhone'
import CPFMask from '../../masks/CPFMask'
import PhoneMask from '../../masks/PhoneMask'

const schema = {
  email: {
    presence: { allowEmpty: false, message: () => 'Este campo é obrigatório' },
    email: { message: () => 'Insira um email válido' }
  },
  password: {
    presence: { allowEmpty: false, message: () => 'Este campo é obrigatório' },
    length: { minimum: 8, tooShort: 'Mínimo de 8 caracteres' },
  },
  name: {
    presence: { allowEmpty: false, message: () => 'Este campo é obrigatório' },
    length: { maximum: 200, tooLong: 'Máximo de 200 caracteres' },
    format: { pattern: '[a-zA-Z\u00c0-\u024f\u1e00-\u1eff ]+', message: 'Não é permitido caracteres especiais' },
  },
  cpf: {
    presence: { allowEmpty: false, message: () => 'Este campo é obrigatório' },
    format: { pattern: "[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}", message: "Insira um CPF válido" }
  },
  phone: {
    presence: { allowEmpty: false, message: () => 'Este campo é obrigatório' },
    format: { pattern: "[(][1-9][0-9][)][ ][0-9]{4,5}[-][0-9]{4}", message: "Insira um número válido" }
  },
}

const Forms = () => {

  const history = useHistory()

  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      email: '',
      password: '',
      name: '',
      cpf: '',
      phone: '',
    },
    touched: {
      email: false,
      password: false,
      name: false,
      cpf: false,
      phone: false,
    },
    errors: {
      email: null,
      password: null,
      name: null,
      cpf: null,
      phone: null,
    },
  })

  const handleChange = (e) => {
    let { name, value } = e.target

    if (name === 'phone') value = parsePhone(value)

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value
      },
      touched: {
        ...formState.touched,
        [name]: true
      }
    }))
  }

  const handleValidate = () => {
    const errors = validate(formState.values, schema, { fullMessages: false })

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }))
  }

  useEffect(handleValidate, [formState.values, setFormState])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password,name, cpf, phone } = formState.values

    const body = { email, password,name, cpf, phone }

    console.log(body)
  }

  const hasError = (name) =>
    Boolean(formState.touched[name] && formState.errors[name])

  return (
    <div className='form-container'>
      <div className="content">
        <h1>Welcome to form page!</h1>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant='outlined'
            type='text'
            placeholder='Email'
            name='email'
            value={formState.values.email || ''}
            onChange={handleChange}
            helperText={hasError('email') && formState.errors['email'][0]}
            error={hasError('email')}
          />
          <TextField
            variant='outlined'
            type='password'
            placeholder='Senha'
            name='password'
            value={formState.values.password || ''}
            onChange={handleChange}
            helperText={hasError('password') && formState.errors['password'][0]}
            error={hasError('password')}
          />
          <TextField
            variant='outlined'
            type='text'
            placeholder='Nome'
            name='name'
            value={formState.values.name || ''}
            onChange={handleChange}
            helperText={hasError('name') && formState.errors['name'][0]}
            error={hasError('name')}
          />
          <TextField
            variant='outlined'
            type='text'
            placeholder='CPF'
            name='cpf'
            value={formState.values.cpf || ''}
            onChange={handleChange}
            helperText={hasError('cpf') && formState.errors['cpf'][0]}
            error={hasError('cpf')}
            InputProps={{ inputComponent: CPFMask }}
            onFocus={(event) => {
              event.target.select()
            }}
          />
          <TextField
            variant='outlined'
            type='text'
            placeholder='Telefone'
            name='phone'
            value={formState.values.phone || ''}
            onChange={handleChange}
            helperText={hasError('phone') && formState.errors['phone'][0]}
            error={hasError('phone')}
            InputProps={{ inputComponent: PhoneMask }}
            onFocus={(event) => {
              event.target.select()
            }}
          />
          <button type='submit'>Enviar</button>
          <button className='clean' onClick={() => history.goBack()}>Voltar</button>
        </form>
      </div>
    </div>
  )
}

export default Forms