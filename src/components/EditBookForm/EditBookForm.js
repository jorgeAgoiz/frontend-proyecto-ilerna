import React from 'react'
import { useParams } from 'react-router-dom'
import './EditBookForm.css'

const EditBookForm = () => {
  const { bookId } = useParams()
  console.log(bookId)

  return (
    <div className='edit-book'>
      <h1>Editar Libro</h1>
      <form className='edit-book-form'>
        <div id='title-book'>
          <label>Titulo: </label>
          <input type='text' />
        </div>
        <div id='autor-book'>
          <label>Autor: </label>
          <input type='text' />
        </div>
        <div id='category-book'>
          <label>Categoría: </label>
          <input type='text' />
        </div>
        <div id='rating-book'>
          <label>Valoración: </label>
          <input type='text' />
        </div>
        <div id='description-book'>
          <label>Descripción: </label>
          <textarea />
        </div>
        <div id='submit-book'>
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}

export default EditBookForm

/* Estilar esto y darle funcionalidades */
