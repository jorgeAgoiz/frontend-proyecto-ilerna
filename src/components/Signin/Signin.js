import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { signinUser } from '../../services/apiCalls'
import InputConfirm from '../InputConfirm/InputConfirm'
import './Signin.css'

const Signin = () => {
  const [error, setError] = useState(null)
  const history = useHistory()
  const { setUserLog } = useContext(AuthContext)

  const onHandleForm = async (evt) => {
    evt.preventDefault()
    const username = evt.target.username.value
    const password = evt.target.password.value
    if (!username) {
      return setError('Necesita introducir un nombre de usuario')
    }
    if (!password) {
      return setError('Necesita introducir un password')
    }
    setError(null)
    const user = {
      username,
      password
    }
    const userLogged = await signinUser(user)
    if (!userLogged.success) {
      return setError(userLogged.message)
    }
    setUserLog(userLogged.user)
    setTimeout(() => {
      return history.push('/')
    }, 1000)
  }

  const showError = (error) => {
    return <p id='error'>{error}</p>
  }

  return (
    <div className='signin-main'>
      <h1>Iniciar Sesión:</h1>
      {error ? showError(error) : null}
      <form className='signin-form' onSubmit={onHandleForm}>
        <label htmlFor='username'>Nombre de usuario:</label>
        <input id='username' type='text' name='username' />
        <label htmlFor='password'>Contraseña:</label>
        <input id='password' type='password' name='password' />
        <InputConfirm nameClass='confirm-sign-btn' textValue='Iniciar' />
      </form>
    </div>
  )
}

export default Signin
