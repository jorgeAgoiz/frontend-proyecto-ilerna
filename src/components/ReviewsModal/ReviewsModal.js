import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext } from '../../context/AuthContext'
import { getAllReviews } from '../../services/apiCalls'
import EditDelBtns from '../EditDelBtns/EditDelBtns'
import './ReviewsModal.css'

const ReviewsModal = ({ onClose, bookInfo }) => {
  const [reviews, setReviews] = useState([])
  const { userLog } = useContext(AuthContext)

  useEffect(() => {
    getAllReviews(bookInfo.id)
      .then(result => setReviews(result.data))
  }, [bookInfo])

  const showReviews = () => {
    console.log(userLog)
    console.log(reviews)

    return reviews.map(rev => {
      return (
        <div className='review-ind' key={rev.id}>
          <h2>{rev.text_review}</h2>
          <div id='review-user-data'>
            <p>{rev.username.toUpperCase()}</p>
            <div id='review-value'>
              <p>{rev.valoration}</p>
              <img src='../star.png' alt='star-icon' width='12px' height='12px' />
            </div>
          </div>
          {
            userLog.id === rev.id_user ? <EditDelBtns nameClass='review-btn' /> : null
          }
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
