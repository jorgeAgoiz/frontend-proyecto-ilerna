import { useEffect, useState } from 'react'
import { getSpecificReview } from '../services/apiCalls'

const useReviewData = (reviewId) => {
  const [rev, setRev] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!rev) {
      getSpecificReview(reviewId)
        .then(response => {
          setError(null)
          return setRev(response.data)
        })
        .catch(err => setError(err.message))
    }
  }, [reviewId, rev])

  return { rev, setRev, error, setError }
}

export default useReviewData
