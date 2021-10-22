import { useEffect, useState } from 'react'
import { getAllReviews } from '../services/apiCalls'

const useValorations = (bookInfo) => {
  const [valReviews, setValReviews] = useState([])

  useEffect(() => {
    getAllReviews(bookInfo.book.id)
      .then(response => {
        setValReviews(response.data.map(book => book.valoration))
      })
      .catch(err => err)
  }, [bookInfo])
  return { valReviews }
}

export default useValorations
