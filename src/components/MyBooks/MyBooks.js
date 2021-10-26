import React, { useContext } from 'react'
import './MyBooks.css'
import { useHistory } from 'react-router-dom'
import { SelectedBookContext } from '../../context/SelectedBookContext'

const MyBooks = ({ books }) => {
  const { setBookInfo } = useContext(SelectedBookContext)
  const history = useHistory()

  const onHandleClick = async (aBook) => {
    setBookInfo({ selected: true, book: aBook })
    return history.push(`/book/${aBook.id}`)
  }

  return books.map(book => {
    const addDate = new Date(book.created_at).toLocaleDateString()

    return (
      <div id='a-book' key={book.id} onClick={() => onHandleClick(book)}>
        <h3>{book.title}</h3>
        <p>Añadido: {addDate}</p>
      </div>
    )
  })
}

export default MyBooks
