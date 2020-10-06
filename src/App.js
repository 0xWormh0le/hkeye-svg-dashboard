import React from 'react';
import logo from './logo.svg';
import SkewedRect from 'components/SkewedRect'
import './App.css';

function App() {
  return (
    <div className="App">
      <SkewedRect
        compName="largeSkew1"
        posX={580}
        posY={20}
        title="1.Use transaction /hawkeye/APOD to review the code."
        variant='largeSkew'
        textWidth={310}
      />
      <SkewedRect
        compName="largeSkew2"
        posX={1000}
        posY={20}
        title="2.If there are any errors or warnings follow one of the following processes:"
        variant='mediumSkew'
        textWidth={350}
      />
      <SkewedRect
        compName="medium2A"
        posX={1400}
        posY={20}
        title="a:change the code so it's compliant"
        variant='smallSkew'
        textWidth={235}
      />
      <SkewedRect
        compName="medium2B"
        posX={1375}
        posY={65}
        title="b:request an exemption"
        variant='smallSkew'
        textWidth={160}
      />
      <SkewedRect
        compName="largeSkew3"
        posX={1100}
        posY={120}
        title="3.When the code is 100% compliant generate the following documents:"
        variant='mediumSkew'
        textWidth={330}
      />      
      <SkewedRect
        compName="medium3A"
        posX={1480}
        posY={120}
        title="a:Compliance Report"
        variant='smallSkew'
        textWidth={140}
      />
      <SkewedRect
        compName="medium3B"
        posX={1455}
        posY={165}
        title="b:Object profile"
        variant='smallSkew'
        textWidth={105}
      />
    </div>
  );
}

export default App;
