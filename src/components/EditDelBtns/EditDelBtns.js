import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { calculateAverage } from '../../utils/calculateAverage'
import { deleteReview, updateBook } from '../../services/apiCalls'
import './EditDelBtns.css'

const EditDelBtns = ({ nameClass, idBook, idReview, setReviews, reviews, setError }) => {
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
        <img src='../editing.png' alt='edit-icon' width='25px' height='25px' />
      </Link>
      <button onClick={onHandleDelete}>
        <img src='../bin.png' alt='delete-icon' width='25px' height='25px' />
      </button>
    </div>
  )
}

export default EditDelBtns
