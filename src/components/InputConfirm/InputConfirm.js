import React from 'react'
import './InputConfirm.css'

const InputConfirm = ({ textValue, nameClass }) => {
  return (
    <>
      <input className={nameClass} type='submit' value={textValue} />
    </>
  )
}

export default InputConfirm
