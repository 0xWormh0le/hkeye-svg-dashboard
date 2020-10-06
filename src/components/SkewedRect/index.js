import React from 'react';
import './style.scss';

export default function SkewedRect({ compName, posX, posY, shapeColor, title, variant, textWidth}) {
  return (

    <div id={ compName } className='SkewedRect' style={{ left: posX, top: posY }}>
      <div className={'parallelogram '+ variant } style={{ backgroundColor: shapeColor  }}>
        <p className='skewedText' style={{ width: textWidth }}>
          { title }
        </p>
      </div>
    </div>
  )
}
