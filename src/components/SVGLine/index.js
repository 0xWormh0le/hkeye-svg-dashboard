import Arrow from 'components/Arrow'
import React from 'react'
import './style.scss'
export default () => (
  <svg className="svg" width="100%" height="100%" viewBox="0 0 1000 1000" >
      <polyline points="45,112 45,170 105,170 105,330" style={{fill:'none',stroke:'#3382c5', strokeWidth:'2', strokeOpacity: '0.7'}} strokeDasharray="10,10"/>
      <polyline points="400,70 500,70" style={{fill:'none',stroke:'#3382c5', strokeWidth:'2', strokeOpacity: '0.7'}} strokeDasharray="10,10"/>
      <polyline points="700,100 700,130" style={{fill:'none',stroke:'#3382c5', strokeWidth:'2', strokeOpacity: '0.7'}} strokeDasharray="10,10"/>
      <polyline points="552,203 185,203 185,490 205,490" style={{fill:'none',stroke:'#3382c5', strokeWidth:'2', strokeOpacity: '0.7'}} strokeDasharray="10,10"/>
      <polyline points="385,535 385,620 300,620 300,790 740,790 740,830" style={{fill:'none',stroke:'#3382c5', strokeWidth:'2', strokeOpacity: '0.7'}} strokeDasharray="10,10"/>
      <polyline points="230,865 310,865" style={{fill:'none',stroke:'#3382c5', strokeWidth:'2', strokeOpacity: '0.7'}} strokeDasharray="10,10"/>

      <polyline points="120,250 655,250" style={{fill:'none',stroke:'#fefffe', strokeWidth:'2', strokeOpacity: '0.7'}} />
      <polyline points="445,320 445,395" style={{fill:'none',stroke:'#fefffe', strokeWidth:'2', strokeOpacity: '0.7'}} />
      <polyline points="465,320 465,395" style={{fill:'none',stroke:'#fefffe', strokeWidth:'2', strokeOpacity: '0.7'}} />
      
      

      <Arrow x={0} y={290} length={27} direct="down" />
      <Arrow x={40} y={365} length={15} direct="right" />
      <Arrow x={179} y={365} length={13} direct="right" />
      <Arrow x={304} y={365} length={25} direct="right" />
      <Arrow x={590} y={365} length={15} direct="right" />
      <Arrow x={250} y={418} length={20} direct="down" />
      <Arrow x={320} y={490} length={22} direct="right" />
      <Arrow x={468} y={490} length={22} direct="right" />
      <Arrow x={530} y={535} length={40} direct="down" />
      <Arrow x={528} y={647} length={17} direct="down" />
      <Arrow x={445} y={721} length={20} direct="left" />
      <Arrow x={580} y={721} length={11} direct="right" />
      <Arrow x={120} y={250} length={70} direct="down" />
      <Arrow x={655} y={252} length={67} direct="up" />
      <Arrow x={537} y={252} length={55} direct="up" />
      <Arrow x={427} y={365} length={11} direct="right" />
      <Arrow x={468} y={365} length={11} direct="right" />
      
      
      <text x="-20" y="310" fill="#5444a2" fontSize="20">♢</text>
      <text x="450" y="377" fill="#5444a2" fontSize="30">*</text>
      
    </svg>
)