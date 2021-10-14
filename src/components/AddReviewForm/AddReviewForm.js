import React from 'react'
import './AddReviewForm.css'
import InputConfirm from '../InputConfirm/InputConfirm'
import CancelBtn from '../CancelBtn/CancelBtn'

const AddReviewForm = () => {
  return (
    <div className='add-review-form'>
      <h1>Añade tu reseña: </h1>
      <form id='form-add'>
        <div id='review-textarea'>
          <label>Detalles de tu experiencia: </label>
          <textarea
            id='text_review'
            name='text_review'
            maxLength='1200'
          />
        </div>
        <div id='review-valoration'>
          <label>Valoración: </label>
          <select name='valoration' id='select-valoration' required>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div id='add-review-btn'>
          <InputConfirm textValue='Guardar' nameClass='confirm-search-btn' />
          <CancelBtn text='Cancelar' nameClass='cancel-generic-btn' onClickFunc={() => console.log('a tope')} />
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm

/*
    Tengo que estilar esto y darle funcionalidad
*/
