import React from 'react'
import GenericBtn from '../GenericBtn/GenericBtn'
import './MyActivity.css'

const MyActivity = () => {
  return (
    <div className='myactivity-main'>
      <div className='myactivity-title'>
        <h1>Mi Actividad</h1>
      </div>

      <div className='books-main'>
        <h2>Libros</h2>
        <div className='list-of-books'>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>

          {/* Aqui iran los libros */}
        </div>
      </div>
      <div className='review-main'>
        <h2>Reseñas</h2>
        <div className='list-of-reviews'>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>
          <p>Hola que tal</p>

          {/* Aqui iran las reseñas */}
        </div>
      </div>
      <div className='delete-user'>
        <GenericBtn
          onClickFunc={() => console.log('Hola que tal')}
          text='Eliminar usuario'
          nameClass='delete-user-btn'
        />
      </div>
    </div>
  )
}

export default MyActivity
