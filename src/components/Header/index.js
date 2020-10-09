import React from 'react'
import SkewedRect from "components/SkewedRect";
import './style.scss';

export default () => (
  <>
    <div className="headerBody">
      <div className="headerContent">
        <SkewedRect
          id="largeSkew1"
          title="1.Use transaction /hawkeye/APOD to review the code."
          variant='largeSkew'
          textWidth={310}
        />
        <SkewedRect
          id="largeSkew2"
          title="2.If there are any errors or warnings follow one of the following processes:"
          variant='largeSkew'
          textWidth={350}
        />
        <div className="selectContent">
          <SkewedRect
            id="medium2A"
            title="a:change the code so it's compliant"
            variant='mediumSkew'
            textWidth={235}
          />
          <SkewedRect
            id="medium2B"
            style={{ position: 'absolute',
                    left: '0px',
                    bottom: '0px',
                    marginLeft: '0'
            }}
            title="b:request an exemption"
            variant='mediumSkew'
            textWidth={160}
          />
        </div>       
      </div>
      <div className="headerContent headerRight">
        <SkewedRect
          id="largeSkew3"
          title="3.When the code is 100% compliant generate the following documents:"
          variant='largeSkew'
          textWidth={330}
        />
        <div className="selectContent">
          <SkewedRect
            id="medium3A"
            title="a:Compliance Report"
            variant='mediumSkew'
            textWidth={140}
          />
          <SkewedRect
            id="medium3B"
            style={{ position: 'absolute',
                    left: '0px',
                    bottom: '0px',
                    marginLeft: '0'
            }}
            title="b:Object profile"
            variant='mediumSkew'
            textWidth={105}
          />
        </div>
      </div>
    </div>
  </>
)