import React from 'react'
import './ListBooks.css'

const ListBooks = ({ allBooks }) => {
  console.log(allBooks)

  const showBooks = (books) => {
    return books.map(book => {
      return (
        <tr className='book-card' key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.category}</td>
        </tr>
      )
    })
  }

  return (
    <div className='list-books'>
      <h1>List Of Books</h1>
      <table className='book-table'>
        <tr className='book-card'>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Categoría</th>
        </tr>
        {
          showBooks(allBooks.data)
        }
      </table>
    </div>
  )
}

export default ListBooks

/* Aqui ya empezaremos a mostrar el listado de libros,
necesitamos estilar bien la tabla y mostrar las paginas debajo. */
