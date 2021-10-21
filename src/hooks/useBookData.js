import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'
import { getAllBooks } from '../services/apiCalls'

const useBookData = (bookId) => {
  const { books, setBooks } = useContext(BooksContext)
  const [bookDetails, setBookDetails] = useState()
  const history = useHistory()

  useEffect(() => {
    if (books.data && books.data.length > 0) {
      setBookDetails(books.data.filter(book => book.id.toString() === bookId)[0])
    } else {
      const page = sessionStorage.getItem('page')
      const order = sessionStorage.getItem('order')
      const direction = sessionStorage.getItem('direction')
      getAllBooks(page, order, direction)
        .then(data => setBooks(data))
        .catch(err => {
          console.log(err)/* Tenemos que manejar este error */
          return history.push('/')
        })
    }
  }, [books, bookId, setBooks, history])

  return { history, bookDetails, setBooks, books }
}

export default useBookData

/*  Aqui podriamos implementar el contexto del libro seleccionado y prescindir del estado del componente */
