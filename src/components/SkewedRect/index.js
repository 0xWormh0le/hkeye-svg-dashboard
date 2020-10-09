import React from 'react';
import './style.scss';

const SkewRect = ({ id, style, title, variant, textWidth, textDirection, sign, children, onClick}) => (
  <div id={ id } className='SkewedRect' style={style} onClick={onClick}>
    <div className={'parallelogram '+ variant }>
      <p className={'skewedText ' + textDirection} style={{ width: textWidth }}>
        {sign && <span className='SkewedRect__sign'>{sign}</span>}
        { children || title }
      </p>
    </div>
  </div>
)
export default  SkewRect