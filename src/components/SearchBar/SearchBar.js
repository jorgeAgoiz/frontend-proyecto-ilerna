import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { getBookByTitle } from '../../services/apiCalls'
import InputConfirm from '../InputConfirm/InputConfirm'
import './SearchBar.css'

const SearchBar = () => {
  const { setBookInfo } = useContext(SelectedBookContext)
  const [notFound, setNotFound] = useState(false)
  const history = useHistory()

  const onHandleForm = async (evt) => {
    evt.preventDefault()
    const book = await getBookByTitle(evt.target.title.value)
    if (!book.success) {
      return setNotFound(true)
    }
    setBookInfo({ selected: true, book: book.data })
    return history.push(`/book/${book.data.id}`)
  }

  const messageNotFound = () => {
    setTimeout(() => {
      setNotFound(false)
    }, 2000)

    return (
      <div className='form-div'>
        <h1 className='error-msg'>Libro no encontrado</h1>
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
