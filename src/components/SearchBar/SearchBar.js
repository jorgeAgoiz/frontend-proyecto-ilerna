import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { getBookByTitle } from '../../services/apiCalls'
import InputConfirm from '../InputConfirm/InputConfirm'
import './SearchBar.css'

const SearchBar = () => {
  const history = useHistory()
  const [notFound, setNotFound] = useState(false)

  const onHandleForm = async (evt) => {
    evt.preventDefault()
    console.log(`Buscando su libro... ${evt.target.title.value}`)
    const book = await getBookByTitle(evt.target.title.value)
    if (!book.success) {
      setNotFound(true)
      return console.log('NOT FOUND')
    }
    return history.push(`/book/${book.data.id}`)
  }

  const messageNotFound = () => {
    setTimeout(() => {
      setNotFound(false)
    }, 2000)

    return (
      <div className='form-div'>
        <h1 className='error-msg'>Libro no encontrado</h1>{/* Estilar este error */}
      </div>
    )
  }

  return !notFound
    ? (
      <>
        <form className='form-div' onSubmit={onHandleForm}>
          <label>Buscar por titulo: </label>
          <input type='text' placeholder='Título...' name='title' id='input-title' />
          <InputConfirm nameClass='confirm-search-btn' textValue='Buscar' />
        </form>
      </>
      )
    : messageNotFound()
}

export default SearchBar
