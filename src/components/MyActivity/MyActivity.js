import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { getBooksOfUser, getReviewsOfUser } from '../../services/apiCalls'
import GenericBtn from '../GenericBtn/GenericBtn'
import MyBooks from '../MyBooks/MyBooks'
import MyReviews from '../MyReviews/MyReviews'
import './MyActivity.css'

const MyActivity = () => {
  const { userLog } = useContext(AuthContext)
  const { /* bookInfo, */ setBookInfo } = useContext(SelectedBookContext)
  const [myBooks, setMyBooks] = useState([])
  const [myReviews, setMyReviews] = useState([])

  useEffect(() => {
    setBookInfo({ selected: false, book: {} })

    getBooksOfUser(userLog.id)
      .then(result => setMyBooks(result.data))
      .catch(err => console.log(err))/* Gestionar errores */

    getReviewsOfUser(userLog.id)
      .then(result => setMyReviews(result.data))
      .catch(err => console.log(err))/* Gestionar errores */
  }, [userLog])

  return (
    <div className='myactivity-main'>
      <div className='myactivity-title'>
        <h1>Mi Actividad</h1>
      </div>

      <div className='books-main'>
        <h2>Mis Libros</h2>
        <div className='list-of-books'>
          {
            myBooks.length > 0 ? <MyBooks books={myBooks} /> : null
          }
        </div>
      </div>
      <div className='review-main'>
        <h2>Mis Reseñas</h2>
        <div className='list-of-reviews'>
          {
            myReviews.length > 0 ? <MyReviews reviews={myReviews} /> : null
          }
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

/* Seguimos aqui estilando las reseñas propias y quizá
tengamos que darle una vuelta al backend */
