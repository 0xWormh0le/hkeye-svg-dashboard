import React from 'react';
import './style.scss';

export default function SkewedRect({ compName, posX, posY, title, variant, textWidth, textDirection}) {
  return (

    <div id={ compName } className='SkewedRect' style={{ left: posX, top: posY }}>
      <div className={'parallelogram '+ variant }>
        <p className={'skewedText ' + textDirection} style={{ width: textWidth }}>
          { title }
        </p>
      </div>
    </div>
  )
}
