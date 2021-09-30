import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='signup-main'>
      <h1>Registrar Usuario</h1>
      <form className='signup-form'>
        <label for='username'>Nombre de usuario:</label>
        <input id='username' type='text' name='username' />
        <label for='password1'>Contraseña:</label>
        <input id='password1' type='password' name='password1' />
        <label for='password2'>Repetir contraseña:</label>
        <input id='password2' type='password' name='password2' />
        <input className='confirm-btn' type='submit' value='Registrar' />
      </form>
    </div>
  )
}

export default Signup

/* La idea es crear un componente ConfirmBtn con un input tipo Submit
 standard para toda nuestra app */
