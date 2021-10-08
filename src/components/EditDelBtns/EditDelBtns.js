import React from 'react'
import './EditDelBtns.css'
import { Link } from 'react-router-dom'

const EditDelBtns = ({ nameClass, idBook }) => {
  return (
    <div id='review-btns'>
      <Link to={`/book/edit-review/${idBook}`}>
        <img src='../editing.png' alt='edit-icon' width='25px' height='25px' />
      </Link>
      <Link to={`/book/delete-review/${idBook}`}>
        <img src='../bin.png' alt='delete-icon' width='25px' height='25px' />
      </Link>
    </div>
  )
}

export default EditDelBtns
/* Aqui habra que darle la funcionalidad de Editar y eliminar la review */
