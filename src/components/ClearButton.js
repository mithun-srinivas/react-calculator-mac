import React from 'react'
import './Button.css'

export default function ClearButton(props) {
  return (
    <div className='clear-button' onClick={() => props.func()}>
        
        <h3 className='clear-all'>Clear All</h3>
    </div>
  )
}
