/* AQUI ME HE QUEDADO */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { calculateAverage } from '../../utils/calculateAverage'
import { deleteReview, updateBook } from '../../services/apiCalls'
import './EditDelBtns.css'

const EditDelBtns = ({ idReview, setReviews, reviews, setError }) => {
  const { bookInfo, setBookInfo } = useContext(SelectedBookContext)

  const onHandleDelete = async () => {
    const result = await deleteReview(idReview)
    if (!result.success) {
      return setError(result.message)
    }
    const newArray = reviews.filter(rev => rev.id !== idReview)
    setReviews(newArray)

    const revsVals = [...newArray.map(rev => rev.valoration), bookInfo.book.rating]
    const newAverage = calculateAverage(revsVals)
    const averageUpdated = await updateBook({ average: newAverage, id: bookInfo.book.id })

    if (!averageUpdated.success) {
      return setError(averageUpdated.message)
    }
    setError(null)

    const newBookInfo = {
      selected: true,
      ...bookInfo
    }
    newBookInfo.book.average = newAverage
    return setBookInfo(newBookInfo)
  }

  return (
    <div id='review-btns'>
      <Link to={`/edit-review/${idReview}`}>
        <img id='review-btn-edit' src='../editing.png' alt='edit-icon' />
      </Link>
      <button onClick={onHandleDelete}>
        <img id='review-btn-delete' src='../bin.png' alt='delete-icon' />
      </button>
    </div>
  )
}

export default EditDelBtns
