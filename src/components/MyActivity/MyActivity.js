import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { getBooksOfUser } from '../../services/apiCalls'
import GenericBtn from '../GenericBtn/GenericBtn'
import './MyActivity.css'

const MyActivity = () => {
  const { userLog } = useContext(AuthContext)
  const [myBooks, setMyBooks] = useState([])
  /* const [ myReviews, setMyReviews ] = useState([]) */

  console.log(myBooks)

  useEffect(() => {
    getBooksOfUser(userLog.id)
      .then(result => setMyBooks(result.data))
      .then(response => {
        /* Aqui llamaremos a las reviews */
        console.log('Llamando reviews...')
      })
      .catch(err => console.log(err))
  }, [userLog])

  return (
    <div className='myactivity-main'>
      <div className='myactivity-title'>
        <h1>Mi Actividad</h1>
      </div>

      <div className='books-main'>
        <h2>Mis Libros</h2>
        <div className='list-of-books'>

          {/* Aqui iran los libros */}
        </div>
      </div>
      <div className='review-main'>
        <h2>Mis Reseñas</h2>
        <div className='list-of-reviews'>

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
