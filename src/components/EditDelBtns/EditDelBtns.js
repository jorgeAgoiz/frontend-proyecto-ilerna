import React from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <div id='review-btns'>
      <Link to={`/edit-review/${idReview}`}>
        <img src='../editing.png' alt='edit-icon' width='25px' height='25px' />
      </Link>
      <button onClick={onHandleDelete}>
        <img src='../bin.png' alt='delete-icon' width='25px' height='25px' />
      </button>
    </div>
  )
}

export default EditDelBtns
