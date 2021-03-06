// Dependencias
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
// Estilos
import './BookCard.css'
// Componente
import ReviewsModal from '../ReviewsModal/ReviewsModal'
// Contexto
import { AuthContext } from '../../context/AuthContext'
// Custom hoook
import useBookData from '../../hooks/useBookData'
// Funcion de llamada a la API
import { deleteBook } from '../../services/apiCalls'

const BookCard = () => {
  const { bookId } = useParams()
  const { userLog } = useContext(AuthContext)
  const { history, bookInfo, setBooks } = useBookData(bookId)
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
    const deletedBook = await deleteBook(bookInfo.book.id)
    if (!deletedBook.success) {
      return setError(deletedBook.message)
    }
    setError(null)
    setBooks({})
    return history.push('/')
  }

  const onHandleEditBook = () => {
    return history.push(`/edit-book/${bookInfo.book.id}`)
  }

  const showBookDetail = () => {
    const addDate = new Date(bookInfo.book.created_at).toLocaleDateString()
    return (
      <>
        <div className='book-title'>
          <h1>{bookInfo.book.title}</h1>
        </div>
        <div className='book-author'>
          <h2>Autor:</h2>
          <p>{bookInfo.book.author}</p>
        </div>
        <div className='book-category'>
          <h2>Categoría:</h2>
          <p>{bookInfo.book.category}</p>
        </div>
        <div className='book-rating'>
          <h2>Valoración global:</h2>
          <div id='rating-data'>
            <img src='../valoration.png' alt='val-icon' width='40px' height='40px' />
            <p>{bookInfo.book.average}</p>
          </div>
        </div>
        <div className='book-created-at'>
          <h2>Añadido:</h2>
          <p>{addDate}</p>
        </div>
        <div className='book-description'>
          {error ? (<p className='error-msg-p'>{error}</p>) : null}
          <h2>Descripción:</h2>
          <p id='description-text'>{bookInfo.book.book_description}</p>
        </div>
        <div className='book-reviews'>
          {modal ? <ReviewsModal onClose={hideReviewsModal} /> : null}
          <button onClick={showReviewsModal}>Ver Reseñas</button>
        </div>
        {
          bookInfo.book.id_user === userLog.id
            ? (
              <>
                <div className='book-edit'>
                  <p>Editar Libro</p>
                  <button onClick={onHandleEditBook}>
                    <img src='../editing.png' alt='edit-icon' />
                  </button>
                </div>
                <div className='book-delete'>
                  <p>Eliminar Libro</p>
                  <button onClick={onHandleDeleteBook}>
                    <img src='../bin.png' alt='delete-icon' />
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
          bookInfo.selected
            ? showBookDetail()
            : null
      }
    </div>
  )
}

export default BookCard
