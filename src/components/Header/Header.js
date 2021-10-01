import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Header.css'

const Header = () => {
  const { userLog, setUserLog } = useContext(AuthContext)
  const history = useHistory()

  useEffect(() => {
    if (sessionStorage.getItem('username') && !userLog.username) {
      setUserLog({
        username: sessionStorage.getItem('username'),
        id: sessionStorage.getItem('user_id'),
        created_at: sessionStorage.getItem('antiquity')
      })
    }
  }, [userLog, setUserLog])

  const onHandleSignOut = () => {
    sessionStorage.clear()
    setUserLog({
      username: null,
      user_id: null,
      created_at: null
    })
    console.log('probando')
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
        <div className='session-btns'>
          <Link className='signup' to='/my_activity'>Mi Actividad</Link>
          <button className='signin' onClick={onHandleSignOut}>Cerrar Sesión</button>
        </div>
      )
    }
  }

  return (
    <div className='header'>
      <div className='title-logo'>
        <h1>Community Readers</h1>
        <a href='/'>
          <img src='https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-book-office-stationery-justicon-lineal-color-justicon.png' alt='book-icon' height='45px' width='45px' />
        </a>
      </div>
      {
        loggedBtns()
      }
    </div>
  )
}

export default Header
/* Podemos mirar en convertir el useEffect en un custom hook
para simplificar la complejidad del componente */
