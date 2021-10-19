import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useUserLog from '../../hooks/useUserLog'
import './Header.css'

const Header = () => {
  const { userLog, setUserLog } = useUserLog()
  const history = useHistory()

  const onHandleSignOut = () => {
    sessionStorage.clear()
    setUserLog({
      username: null,
      user_id: null,
      created_at: null,
      logged: false
    })
    return history.push('/')
  }

  const loggedBtns = () => {
    if (!userLog.id) {
      return (
        <div className='session-btns'>
          <Link className='signin' to='/signin'>Iniciar Sesion</Link>
          <Link className='signup' to='/signup'>Registrarse</Link>
        </div>
      )
    } else {
      return (
        <>
          <div className='add-book-btn'>
            <Link to='/add-book'>
              <img src='./plus.png' height='55px' width='55px' title='Añadir Libro' alt='add-book-icon' />
            </Link>
            <h2>Añadir Libro</h2>
          </div>
          <div className='session-btns'>
            <Link className='signup' to='/my_activity'>Mi Actividad</Link>
            <button className='signin' onClick={onHandleSignOut}>Cerrar Sesión</button>
          </div>
        </>

      )
    }
  }

  return (
    <div className='header'>
      <div className='title-logo'>
        <h1>Community Readers</h1>
        <Link to='/'>
          <img src='icons8.png' alt='book-icon' height='45px' width='45px' />
        </Link>
      </div>
      {
        loggedBtns()
      }
    </div>
  )
}

export default Header
