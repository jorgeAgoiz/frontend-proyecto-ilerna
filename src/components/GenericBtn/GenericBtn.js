import React from 'react'
import './GenericBtn.css'

const GenericBtn = ({ onClickFunc, text, nameClass }) => {
  return (
    <div>
      <button onClick={onClickFunc} className={nameClass}>{text}</button>
    </div>
  )
}

export default GenericBtn
