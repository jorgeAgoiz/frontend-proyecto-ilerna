import React, { useContext, useEffect } from 'react'
import { BooksContext } from '../../context/BooksContext'
import { getAllBooks } from '../../services/apiCalls'
import ListBooks from '../ListBooks/ListBooks'
import SearchBar from '../SearchBar/SearchBar'
import './SearchList.css'

const SearchList = () => {
  const { books, setBooks } = useContext(BooksContext)

  useEffect(() => {
    if (!books.success) {
      getAllBooks(1, 'title', 'ASC').then(data => setBooks(data))
    }
  }, [books, setBooks])

  return (
    <div className='search-list'>
      <div className='main-title'>
        <h1>Libros de la comunidad</h1>
      </div>
      <SearchBar />
      <ListBooks allBooks={books} />
    </div>
  )
}

export default SearchList

/* Habra que plantear la paginación, y la accesibilidad a los datos
de cada libro en particular */
