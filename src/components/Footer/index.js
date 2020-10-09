import React from 'react'
import SkewedRect from 'components/SkewedRect'
import './style.scss'

export default () => (
  <>
  <div className="footerSide">
    <SkewedRect
      id="oppoSkewedRect"
      title="Use of DEVELOPER WORKBENCH is recommended throughout the development process to avoid significant rework at code completion."
      variant='oppoSkewedRect'
      textWidth={460}
      textDirection='oppoText'
      sign='♢'
    />

    <SkewedRect
      id="oppoSkewedRect"
      title="Q-Gate will prevent any non-complaint code being released from the development environment"
      variant='oppoSkewedRect'
      textWidth={340}
      textDirection='oppoText'
      sign='*'
    />
  </div>
  </>
)