import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BooksContext } from '../../context/BooksContext'
import { getAllBooks } from '../../services/apiCalls'

const BookCard = () => {
  const { bookId } = useParams()
  const { books, setBooks } = useContext(BooksContext)
  const [bookDetails, setBookDetails] = useState()

  useEffect(() => {
    // Si el array contiene libros y existe
    if (books.data && books.data.length > 0) { // Seteamos nuestro estado de componente con el libro fijado
      setBookDetails(books.data.filter(book => book.id.toString() === bookId))
    } else { // Si el array no existe o no contiene libros
      const page = sessionStorage.getItem('page')// Cogemos del sessionStorage los datos
      const order = sessionStorage.getItem('order')
      const direction = sessionStorage.getItem('direction')
      getAllBooks(page, order, direction).then(data => setBooks(data))// Hacemos una nueva llamada a la api para llenar el contexto
    }
  }, [books, bookId, setBooks])

  const showBookDetail = () => {
    console.log(bookDetails)
    console.log(books)
  }

  return (
    <div>
      <h1>Ficha del libro</h1>
      {
          showBookDetail()
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
