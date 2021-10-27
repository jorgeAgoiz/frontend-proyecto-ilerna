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
  const history = useHistory()

  useEffect(() => {
    setBookInfo({ selected: false, book: {} })

    getBooksOfUser(userLog.id)
      .then(result => setMyBooks(result.data))
      .catch(err => console.log(err))/* Gestionar errores */

    getReviewsOfUser(userLog.id)
      .then(result => setMyReviews(result.data))
      .catch(err => console.log(err))/* Gestionar errores */
  }, [userLog])

  const onHandleDeleteUser = async () => {
    const data = {
      id: userLog.id,
      username: userLog.username
    }
    const userDeleted = await deleteUser(data)
    if (!userDeleted.success) {
      return console.log('Something went wrong.')/* Manejo de errores */
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
            myReviews ? <MyReviews reviews={myReviews} /> : null
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
