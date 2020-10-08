import React from 'react';
import './style.scss'

export default function Circle(props) {
  return (
    <div className="circle" style={{backgroundColor: props.color, left: props.x, top: props.y}}> 
      {props.children}
    </div>
  )
}