import React, { useContext, useEffect, useState } from 'react'
import './BookCard.css'
import { useHistory, useParams } from 'react-router-dom'
import { BooksContext } from '../../context/BooksContext'
import { getAllBooks } from '../../services/apiCalls'
import ReviewsModal from '../ReviewsModal/ReviewsModal'
import { AuthContext } from '../../context/AuthContext'

const BookCard = () => {
  const { bookId } = useParams()
  const { books, setBooks } = useContext(BooksContext)
  const { userLog } = useContext(AuthContext)
  const [bookDetails, setBookDetails] = useState()
  const [modal, setModal] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (books.data && books.data.length > 0) {
      setBookDetails(books.data.filter(book => book.id.toString() === bookId)[0])
    } else {
      const page = sessionStorage.getItem('page')
      const order = sessionStorage.getItem('order')
      const direction = sessionStorage.getItem('direction')
      getAllBooks(page, order, direction).then(data => setBooks(data)).catch(err => {
        console.log(err)
        return history.push('/')
      })
    }
  }, [books, bookId, setBooks])

  const showReviewsModal = () => {
    setModal(true)
  }
  const hideReviewsModal = () => {
    setModal(false)
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
                  <button onClick={() => console.log('Whats up??')}>
                    <img src='../editing.png' alt='edit-icon' width='50px' height='50px' />
                  </button>
                </div>
                <div className='book-delete'>
                  <button onClick={() => console.log('Whats up??')}>
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
