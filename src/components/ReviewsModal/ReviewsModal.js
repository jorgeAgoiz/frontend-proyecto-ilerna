import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext } from '../../context/AuthContext'
import { getAllReviews } from '../../services/apiCalls'
import EditDelBtns from '../EditDelBtns/EditDelBtns'
import './ReviewsModal.css'

const ReviewsModal = ({ onClose, bookInfo }) => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)
  const { userLog } = useContext(AuthContext)

  useEffect(() => {
    getAllReviews(bookInfo.id)
      .then(result => {
        setReviews(result.data)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        return console.log(err)
      })
  }, [bookInfo])

  const showReviews = () => {
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
            userLog.id === rev.id_user
              ? (
                <EditDelBtns
                  nameClass='review-btn'
                  idBook={rev.id_book}
                  idReview={rev.id}
                  reviews={reviews}
                  setReviews={setReviews}
                  setError={setError}
                />
                )
              : null
          }
        </div>
      )
    })
  }

  return ReactDOM.createPortal(
    <div className='reviews-main'>
      <div id='reviews-close'>
        <img onClick={onClose} src='../cancel.png' alt='exit-icon' width='30px' height='30px' />
      </div>
      <h1>Reseñas</h1>
      {
        !error
          ? null
          : (
            <div>
              <h2>{error}</h2>
            </div>
            )
      }
      {
        reviews
          ? showReviews()
          : null
      }
    </div>, document.getElementById('modal')
  )
}

export default ReviewsModal
