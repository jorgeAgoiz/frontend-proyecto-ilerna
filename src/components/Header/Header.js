import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='title-logo'>
        <h1>Community Readers</h1>
        <img src='https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-book-office-stationery-justicon-lineal-color-justicon.png' alt='book-icon' height='45px' width='45px' />
      </div>
      <div className='session-btns'>
        <Link className='signin' to='/signin'>Iniciar Sesion</Link>
        <Link className='signup' to='/signup'>Registrarse</Link>
      </div>
    </div>
  )
}

export default Header
