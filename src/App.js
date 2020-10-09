import React from 'react';
import Logo from './components/Logo'
import Header from './components/Header'
import GreyBody from './components/GreyBody'
import GreyFooter from './components/GreyFooter'
import TypeOfReview from './components/TypesOfView'
import Footer from './components/Footer'
import SVGLine from './components/SVGLine'
import './App.scss';


function App() {
  const Ystartpos_green = 215;

  return (
    <div style={{display: 'flex'}}>
      <div className="App">
        <div className="headerSide">          
            <Logo />
            <Header />
        </div>
        <div className="bodySide">
          <div className="greySide">
            <GreyBody />
            <GreyFooter />
          </div>
          <div className="greenSide">
            <TypeOfReview />
          </div>
        </div>
        <Footer />
        <SVGLine />
      </div>
    </div>
  );
}

export default App;
