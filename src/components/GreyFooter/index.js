import React from 'react'
import SkewedRect from 'components/SkewedRect'
import './style.scss'

export default () => {
  const handleItemClick = () => alert("Event")
  return (
    <div className="bodyFooterSide">
      <SkewedRect
        id="largeSkew4"
        title="4.Update the technical specification document with the object profile results."
        variant='largeSkew'
        textWidth={370}
        onClick={handleItemClick}
      />

      <SkewedRect
        id="largeSkew5"
        title="5.Upload the Compliance Report into Solution Manager Project Documentation."
        variant='largeSkew'
        textWidth={390}
        onClick={handleItemClick}
      />
    </div>
  )
}
