// Dependencia
import React from 'react'
// Estilo
import './CancelBtn.css'

const CancelBtn = ({ nameClass, text, onClickFunc }) => {
  return (
    <>
      <button className={nameClass} onClick={onClickFunc}>{text}</button>
    </>
  )
}

export default CancelBtn
