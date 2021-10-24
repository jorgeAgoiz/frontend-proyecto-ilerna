import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useBookData from '../../hooks/useBookData'
import { updateBook } from '../../services/apiCalls'
import CancelBtn from '../CancelBtn/CancelBtn'
import InputConfirm from '../InputConfirm/InputConfirm'
import './EditBookForm.css'

const EditBookForm = () => {
  const { bookId } = useParams()
  const { history, bookInfo, setBooks, books } = useBookData(bookId)
  const [error, setError] = useState(null)

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
      id: bookInfo.book.id,
      rating: bookInfo.book.rating
    }
    const bookUpdated = await updateBook(bookData)
    if (!bookUpdated.success) {
      return setError(bookUpdated.message)
    }
    setError(null)
    const booksArray = books.data.map(book => {
      if (book.id === parseInt(bookId)) {
        book.title = bookData.title
        book.author = bookData.author
        book.category = bookData.category
        book.book_description = bookData.book_description
      }
      return book
    })
    const newBooks = {
      ...books,
      data: booksArray
    }
    setBooks(newBooks)
    return history.push(`/book/${bookId}`)
  }

  const showEditForm = () => {
    return (
      <>
        <form className='edit-book-form' onSubmit={onHandleSubmit}>
          <div id='title-book'>
            <label>Titulo: </label>
            <input type='text' name='title' defaultValue={bookInfo.book.title} required />
          </div>
          <div id='autor-book'>
            <label>Autor: </label>
            <input type='text' name='author' defaultValue={bookInfo.book.author} required />
          </div>
          <div id='category-book'>
            <label>Categoría: </label>
            <select name='category' defaultValue={bookInfo.book.category} required>
              <option value='biografia'>Biografía</option>
              <option value='cientifico'>Científico</option>
              <option value='ciencia ficción'>Ciencia ficción</option>
              <option value='consulta'>Consulta</option>
              <option value='cuento'>Cuento</option>
              <option value='deporte'>Deporte</option>
              <option value='historia'>Historia</option>
              <option value='humor'>Humor</option>
              <option value='novela'>Novela</option>
              <option value='relatos cortos'>Relatos cortos</option>
              <option value='salud'>Salud</option>
              <option value='sociedad'>Sociedad</option>
              <option value='suspense'>Suspense</option>
              <option value='terror'>Terror</option>
            </select>
          </div>
          <div id='description-book'>
            <label>Descripción: </label>
            <textarea
              name='book_description'
              defaultValue={bookInfo.book.book_description}
              maxLength='1200'
            />
          </div>
          <div id='submit-book'>
            <InputConfirm textValue='Guardar' nameClass='confirm-search-btn' />
            {error ? (<p>{error}</p>) : null}
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
        bookInfo.selected ? showEditForm() : null
      }
    </div>
  )
}

export default EditBookForm
