import React from 'react'
import SkewedRect from "components/SkewedRect";
import './style.scss';

export default () => {
  const handleItemClick = () => alert("Event")
return (
    <div className="headerBody">
      <div className="headerContent">
        <SkewedRect
          id="largeSkew1"
          title="1.Use transaction /hawkeye/APOD to review the code."
          variant='largeSkew'
          textWidth={310}
          onClick={handleItemClick}
        />
        <SkewedRect
          id="largeSkew2"
          style={{ marginRight: '0' }}
          title="2.If there are any errors or warnings follow one of the following processes:"
          variant='largeSkew'
          textWidth={350}
          onClick={handleItemClick}
        />
        <div className="selectContent">
          <SkewedRect
            id="medium2A"
            style={{ marginLeft: '25px' }}
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
          style={{ marginRight: '0' }}
          variant='largeSkew'
          textWidth={330}
          onClick={handleItemClick}
        />
        <div className="selectContent">
          <SkewedRect
            id="medium3A"
            title="a:Compliance Report"
            style={{ marginLeft: '25px' }}
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
  )
}
