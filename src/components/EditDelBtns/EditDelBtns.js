import React from 'react'
import { deleteReview } from '../../services/apiCalls'
import './EditDelBtns.css'

const EditDelBtns = ({ nameClass, idBook, idReview, setReviews, reviews, setError }) => {
  const onHandleDelete = async () => {
    const result = await deleteReview(idReview)
    if (!result.success) {
      return setError(result.message)
    }
    setError(null)
    const newArray = reviews.filter(rev => rev.id !== idReview)
    return setReviews(newArray)
  }

  const onHandleEdit = () => {
    console.log('Editando la review: ' + idReview)
  }

  return (
    <div id='review-btns'>
      <button onClick={onHandleEdit}>
        <img src='../editing.png' alt='edit-icon' width='25px' height='25px' />
      </button>
      <button onClick={onHandleDelete}>
        <img src='../bin.png' alt='delete-icon' width='25px' height='25px' />
      </button>
    </div>
  )
}

export default EditDelBtns
