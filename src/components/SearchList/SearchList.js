import React, { useContext, useEffect, useState } from 'react'
import { BooksContext } from '../../context/BooksContext'
import { getAllBooks } from '../../services/apiCalls'
import ListBooks from '../ListBooks/ListBooks'
import SearchBar from '../SearchBar/SearchBar'
import './SearchList.css'

const SearchList = () => {
  const { books, setBooks } = useContext(BooksContext)
  const [page, setPage] = useState(1)
  /* Esto para la busqueda por titulo */
  /* const [searchTitle, setSearchTitle] = useState(false) */
  const [order, setOrder] = useState('title')
  const [direction, setDirection] = useState('ASC')
  const [newRequest, setNewRequest] = useState(false)

  useEffect(() => {
    const currentPage = parseInt(books.page)
    if (!books.success || currentPage !== page || newRequest) {
      getAllBooks(page, order, direction).then(data => setBooks(data))
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

  const filterATitle = () => {
    console.log('Buscando por título!!')
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
      <SearchBar filterATitle={filterATitle} />
      {
      books.success
        ? <ListBooks
            allBooks={books}
            nextPage={nextPage}
            previousPage={previousPage}
            changingQuery={changingQuery}
          />
        : null
        }

    </div>
  )
}

export default SearchList

/* Siguiente paso darle utilidad a la searchBar y liarnos con las fichas de los libros */
