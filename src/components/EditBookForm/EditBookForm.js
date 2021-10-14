import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSpecificBook, updateBook } from '../../services/apiCalls'
import CancelBtn from '../CancelBtn/CancelBtn'
import InputConfirm from '../InputConfirm/InputConfirm'
import './EditBookForm.css'

const EditBookForm = () => {
  const { bookId } = useParams()
  const [bookRev, setBookRev] = useState(null)
  const history = useHistory()

  useEffect(() => {
    if (!bookRev) {
      getSpecificBook(bookId)
        .then(response => setBookRev(response.data))
        .catch(err => console.log(err))
    }
  }, [bookRev, bookId])

  const onHandleCancel = (evt) => {
    evt.preventDefault()
    return history.goBack()
  }

  const onHandleSubmit = async (evt) => {
    evt.preventDefault()
    const bookData = {
      title: evt.target.title.value,
      author: evt.target.author.value,
      category: evt.target.category.value,
      book_description: evt.target.book_description.value,
      id: bookRev.id
    }
    await updateBook(bookData)
  }

  const showEditForm = () => {
    return (
      <>
        <form className='edit-book-form' onSubmit={onHandleSubmit}>
          <div id='title-book'>
            <label>Titulo: </label>
            <input type='text' name='title' defaultValue={bookRev.title} required />
          </div>
          <div id='autor-book'>
            <label>Autor: </label>
            <input type='text' name='author' defaultValue={bookRev.author} required />
          </div>
          <div id='category-book'>
            <label>Categoría: </label>
            <select name='category' defaultValue={bookRev.category} required>
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
          <div id='description-book'>
            <label>Descripción: </label>
            <textarea
              name='book_description'
              defaultValue={bookRev.book_description}
              maxLength='1200'
            />
          </div>
          <div id='submit-book'>
            <InputConfirm textValue='Guardar' nameClass='confirm-search-btn' />
            <CancelBtn nameClass='cancel-generic-btn' text='Cancelar' onClickFunc={onHandleCancel} />
          </div>
        </form>
      </>
    )
  }

  return (
    <div className='edit-book'>
      <h1>Editar Libro</h1>
      {
        bookRev ? showEditForm() : null
      }
    </div>
  )
}

export default EditBookForm

/* Darle funcionalidades */
