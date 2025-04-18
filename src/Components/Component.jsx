import React, { Component } from 'react'

function Button({ variant, rounded, label, icon, size = "normal", onClick, outlined = false }) {
  return (
    <button
      className={`
          Button 
          Button__${variant} 
          Button__${rounded ? "rounded" : ""} 
          Button__${outlined ? "outlined" : ""} 
          Button__${size}`
      }
      onClick={onClick || null}
    >
      {label}
      <span className='Button__icon'>
        {
          icon ? <FontAwesomeIcon icon={icon} /> : null
        }
      </span>
    </button>
  )
}


export default Component
