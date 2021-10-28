import React, { useContext, useEffect, useState } from 'react'
import { BooksContext } from '../../context/BooksContext'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { getAllBooks } from '../../services/apiCalls'
import ListBooks from '../ListBooks/ListBooks'
import SearchBar from '../SearchBar/SearchBar'
import './SearchList.css'

const SearchList = () => {
  const { books, setBooks } = useContext(BooksContext)
  const { setBookInfo } = useContext(SelectedBookContext)
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('title')
  const [direction, setDirection] = useState('ASC')
  const [newRequest, setNewRequest] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setBookInfo({ selected: false, book: {} })
    const currentPage = parseInt(books.page)
    if (!books.success || currentPage !== page || newRequest) {
      sessionStorage.setItem('page', page)
      sessionStorage.setItem('order', order)
      sessionStorage.setItem('direction', direction)
      getAllBooks(page, order, direction)
        .then(data => setBooks(data))
        .catch(err => setError(err.message))
      return setNewRequest(false)
    }
  }, [books, setBooks, page, newRequest])

  const nextPage = () => {
    if (page < books.number_pages) {
      return setPage(page + 1)
    }
  }
  const previousPage = () => {
    if (page > 1) {
      return setPage(page - 1)
    }
  }

  const changingQuery = (newOrder, newDirection) => {
    setOrder(newOrder)
    setDirection(newDirection)
    return setNewRequest(true)
  }

  return (
    <div className='search-list'>
      <div className='main-title'>
        <h1>Libros de la comunidad</h1>
      </div>
      <SearchBar />
      {
      books.success
        ? <ListBooks
            page={page}
            numPages={books.number_pages}
            allBooks={books}
            nextPage={nextPage}
            previousPage={previousPage}
            changingQuery={changingQuery}
            error={error}
          />
        : null
        }
    </div>
  )
}

export default SearchList
