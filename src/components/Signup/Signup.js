import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { createUser } from '../../services/apiCalls'
import InputConfirm from '../InputConfirm/InputConfirm'
import './Signup.css'

const Signup = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const history = useHistory()

  const onHandleForm = async (evt) => {
    evt.preventDefault()
    const username = evt.target.username.value
    const password = evt.target.password1.value
    const confirmPassword = evt.target.password2.value
    if (password !== confirmPassword) {
      setError('Las contraseñas deben coincidir.')
      return
    }
    setError(null)
    const user = {
      username,
      password
    }
    const newUser = await createUser(user)
    if (!newUser.success) {
      setError(newUser.message)
      return
    }
    setSuccess('Usuario registrado correctamente')
    setTimeout(() => {
      setSuccess(null)
      return history.push('/')
    }, 1500)
  }

  const showError = (error) => {
    return <p id='error'>{error}</p>
  }

  const showSuccess = (success) => {
    return <p id='success'>{success}</p>
  }

  return (
    <div className='signup-main'>
      <h1>Registrar Usuario</h1>
      {error ? showError(error) : null}
      {success ? showSuccess(success) : null}
      <form className='signup-form' onSubmit={onHandleForm}>
        <label htmlFor='username'>Nombre de usuario:</label>
        <input id='username' type='text' name='username' />
        <label htmlFor='password1'>Contraseña:</label>
        <input id='password1' type='password' name='password1' />
        <label htmlFor='password2'>Repetir contraseña:</label>
        <input id='password2' type='password' name='password2' />
        <InputConfirm nameClass='confirm-sign-btn' textValue='Registrar' />
      </form>
    </div>
  )
}

export default Signup
