import React from 'react'
import InputConfirm from '../InputConfirm/InputConfirm'
import './SearchBar.css'

const SearchBar = () => {
  const onHandleForm = (evt) => {
    evt.preventDefault()
    console.log(`Buscando su libro... ${evt.target.title.value}`)
    /* Aqui llamada a la API para buscar un libro especificado, si lo encuentra
    le devolvemos la ficha y si no lo encuentra le devolvemos un mensaje de que no
    existe el libro solicitado en la comunidad */
  }

  return (
    <>
      <form className='form-div' onSubmit={onHandleForm}>
        <label>Buscar por titulo: </label>
        <input type='text' placeholder='Título...' name='title' id='input-title' />
        <InputConfirm nameClass='confirm-search-btn' textValue='Buscar' />
      </form>
    </>

  )
}

export default SearchBar

// GET => "/books?page&order&direction"
