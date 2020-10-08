import React from 'react';
import './style.scss';

export default function SkewedRect({ compName, style, title, variant, textWidth, textDirection}) {
  return (

    <div id={ compName } className='SkewedRect' style={style}>
      <div className={'parallelogram '+ variant }>
        <p className={'skewedText ' + textDirection} style={{ width: textWidth }}>
          { title }
        </p>
      </div>
    </div>
  )
}
