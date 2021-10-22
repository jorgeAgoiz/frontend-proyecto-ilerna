import { useContext, useEffect/*  useState */ } from 'react'
import { useHistory } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'
import { SelectedBookContext } from '../context/SelectedBookContext'
import { getAllBooks } from '../services/apiCalls'

const useBookData = (bookId) => {
  const { books, setBooks } = useContext(BooksContext)
  const { bookInfo, setBookInfo } = useContext(SelectedBookContext)
  const history = useHistory()

  useEffect(() => {
    if (books.data && books.data.length > 0) {
      setBookInfo({
        selected: true,
        book: books.data.filter(book => book.id.toString() === bookId)[0]
      })
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

  return { history, bookInfo, setBooks, books }
}

export default useBookData
