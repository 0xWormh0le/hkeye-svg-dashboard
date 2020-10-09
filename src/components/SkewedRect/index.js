import React from 'react';
import './style.scss';

const SkewRect = ({ id, style, title, variant, textWidth, textDirection, sign}) => (
  <div id={ id } className='SkewedRect' style={style}>
    <div className={'parallelogram '+ variant }>
      <p className={'skewedText ' + textDirection} style={{ width: textWidth }}>
        {sign && <span className='SkewedRect__sign'>{sign}</span>}
        { title }
      </p>
    </div>
  </div>
)
export default  SkewRect