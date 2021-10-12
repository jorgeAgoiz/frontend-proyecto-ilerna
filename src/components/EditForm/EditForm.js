import React from 'react'
import { useParams } from 'react-router-dom'
import './EditForm.css'

const EditForm = () => {
  const params = useParams()
  console.log(params.reviewId)

  const onHandleSubmit = (evt) => {
    evt.preventDefault()
    console.log(evt.target.valoration.value)
    console.log(evt.target.text_review.value)
  }

  return (
    <div className='edit-review'>
      <h1>Editar Reseña</h1>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor='text-review'>Reseña: </label>
        <textarea id='text_review' name='text_review' maxLength='1200' />
        <label>Valoración: </label>
        <select name='valoration' id='valoration'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <input type='submit' />
      </form>
    </div>
  )
}

export default EditForm
