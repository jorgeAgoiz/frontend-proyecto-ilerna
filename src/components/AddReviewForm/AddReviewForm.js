import React, { useContext, useEffect, useState } from 'react'
import './AddReviewForm.css'
import InputConfirm from '../InputConfirm/InputConfirm'
import CancelBtn from '../CancelBtn/CancelBtn'
import { AuthContext } from '../../context/AuthContext'
import { addReview, getAllReviews, updateBook } from '../../services/apiCalls'
import { calculateAverage } from '../../utils/calculateAverage'

const AddReviewForm = ({ onClickCancel, bookInfo, onClose }) => {
  const { userLog } = useContext(AuthContext)
  const [error, setError] = useState(null)

  /* Esto puede ser un custom hook */
  const [valReviews, setValReviews] = useState([])

  useEffect(() => {
    getAllReviews(bookInfo.id)
      .then(response => setValReviews(response.data.map(book => book.valoration)))
      .catch(err => err)
  }, [bookInfo])
  /* Esto puede ser un custom hook */

  const onHandleSubmit = async (evt) => {
    evt.preventDefault()
    const idBook = bookInfo.id
    const idUser = userLog.id
    const textReview = evt.target.text_review.value
    const rating = evt.target.valoration.value
    const valorations = [...valReviews, parseInt(rating)]

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
    const ratingUpdated = await updateBook({ rating: newRating, id: idBook })
    if (!ratingUpdated.success) {
      return setError(ratingUpdated.message)
    }
    return onClose()
  }

  return (
    <div className='add-review-form'>
      <h1>Añade tu reseña: </h1>
      {error ? (<p>{error}</p>) : null}{/* Estilar error */}
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

/* Estilar errores  */
