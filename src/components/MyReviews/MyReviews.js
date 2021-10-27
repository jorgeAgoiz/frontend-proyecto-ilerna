import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { getSpecificBook } from '../../services/apiCalls'
import './MyReviews.css'

const MyReviews = ({ reviews }) => {
  const { setBookInfo } = useContext(SelectedBookContext)
  const history = useHistory()

  const onHandleClick = async (rev) => {
    const theBook = await getSpecificBook(rev.id_book)
    if (!theBook.success) {
      return console.log('something went wrong')/* Manejar este error */
    }
    setBookInfo({ selected: true, book: theBook.data })
    return history.push(`/book/${rev.id_book}`)
  }

  return reviews.map(rev => {
    return (
      <div id='a-review' key={rev.id} onClick={() => onHandleClick(rev)}>
        <h3>{rev.title}</h3>
        <p>Valoracion: {rev.valoration}</p>
      </div>
    )
  })
}

export default MyReviews
