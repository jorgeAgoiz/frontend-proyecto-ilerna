import { useEffect, useState, useContext } from 'react'
import { getAllReviews } from '../services/apiCalls'
import { SelectedBookContext } from '../context/SelectedBookContext'

const useValorations = () => {
  const [valReviews, setValReviews] = useState([])
  const { bookInfo, setBookInfo } = useContext(SelectedBookContext)

  useEffect(() => {
    getAllReviews(bookInfo.book.id)
      .then(response => {
        setValReviews(response.data.map(book => book.valoration))
      })
      .catch(err => err)
  }, [bookInfo])
  return { valReviews, bookInfo, setBookInfo }
}

export default useValorations
