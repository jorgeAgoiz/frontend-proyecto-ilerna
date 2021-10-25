import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { getBooksOfUser, getReviewsOfUser } from '../../services/apiCalls'
import GenericBtn from '../GenericBtn/GenericBtn'
import './MyActivity.css'

const MyActivity = () => {
  const { userLog } = useContext(AuthContext)
  const [myBooks, setMyBooks] = useState([])
  const [myReviews, setMyReviews] = useState([])

  console.log(myReviews)

  useEffect(() => {
    getBooksOfUser(userLog.id)
      .then(result => setMyBooks(result.data))
      .catch(err => console.log(err))

    getReviewsOfUser(userLog.id)
      .then(result => setMyReviews(result.data))
      .catch(err => console.log(err))
  }, [userLog])

  const showMyBooks = () => {
    return myBooks.map(book => {
      const addDate = new Date(book.created_at).toLocaleDateString()
      return (
        <div id='a-book' key={book.id}>
          <h3>{book.title}</h3>
          <p>Añadido: {addDate}</p>
        </div>
      )
    })
  }

  const showMyReviews = () => {
    return myReviews.map(rev => {
      return (
        <div key={rev.id}>
          <h3>{rev.text_review}</h3>
          <p>{rev.valoration}</p>
        </div>
      )
    })
  }

  return (
    <div className='myactivity-main'>
      <div className='myactivity-title'>
        <h1>Mi Actividad</h1>
      </div>

      <div className='books-main'>
        <h2>Mis Libros</h2>
        <div className='list-of-books'>
          {
            myBooks.length > 0 ? showMyBooks() : null
          }
        </div>
      </div>
      <div className='review-main'>
        <h2>Mis Reseñas</h2>
        <div className='list-of-reviews'>
          {
            myReviews.length > 0 ? showMyReviews() : null
          }
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

/* Seguimos aqui estilando las reseñas propias y quizá
tengamos que darle una vuelta al backend */
