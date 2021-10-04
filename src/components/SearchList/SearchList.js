import React, { useContext, useEffect, useState } from 'react'
import { BooksContext } from '../../context/BooksContext'
import { getAllBooks } from '../../services/apiCalls'
import ListBooks from '../ListBooks/ListBooks'
import SearchBar from '../SearchBar/SearchBar'
import './SearchList.css'

const SearchList = () => {
  const { books, setBooks } = useContext(BooksContext)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const currentPage = parseInt(books.page)
    if (!books.success || currentPage !== page) {
      getAllBooks(page, 'title', 'ASC').then(data => setBooks(data))
    }
  }, [books, setBooks, page])

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

  return (
    <div className='search-list'>
      <div className='main-title'>
        <h1>Libros de la comunidad</h1>
      </div>
      <SearchBar />
      {books.success ? <ListBooks allBooks={books} nextPage={nextPage} previousPage={previousPage} /> : null}

    </div>
  )
}

export default SearchList
