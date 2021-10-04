import React from 'react'
import './ListBooks.css'

const ListBooks = ({ allBooks }) => {
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

  /* const showNumPages = () => {
    const numbers = allBooks.number_pages
    console.log(numbers)
  } Aqui haremos un metodo que genere selectores de pagina si es necesario
  */

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
      {/* Paginación aquí */}
      <div className='num-pages'>
        <h2>Paginación</h2>
      </div>
    </div>
  )
}

export default ListBooks

/* Aqui ya empezaremos a mostrar el listado de libros,
necesitamos estilar bien la tabla y mostrar las paginas debajo. Tambien
necesitamos darle funcionalidad a SearchBar */
