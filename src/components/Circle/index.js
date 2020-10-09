import React from 'react';
import './style.scss'

export default function Circle(props) {
  return (
    <div className="circle" onClick = {props.onClick} style={{backgroundColor: props.color, left: props.x, top: props.y}}> 
      {props.children}
    </div>
  )
}