import logo from './logo.svg';
import SkewedRect from 'components/SkewedRect'
import './App.css';
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Circle from './components/Circle';
import Diamond from './components/Diamond';
import Rectangle from './components/Rectangle'
function App() {
  const Ystartpos_green = 215;
  return (
    <>
      <div className = 'background1'>
        <Rectangle color = 'RGB(79, 167, 157)' x="15%" y="5%">START</Rectangle>

         <h1 className = 'header1'>Developer</h1> 

        <Rectangle color = 'RGB(82, 170, 219)' solid='solid' x="10%" y="30%">
            Code <br/>Complete
        </Rectangle> 

        <Circle color='RGB(82, 170, 219)' x="26%" y="30%">Hawkeye/ <br/> APOD</Circle>

        <Diamond color='RGB(82, 170, 219)' x="43%" y="30%" >Complete?</Diamond>

        <Rectangle color = 'RGB(82, 170, 219)'  x="57%" y="30%">
            Request <br/>Deviation
        </Rectangle> 

        <Diamond color='RGB(82, 170, 219)' x="73%" y="30%" >Approved?</Diamond>

        <Rectangle color = 'RGB(82, 170, 219)'  x="88%" y="30%">
            Change <br/>Code
        </Rectangle> 

        <Rectangle color = 'RGB(82, 170, 219)'  x="42%" y="65%">
            Generate <br/>Compliance <br/>Report
        </Rectangle> 

        <Rectangle color = 'RGB(51, 130, 197)'  x="56%" y="65%">
            Upload <br/>Compliance <br/>Report
        </Rectangle> 

        <Rectangle color = 'RGB(51, 130, 197)'  x="73%" y="65%">
            Request <br/>Code <br/>Review
        </Rectangle> 

      </div>

      <div className = 'background2'>
        <h1 className = 'header2'>Code Reviewer</h1> 

        <Rectangle color = 'RGB(51, 130, 197)'  x="73%" y="10%">
              Code <br/>Review
        </Rectangle> 

        <Rectangle color = 'RGB(51, 130, 197)' solid='solid' x="58%" y="50%">
            Reject
        </Rectangle> 

        <Diamond color='RGB(51, 130, 197)' x="73%" y="50%" >Compliant?</Diamond>

        <Rectangle color = 'RGB(51, 130, 197)' solid='solid' x="85%" y="50%">
            Approved
        </Rectangle> 

      </div>
      <div className="App">
        <div class="headerSide">

          <SkewedRect
            compName="largeSkew1"
            title="1.Use transaction /hawkeye/APOD to review the code."
            variant='largeSkew'
            textWidth={310}
          />
          <SkewedRect
            compName="largeSkew2"
            title="2.If there are any errors or warnings follow one of the following processes:"
            variant='largeSkew'
            textWidth={350}
          />
          <SkewedRect
            compName="medium2A"
            title="a:change the code so it's compliant"
            variant='mediumSkew'
            textWidth={235}
          />
          <SkewedRect
            compName="medium2B"
            title="b:request an exemption"
            variant='mediumSkew'
            textWidth={160}
          />
          <SkewedRect
            compName="largeSkew3"
            title="3.When the code is 100% compliant generate the following documents:"
            variant='largeSkew'
            textWidth={330}
          />      
          <SkewedRect
            compName="medium3A"
            title="a:Compliance Report"
            variant='mediumSkew'
            textWidth={140}
          />
          <SkewedRect
            compName="medium3B"
            title="b:Object profile"
            variant='mediumSkew'
            textWidth={105}
          />
        </div>
        <div class="bodySide">
          <div class="greySide">
            <div class="greyBodySide">

            </div>
            <div class="bodyFooterSide">
              <SkewedRect
                compName="largeSkew4"
                title="4.Update the technical specification document with the object profile results."
                variant='largeSkew'
                textWidth={370}
              />

              <SkewedRect
                compName="largeSkew5"
                title="5.Upload the Compliance Report into Solution Manager Project Documentation."
                variant='largeSkew'
                textWidth={390}
              />
            </div>
          </div>
          <div class="greenSide">
            <SkewedRect
              compName="greenTitle"
              title="Types of Review"
              variant='mediumText'
              textWidth={160}
            />
            <SkewedRect
              compName="small1"
              title="Self-Monitoring Review"
              variant='smallSkew'
              textWidth={145}
            />
            <SkewedRect
              compName="text1"
              title="All developers are expected to use APOD in the DW as frequently as necessary to ensure that their code is compliant. Once their work is completed, developers are expected to generate the compliance report and an object profile and submit it to the Peer Review team for final approval."
              variant='smallText'
              textWidth={330}
            />
            <SkewedRect
              compName="small2"
              title="Manual Review"
              variant='smallSkew'
              textWidth={95}
            />
            <SkewedRect
              compName="text2"
              title="In some cases the DEVELOPER WORKBENCH code review tool can't be used due to product limitations. In these cases, or with the written approval of the SAP Development Manager, a manual review will be required. In all other cases the Self-Monitoring process should be followed."
              variant='smallText'
              textWidth={325}
            />
            <SkewedRect
              compName="small3"
              title="Peer Review"
              variant='smallSkew'
              textWidth={95}
            />
            <SkewedRect
              compName="text3"
              title="The purpose of the peer review is to deal with any exceptions to the automatic code review (the technical review) but more importantly, to review the code to ensure that the functional requirements are met in the code. Developers are expected to participate in this process and submit the compliance report as well as the object profile (before and after their modifications)."
              variant='smallText'
              textWidth={320}
            />
            <SkewedRect
              compName="small4"
              title="Technical Review"
              variant='smallSkew'
              textWidth={105}
            />
            <SkewedRect
              compName="text4"
              title="Tech leads and code reviewers will utilize the Tech Lead Workbench to approve coding exemptions submitted by developers. If the exemption is rejected, tech leads will provide an explanation for the rejectoin, and help the developer understand the reasoning if necessary. Tech leads also hadve the authority to release transports which have non-compliant code. This may be necessary in emergencies, but is not encouraged, In addition to the techinal code review, tech leads will also ensure that the transports have no dependencies or errors prior to moving them to Q. This minimizes any disruption Resulting from missing artefacts, or objects that are open in other transports."
              variant='smallText'
              textWidth={320}
            />
            <SkewedRect
              compName="small5"
              title="Technical Review"
              variant='smallSkew'
              textWidth={105}
            />
            <SkewedRect
              compName="text5"
              title="Prior to moving to production, this review will be the final step to pick up any critical issues that may have arisen during the above process. In addition, this review will include the results of analysis of the functional requirements of the code to make sure that the modifications are adequate and have been tested."
              variant='smallText'
              textWidth={320}
            />
          </div>
        </div>
        <div class="footerSide">
          <SkewedRect
            compName="oppoSkewedRect"
            title="Use of DEVELOPER WORKBENCH is recommended throughout       the development process to avoid significant rework at code completion."
            variant='oppoSkewedRect'
            textWidth={460}
            textDirection='oppoText'
          />

          <SkewedRect
            compName="oppoSkewedRect"
            title="Q-Gate will prevent any non-complaint code being released from the development environment"
            variant='oppoSkewedRect'
            textWidth={340}
            textDirection='oppoText'
          />
        </div>
      </div>
    </>
  );
}

export default App;
