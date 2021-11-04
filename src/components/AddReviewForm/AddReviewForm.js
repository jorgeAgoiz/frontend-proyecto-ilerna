// Dependencias
import React, { useContext, useState } from 'react'
// Contexto
import { AuthContext } from '../../context/AuthContext'
// Estilos
import './AddReviewForm.css'
// Componentes
import InputConfirm from '../InputConfirm/InputConfirm'
import CancelBtn from '../CancelBtn/CancelBtn'
// Funciones helpers y de llamada a la API
import { addReview, updateBook } from '../../services/apiCalls'
import { calculateAverage } from '../../utils/calculateAverage'
// Custom hooks
import useValorations from '../../hooks/useValorations'

const AddReviewForm = ({ onClickCancel, onClose }) => {
  const { userLog } = useContext(AuthContext)
  const [error, setError] = useState(null)
  const { valReviews, bookInfo, setBookInfo } = useValorations()

  const onHandleSubmit = async (evt) => {
    evt.preventDefault()
    const idBook = bookInfo.book.id
    const idUser = userLog.id
    const textReview = evt.target.text_review.value
    const rating = evt.target.valoration.value
    const valorations = [...valReviews, parseInt(rating), bookInfo.book.rating]

    const newRating = calculateAverage(valorations)
    const data = {
      valoration: rating,
      text_review: textReview,
      id_user: idUser,
      id_book: idBook
    }

    const newReview = await addReview(data)
    if (!newReview.success) {
      return setError(newReview.message)
    }
    setError(null)
    const ratingUpdated = await updateBook({ average: newRating, id: idBook })
    if (!ratingUpdated.success) {
      return setError(ratingUpdated.message)
    }
    const bookUpd = {
      ...bookInfo.book,
      average: newRating
    }
    setBookInfo({ selected: true, book: bookUpd })
    return onClose()
  }

  return (
    <div className='add-review-form'>
      <h1>Añade tu reseña: </h1>
      {error ? (<p className='error-msg-p'>{error}</p>) : null}
      <form id='form-add' onSubmit={onHandleSubmit}>
        <div id='review-textarea'>
          <label>Detalles de tu experiencia: </label>
          <textarea
            id='text_review'
            name='text_review'
            maxLength='1200'
            required
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
          <CancelBtn text='Cancelar' nameClass='cancel-generic-btn' onClickFunc={onClickCancel} />
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm
