import React from 'react'
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
          {/* Aqui iran los libros */}
        </div>
      </div>
      <div className='review-main'>
        <h2>Reseñas</h2>
        <div className='list-of-reviews'>
          {/* Aqui iran las reseñas */}
        </div>
      </div>
      <div className='delete-user-btn'>
        <button>Eliminar usuario</button>
      </div>
    </div>
  )
}

export default MyActivity
