import React from 'react';
import './style.scss'

export default function Diamond(props) {

  return (
    <div className="diamond-shape" style={{backgroundColor: props.color, left: props.x, top: props.y}}>
        <div className="item-count">
          {props.children}
        </div>
    </div>
  )
}

