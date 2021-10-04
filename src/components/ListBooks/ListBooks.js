import React/* , { useState } */ from 'react'
/* import { Link } from 'react-dom' */
import './ListBooks.css'

const ListBooks = ({ allBooks, nextPage, previousPage }) => {
  const showBooks = (books) => {
    return books.map(book => {
      return (
        <tr className='book-card' key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.category}</td>
          <td>Icono</td>
        </tr>
      )
    })
  }

  return (
    <div className='list-books'>
      <table className='book-table'>
        <thead>
          <tr className='book-card'>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Categoría</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {showBooks(allBooks.data)}
        </tbody>
      </table>
      <div className='num-pages'>
        <div className='previous-icon' onClick={previousPage}>
          <img src='previous.png' alt='book-icon' height='45px' width='45px' />
        </div>
        <div className='next-icon' onClick={nextPage}>
          <img src='next.png' alt='book-icon' height='45px' width='45px' />
        </div>
      </div>
    </div>
  )
}

export default ListBooks

/* Aqui ya empezaremos a mostrar el listado de libros,
necesitamos estilar bien la tabla y mostrar las paginas debajo. Tambien
necesitamos darle funcionalidad a SearchBar */
