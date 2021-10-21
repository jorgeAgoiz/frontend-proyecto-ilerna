import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useReviewData from '../../hooks/useReviewData'
import { updateReview } from '../../services/apiCalls'
import CancelBtn from '../CancelBtn/CancelBtn'
import InputConfirm from '../InputConfirm/InputConfirm'
import './EditReviewForm.css'

const EditReviewForm = () => {
  const { reviewId } = useParams()
  const { rev } = useReviewData(reviewId)
  const [error, setError] = useState(null)
  const history = useHistory()

  const onHandleSubmit = async (evt) => {
    evt.preventDefault()
    const valoration = evt.target.valoration.value
    const textReview = evt.target.text_review.value
    const id = rev.id
    const idUser = rev.id_user

    try {
      const response = await updateReview(id, valoration, textReview, idUser)
      if (!response.success) {
        return setError(response.message)
      }
      setError(null)
      return history.push(`/book/${rev.id_book}`)
    } catch (error) {
      return setError(error.message)
    }
  }

  const onHandleCancel = (evt) => {
    evt.preventDefault()
    return history.goBack()
  }

  const showSelectMenu = (rev) => {
    return (
      <>
        <select name='valoration' id='valoration' defaultValue={rev.valoration} required>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </>
    )
  }

  return (
    <div className='edit-review'>
      <h1>Editar Reseña</h1>
      {error ? <p className='error-msg-p'>{error}</p> : null}{/* Estilar este error */}
      <form onSubmit={onHandleSubmit}>
        <label htmlFor='text-review'>Reseña: </label>
        <textarea
          id='text_review'
          name='text_review'
          maxLength='1200'
          defaultValue={rev ? rev.text_review : null}
        />
        <label>Valoración: </label>
        {
          rev ? showSelectMenu(rev) : null
        }
        <div id='btns-group'>
          <InputConfirm nameClass='confirm-search-btn' textValue='Guardar' />
          <CancelBtn nameClass='cancel-generic-btn' text='Cancelar' onClickFunc={onHandleCancel} />
        </div>
      </form>
    </div>
  )
}

export default EditReviewForm
