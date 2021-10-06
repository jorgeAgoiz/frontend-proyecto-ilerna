import React from 'react'
import { Link } from 'react-router-dom'
import './ListBooks.css'

const ListBooks = ({ allBooks, nextPage, previousPage, changingQuery }) => {
  const showBooks = (books) => {
    return books.map(book => {
      return (
        <tr className='book-card' key={book.id}>
          <td>{book.title.toUpperCase()}</td>
          <td>{book.author}</td>
          <td>{book.category.toUpperCase()}</td>
          <td>
            <Link to={`/book/${book.id}`}>
              <img title='Detalles del libro' src='view-details.png' alt='details-icon' width='30px' height='30px' />
            </Link>

          </td>
        </tr>
      )
    })
  }

  return (
    <div className='list-books'>
      <table className='book-table'>
        <thead>
          <tr className='book-card'>
            <th>
              <img className='arrow-order' src='upArrow.png' alt='icon-arrow' width='30px' height='30px' onClick={() => changingQuery('title', 'ASC')} />
              <p>Título</p>
              <img className='arrow-order' src='downArrow.png' alt='icon-arrow' width='30px' height='30px' onClick={() => changingQuery('title', 'DESC')} />
            </th>
            <th>
              <img className='arrow-order' src='upArrow.png' alt='icon-arrow' width='30px' height='30px' onClick={() => changingQuery('author', 'ASC')} />
              <p>Autor</p>
              <img className='arrow-order' src='downArrow.png' alt='icon-arrow' width='30px' height='30px' onClick={() => changingQuery('author', 'DESC')} />
            </th>
            <th>
              <img className='arrow-order' src='upArrow.png' alt='icon-arrow' width='30px' height='30px' onClick={() => changingQuery('category', 'ASC')} />
              <p>Categoría</p>
              <img className='arrow-order' src='downArrow.png' alt='icon-arrow' width='30px' height='30px' onClick={() => changingQuery('category', 'DESC')} />
            </th>
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