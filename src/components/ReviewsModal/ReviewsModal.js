import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext } from '../../context/AuthContext'
import { getAllReviews } from '../../services/apiCalls'
import EditDelBtns from '../EditDelBtns/EditDelBtns'
import './ReviewsModal.css'
import GenericBtn from '../GenericBtn/GenericBtn'
import AddReviewForm from '../AddReviewForm/AddReviewForm'

const ReviewsModal = ({ onClose, bookInfo }) => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)
  const [viewForm, setViewForm] = useState(false)
  const { userLog } = useContext(AuthContext)

  /* Custom Hook tal vez */
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
  }, [bookInfo, error])
  /* Custom Hook tal vez */

  const onHandleFormView = () => {
    return setViewForm(true)
  }

  const onClickCancel = () => {
    return setViewForm(false)
  }

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

      {
        !viewForm
          ? (
            <>
              <h1>Reseñas</h1>
              <GenericBtn onClickFunc={onHandleFormView} text='Añadir Reseña' nameClass='add-review-btn' />
            </>
            )
          : null
      }
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
          ? (!viewForm ? showReviews() : <AddReviewForm onClickCancel={onClickCancel} onClose={onClose} bookInfo={bookInfo} />)
          : (!viewForm ? null : <AddReviewForm onClickCancel={onClickCancel} onClose={onClose} bookInfo={bookInfo} />)
      }
    </div>, document.getElementById('modal')
  )
}

export default ReviewsModal
