import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { getAllReviews } from '../../services/apiCalls'
import './ReviewsModal.css'

const ReviewsModal = ({ onClose, bookInfo }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getAllReviews(bookInfo.id)
      .then(result => setReviews(result.data))
  }, [])

  console.log(reviews)
  const showReviews = () => {
    return reviews.map(rev => {
      return (
        <div className='review-ind' key={rev.id}>
          <h2>{rev.text_review}</h2>
        </div>
      )
    })
  }

  return ReactDOM.createPortal(
    <div className='reviews-main' onClick={onClose}>
      <h1>Reseñas</h1>
      {
          showReviews()
      }
    </div>, document.getElementById('modal')
  )
}

export default ReviewsModal

/* Aquí hay mucho que estilar, comenzando por las reseñas con sus
respectivas opciones. Donde poder aportar tu reseña también. y ademas actualizar
el rating cada vez que se añada una reseña nueva. */
