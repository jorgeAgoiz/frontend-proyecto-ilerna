import React from 'react'
import { useParams } from 'react-router-dom'
import InputConfirm from '../InputConfirm/InputConfirm'
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
          <input type='text' required />
        </div>
        <div id='autor-book'>
          <label>Autor: </label>
          <input type='text' required />
        </div>
        <div id='category-book'>
          <label>Categoría: </label>
          <select name='category' required>
            <option value='biografia'>Biografía</option>
            <option value='cientifico'>Científico</option>
            <option value='ciencia ficcion'>Ciencia ficción</option>
            <option value='cuento'>Cuento</option>
            <option value='deporte'>Deporte</option>
            <option value='humor'>Humor</option>
            <option value='salud'>Salud</option>
            <option value='suspense'>Suspense</option>
            <option value='sociedad'>Sociedad</option>
            <option value='novela'>Novela</option>
            <option value='historia'>Historia</option>
            <option value='consulta'>Consulta</option>
          </select>
        </div>
        <div id='rating-book'>
          <label>Valoración: </label>
          <select name='valoration'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div id='description-book'>
          <label>Descripción: </label>
          <textarea
            name='book_description'
            maxLength='1200'
          />
        </div>
        <div id='submit-book'>
          <InputConfirm textValue='Guardar' nameClass='confirm-search-btn' />
        </div>
      </form>
    </div>
  )
}

export default EditBookForm

/* Darle funcionalidades */
