import React from 'react'
import './Input.css'

export default function Input(props) {
  return (
    <div className='input-wrapper'>
        <h2 className='input-result'>{props.result}</h2>
        <h3 className='input-text'>{props.text}</h3>
    </div>
  )
}
