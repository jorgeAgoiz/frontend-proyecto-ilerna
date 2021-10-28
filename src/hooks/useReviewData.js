import { useContext, useEffect, useState } from 'react'
import { SelectedBookContext } from '../context/SelectedBookContext'
import { getSpecificBook, getSpecificReview } from '../services/apiCalls'

const useReviewData = (reviewId) => {
  const [rev, setRev] = useState(null)
  const [error, setError] = useState(null)
  const { bookInfo, setBookInfo } = useContext(SelectedBookContext)

  useEffect(() => {
    if (!rev) {
      getSpecificReview(reviewId)
        .then(response => {
          setError(null)
          return setRev(response.data)
        })
        .catch(err => setError(err.message))
    }

    if (rev && !bookInfo.selected) {
      getSpecificBook(rev.id_book)
        .then(response => {
          setError(null)
          return setBookInfo({ selected: true, book: response.data })
        })
        .catch(err => setError(err.message))
    }
  }, [reviewId, rev, bookInfo])

  return { rev, setRev, error, setError, bookInfo, setBookInfo }
}

export default useReviewData
