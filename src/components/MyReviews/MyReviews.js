import React from 'react'
import './MyReviews.css'

const MyReviews = ({ reviews }) => {
  return reviews.map(rev => {
    return (
      <div key={rev.id}>
        <h3>{rev.title}</h3>
        <p>Valoracion: {rev.valoration}</p>
      </div>
    )
  })
}

export default MyReviews
/* Aqui vamos a calcar el comportamiento de MyBooks */
