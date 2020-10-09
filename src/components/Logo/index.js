import React from 'react';
import SkewedRect from "components/SkewedRect";
import './style.scss';

export default () => (
  <>
    <div className="logo">
      <div className="logoShape">
        <div className="logoShape1">  
          <SkewedRect
            id="logoShape1"
            style={{ margin: '0', marginRight: '1px' }}
            title=""
            variant='logoShape1'
          />
        </div>
        <div className="logoShape2">
          <SkewedRect
            id="logoShape2"
            style={{ marginLeft: '1px', marginRight: '0' }}
            title=""
            variant='logoShape2'
          />
        </div>
      </div>
      <div className="logoTitle">
        <SkewedRect
          id="logoTitle"
          title="HAWKEYE"
          variant='largeText'
        />
      </div>
    </div>
  </>
)