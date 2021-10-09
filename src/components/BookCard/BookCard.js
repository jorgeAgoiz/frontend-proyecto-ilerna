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

  console.log(userLog.id)
  console.log(bookDetails)
  /* Ahora si los IDS coinciden deberiamos mostrar los botones de edit y delete libro */

  useEffect(() => {
    // Si el array contiene libros y existe
    if (books.data && books.data.length > 0) { // Seteamos nuestro estado de componente con el libro fijado
      setBookDetails(books.data.filter(book => book.id.toString() === bookId)[0])
    } else { // Si el array no existe o no contiene libros
      const page = sessionStorage.getItem('page')// Cogemos del sessionStorage los datos
      const order = sessionStorage.getItem('order')
      const direction = sessionStorage.getItem('direction')
      getAllBooks(page, order, direction).then(data => setBooks(data)).catch(err => {
        console.log(err)
        return history.push('/')
      }) // Hacemos una nueva llamada a la api para llenar el contexto
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

/* Apuntes:

- Si el usuario que accede es el autor del libro, daremos la opción de eliminar o modificar el libro

- No hara falta llamar a la api porque siempre que accedamos a traves del listado a los detalles del libro,
ese libro estara en el Context
*/
