import React from 'react'
import './InputConfirm.css'

const InputConfirm = ({ textValue }) => {
  return (
    <>
      <input className='confirm-btn' type='submit' value={textValue} />
    </>
  )
}

export default InputConfirm
