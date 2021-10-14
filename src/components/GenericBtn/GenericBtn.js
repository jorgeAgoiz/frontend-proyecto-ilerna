import React from 'react'

const GenericBtn = ({ onClickFunc, text }) => {
  return (
    <div>
      <button onClick={onClickFunc}>{text}</button>
    </div>
  )
}

export default GenericBtn
