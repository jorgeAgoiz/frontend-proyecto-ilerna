import React from 'react'
import { Link } from 'react-router-dom'
import './ListBooks.css'

const ListBooks = ({ page, numPages, allBooks, nextPage, previousPage, changingQuery, error }) => {
  const showBooks = (books) => {
    return books.map(book => {
      return (
        <tr className='book-card' key={book.id}>
          <td>{book.title.toUpperCase()}</td>
          <td>{book.author}</td>
          <td>{book.category.toUpperCase()}</td>
          <td>
            <Link to={`/book/${book.id}`}>
              <img id='details-icon' title='Detalles del libro' src='view-details.png' alt='details-icon' />
            </Link>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className='list-books'>
      {error ? <p className='error-msg-p'>{error}</p> : null}
      <table className='book-table'>
        <thead>
          <tr className='book-card'>
            <th>
              <img className='arrow-order' src='upArrow.png' alt='icon-arrow' onClick={() => changingQuery('title', 'ASC')} />
              <p>Título</p>
              <img className='arrow-order' src='downArrow.png' alt='icon-arrow' onClick={() => changingQuery('title', 'DESC')} />
            </th>
            <th>
              <img className='arrow-order' src='upArrow.png' alt='icon-arrow' onClick={() => changingQuery('author', 'ASC')} />
              <p>Autor</p>
              <img className='arrow-order' src='downArrow.png' alt='icon-arrow' onClick={() => changingQuery('author', 'DESC')} />
            </th>
            <th>
              <img className='arrow-order' src='upArrow.png' alt='icon-arrow' onClick={() => changingQuery('category', 'ASC')} />
              <p>Categoría</p>
              <img className='arrow-order' src='downArrow.png' alt='icon-arrow' onClick={() => changingQuery('category', 'DESC')} />
            </th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {showBooks(allBooks.data)}
        </tbody>
      </table>
      <div className='num-pages'>
        <div className='previous-icon' onClick={previousPage} hidden={page <= 1}>
          <img src='previous.png' alt='book-icon' />
        </div>
        <div className='next-icon' onClick={nextPage} hidden={page >= numPages}>
          <img src='next.png' alt='book-icon' />
        </div>
      </div>
      <div className='current-page'>
        <p>Pagina {page} de {numPages}</p>
      </div>
    </div>
  )
}

export default ListBooks
