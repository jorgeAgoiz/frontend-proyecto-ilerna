import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { createNewBook } from '../../services/apiCalls'
import CancelBtn from '../CancelBtn/CancelBtn'
import InputConfirm from '../InputConfirm/InputConfirm'
import './AddBookForm.css'

const AddBookForm = () => {
  const { userLog } = useContext(AuthContext)
  const [error, setError] = useState(null)
  const history = useHistory()

  const onHandleCancel = (evt) => {
    evt.preventDefault()
    return history.push('/')
  }

  const onHandleSubmit = async (evt) => {
    evt.preventDefault()
    const newBook = {
      title: evt.target.title.value,
      author: evt.target.author.value,
      category: evt.target.category.value,
      book_description: evt.target.book_description.value,
      rating: evt.target.rating.value,
      id_user: userLog.id
    }
    const newBookAdded = await createNewBook(newBook)
    if (!newBookAdded.success) {
      return setError(newBookAdded.message)
    }
    return history.push('/')
  }

  return (
    <div className='main-add-book'>
      <h1>Añade un nuevo libro a la comunidad</h1>
      {
        error ? <h2 className='error-msg'>{error}</h2> : null
      }
      <form className='add-book-form' onSubmit={onHandleSubmit}>
        <div id='title-div'>
          <label htmlFor='title'>Título: </label>
          <input type='text' name='title' id='title' required />
        </div>
        <div id='author-div'>
          <label htmlFor='author'>Autor: </label>
          <input type='text' name='author' id='author' required />
        </div>
        <div id='category-div'>
          <label htmlFor='category'>Categoría: </label>
          <select name='category' id='category' required>
            <option value='biografia'>Biografía</option>
            <option value='cientifico'>Científico</option>
            <option value='ciencia ficción'>Ciencia ficción</option>
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
        <div id='valoration-div'>
          <label htmlFor='rating'>Valoración: </label>
          <select name='rating' id='rating' required>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div id='description-div'>
          <label htmlFor='book-description'>Descripción: </label>
          <textarea
            name='book_description'
            maxLength='1200'
            id='book-description'
          />
        </div>
        <div id='input-confirm-div'>
          <InputConfirm textValue='Guardar' nameClass='confirm-search-btn' />
        </div>
        <div id='link-cancel-div'>
          <CancelBtn nameClass='cancel-generic-btn' text='Cancelar' onClickFunc={onHandleCancel} />
        </div>
      </form>
    </div>
  )
}

export default AddBookForm

/*
  Aqui deberemos actualizar el contexto a la vez que la llamada a la API para crear un libro
*/
