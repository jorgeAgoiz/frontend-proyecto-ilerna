import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BookCard.css'
import ReviewsModal from '../ReviewsModal/ReviewsModal'
import { AuthContext } from '../../context/AuthContext'
import useBookData from '../../hooks/useBookData'
import { deleteBook } from '../../services/apiCalls'

const BookCard = () => {
  const { bookId } = useParams()
  const { userLog } = useContext(AuthContext)
  const { history, bookDetails } = useBookData(bookId)
  const [modal, setModal] = useState(false)
  const [error, setError] = useState(null)

  const showReviewsModal = () => {
    setModal(true)
  }
  const hideReviewsModal = () => {
    setModal(false)
  }

  const onHandleDeleteBook = async (evt) => {
    evt.preventDefault()
    const deletedBook = await deleteBook(bookDetails.id)
    if (!deletedBook.success) {
      return setError(deletedBook.message)
    }
    return history.push('/')
  }

  const showBookDetail = () => {
    const addDate = new Date(bookDetails.created_at).toLocaleDateString()
    return (
      <>
        <div className='book-title'>
          <h1>{bookDetails.title}</h1>
        </div>
        <div className='book-author'>
          <h2>Autor:</h2>
          <p>{bookDetails.author}</p>
        </div>
        <div className='book-category'>
          <h2>Categoría:</h2>
          <p>{bookDetails.category}</p>
        </div>
        <div className='book-rating'>
          <h2>Valoración global:</h2>
          <div id='rating-data'>
            <img src='../valoration.png' alt='val-icon' width='40px' height='40px' />
            <p>{bookDetails.rating}</p>
          </div>
        </div>
        <div className='book-created-at'>
          <h2>Añadido:</h2>
          <p>{addDate}</p>
        </div>
        <div className='book-description'>
          {error ? (<p>{error}</p>) : null}{/* Estilar este error */}
          <h2>Descripción:</h2>
          <p>{bookDetails.book_description}</p>
        </div>
        <div className='book-reviews'>
          {modal ? <ReviewsModal onClose={hideReviewsModal} bookInfo={bookDetails} /> : null}
          <button onClick={showReviewsModal}>Ver Reseñas</button>
        </div>
        {
          bookDetails.id_user === userLog.id
            ? (
              <>
                <div className='book-edit'>
                  <button onClick={() => history.push('/')}>
                    <img src='../editing.png' alt='edit-icon' width='50px' height='50px' />
                  </button>
                </div>
                <div className='book-delete'>
                  <button onClick={onHandleDeleteBook}>
                    <img src='../bin.png' alt='delete-icon' width='50px' height='50px' />
                  </button>
                </div>
              </>
              )
            : null
        }

      </>
    )
  }

  return (
    <div className='book-card-main'>
      {
          bookDetails
            ? showBookDetail()
            : null
      }
    </div>
  )
}

export default BookCard

/* Gran limpieza de codigo y diseccionar en componentes mas pequeños */
