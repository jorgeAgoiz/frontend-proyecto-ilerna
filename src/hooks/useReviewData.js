import { useEffect, useState } from 'react'
import { getSpecificReview } from '../services/apiCalls'

const useReviewData = (reviewId) => {
  const [rev, setRev] = useState(null)

  useEffect(() => {
    if (!rev) {
      getSpecificReview(reviewId).then(response => setRev(response.data))
    }
  }, [reviewId])

  return { rev, setRev }
}

export default useReviewData
