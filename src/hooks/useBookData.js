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
    if (!bookInfo.selected) {
      console.log('estoy dentro')
      const page = sessionStorage.getItem('page')
      const order = sessionStorage.getItem('order')
      const direction = sessionStorage.getItem('direction')
      getAllBooks(page, order, direction)
        .then(results => {
          setBooks(results)
          return setBookInfo({
            selected: true,
            book: results.data.filter(book => book.id.toString() === bookId)[0]
          })
        })
        .catch(err => {
          console.log(err)/* Manejemos este error */
          return history.push('/')
        })
    }
  }, [bookId, history])

  return { history, bookInfo, setBooks, books, setBookInfo }
}

export default useBookData
