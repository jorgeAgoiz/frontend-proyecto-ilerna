import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { SelectedBookContext } from '../../context/SelectedBookContext'
import { deleteUser, getBooksOfUser, getReviewsOfUser } from '../../services/apiCalls'
import GenericBtn from '../GenericBtn/GenericBtn'
import MyBooks from '../MyBooks/MyBooks'
import MyReviews from '../MyReviews/MyReviews'
import './MyActivity.css'

const MyActivity = () => {
  const { userLog, setUserLog } = useContext(AuthContext)
  const { setBookInfo } = useContext(SelectedBookContext)
  const [myBooks, setMyBooks] = useState([])
  const [myReviews, setMyReviews] = useState([])
  const [error, setError] = useState(null)
  const history = useHistory()

  useEffect(() => {
    setBookInfo({ selected: false, book: {} })
    setError(null)

    getBooksOfUser(userLog.id)
      .then(result => setMyBooks(result.data))
      .catch(err => setError(err.message))

    getReviewsOfUser(userLog.id)
      .then(result => setMyReviews(result.data))
      .catch(err => setError(err.message))
  }, [userLog])

  const onHandleDeleteUser = async () => {
    const data = {
      id: userLog.id,
      username: userLog.username
    }
    const userDeleted = await deleteUser(data)
    if (!userDeleted.success) {
      return setError(userDeleted.message)
    }
    sessionStorage.clear()
    setUserLog({
      username: null,
      user_id: null,
      created_at: null,
      logged: false
    })
    return history.push('/')
  }

  return (
    <div className='myactivity-main'>
      <div className='myactivity-title'>
        <h1>Mi Actividad</h1>
        <p className='error-msg-p'>{error}</p>
      </div>

      <div className='books-main'>
        <h2>Mis Libros</h2>
        <div className='list-of-books'>
          {
            myBooks ? <MyBooks books={myBooks} /> : null
          }
        </div>
      </div>
      <div className='review-main'>
        <h2>Mis Reseñas</h2>
        <div className='list-of-reviews'>
          {
            myReviews ? <MyReviews reviews={myReviews} setError={setError} /> : null
          }
        </div>
      </div>
      <div className='delete-user'>
        <GenericBtn
          onClickFunc={onHandleDeleteUser}
          text='Eliminar usuario'
          nameClass='delete-user-btn'
        />
      </div>
    </div>
  )
}

export default MyActivity
