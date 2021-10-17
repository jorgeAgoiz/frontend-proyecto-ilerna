import React from 'react'
import './AddBookForm.css'

const AddBookForm = () => {
  return (
    <div className='main-add-book'>
      <h1>Añade un nuevo libro a la comunidad</h1>
      <form className='add-book-form'>
        <div id='title-div'>
          <label htmlFor='title'>Titulo: </label>
          <input type='text' name='title' id='title' />
        </div>
        <div id='author-div'>
          <label htmlFor='author'>Autor: </label>
          <input type='text' name='author' id='author' />
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
          <label htmlFor='valoration'>Valoración: </label>
          <select name='valoration' id='valoration' required>
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
          <input type='submit' value='Enviar' />
        </div>
        <div id='button-cancel-div'>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm

/* Estilar el formulario de añadir libro y darle funcionalidades,
siguientes pasos. */
