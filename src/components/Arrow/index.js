import React from 'react';
import './style.scss'
export default function Arrow(props) {
  var triangle;
  var line;
  if(props.direct == 'up')
  {
    triangle = "M" + props.x + " " + props.y + " L" + (props.x - 4) + " " + (props.y + 5) + " L" + (props.x + 4) + " " + (props.y + 5) +" Z";
    line = "M" + props.x + " " + (props.y + 5) + " L" + props.x + ' ' + (props.length + props.y + 5);
  }
  if(props.direct == 'down')
  {
    triangle = "M" + props.x + " " + (props.y + props.length + 5) + " L" + (props.x - 4) + " " + (props.y + props.length) + " L" + (props.x + 4) + " " + (props.y + props.length) +" Z";
    line = "M" + props.x + " " + props.y + " L" + props.x + ' ' + (props.length + props.y);
  }
  if(props.direct == 'left')
  {
    triangle = "M" + props.x + " " + props.y + " L" + (props.x + 5) + " " + (props.y - 4) + " L" + (props.x + 5) + " " + (props.y + 4) +" Z";
    line = "M" + (props.x + 5) + " " + props.y + " L" + (props.x + 5 + props.length) + ' ' + props.y;
  }
  if(props.direct == 'right')
  {
    triangle = "M" + (props.x + props.length + 5) + " " + props.y + " L" + (props.x + props.length) + " " + (props.y - 4) + " L" + (props.x + props.length) + " " + (props.y + 4) +" Z";
    line = "M" + props.x + " " + props.y + " L" + (props.x + props.length) + ' ' + (props.y);
  }
  return (
    <g>
      <path d={triangle} style={{fill:'#fefffe',stroke:'#fefffe', strokeWidth:'2'}} />
      <path d={line} style={{fill:'#fefffe',stroke:'#fefffe', strokeWidth:'2'}} />
    </g>
  )
}