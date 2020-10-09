import React from 'react';
import './style.scss'

export default function Rectangle(props) {

  if(props.solid)
  {
    return (
      <div className = "rectangle" onClick = {props.onClick} style={{backgroundColor: props.color, left: props.x, top: props.y} }> 
        <div className = 'whiteBorder'>
        {props.children}
      </div>
    </div>
    )
  }
  return (
    <div className = "rectangle" onClick = {props.onClick} style={{backgroundColor: props.color, left: props.x, top: props.y}}> 
      {props.children}
    </div>
  )
}