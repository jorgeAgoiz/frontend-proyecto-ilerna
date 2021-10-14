import React from 'react'
import InputConfirm from '../InputConfirm/InputConfirm'
import CancelBtn from '../CancelBtn/CancelBtn'

const AddReviewForm = () => {
  return (
    <div>
      <h1>Añade tu reseña: </h1>
      <form>
        <div>
          <label>Reseña: </label>
          <textarea />
        </div>
        <div>
          <label>Valoración: </label>
          <select name='valoration' id='valoration' required>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div>
          <InputConfirm textValue='Guardar' nameClass='probando' />
          <CancelBtn text='Cancelar' nameClass='probando' onClickFunc={() => console.log('a tope')} />
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm

/*
    Tengo que estilar esto y darle funcionalidad
*/
