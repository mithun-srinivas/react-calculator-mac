import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <div className='Button' style={{backgroundColor: `${props.color}`}}
    onClick={() => props.func(props.symbol)}
    >
      <h3>{props.symbol}</h3>
    </div>
  )
}
