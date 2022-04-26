import React from 'react'

export default function RemoveButton({ value, handleClick }) {


  return (
    <button 
      className="remove-button"
      value={value}
      onClick={e => handleClick(e.target.value)} >
      -
  </button>
  )
}
