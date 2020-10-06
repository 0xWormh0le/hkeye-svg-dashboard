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
        variant='largeSkew'
        textWidth={350}
      />
      <SkewedRect
        compName="medium2A"
        posX={1400}
        posY={20}
        title="a:change the code so it's compliant"
        variant='mediumSkew'
        textWidth={235}
      />
      <SkewedRect
        compName="medium2B"
        posX={1375}
        posY={65}
        title="b:request an exemption"
        variant='mediumSkew'
        textWidth={160}
      />
      <SkewedRect
        compName="largeSkew3"
        posX={1100}
        posY={120}
        title="3.When the code is 100% compliant generate the following documents:"
        variant='largeSkew'
        textWidth={330}
      />      
      <SkewedRect
        compName="medium3A"
        posX={1480}
        posY={120}
        title="a:Compliance Report"
        variant='mediumSkew'
        textWidth={140}
      />
      <SkewedRect
        compName="medium3B"
        posX={1455}
        posY={165}
        title="b:Object profile"
        variant='mediumSkew'
        textWidth={105}
      />

      
      <SkewedRect
        compName="small1"
        posX={1355}
        posY={230}
        title="Types of Review"
        variant='mediumText'
        textWidth={130}
      />
      <SkewedRect
        compName="small1"
        posX={1355}
        posY={265}
        title="Self-Monitoring Review"
        variant='smallSkew'
        textWidth={145}
      />
      <SkewedRect
        compName="text1"
        posX={1355}
        posY={295}
        title="All developers are expected to use APOD in the DW as frequently as necessary to ensure that their code is compliant. Once their work is completed, developers are expected to generate the compliance report and an object profile and submit it to the Peer Review team for final approval."
        variant='smallText'
        textWidth={330}
      />
      <SkewedRect
        compName="small2"
        posX={1355}
        posY={380}
        title="Manual Review"
        variant='smallSkew'
        textWidth={95}
      />
      <SkewedRect
        compName="text2"
        posX={1355}
        posY={410}
        title="In some cases the DEVELOPER WORKBENCH code review tool can't be used due to product limitations. In these cases, or with the written approval of the SAP Development Manager, a manual review will be required. In all other cases the Self-Monitoring process should be followed."
        variant='smallText'
        textWidth={325}
      />
      <SkewedRect
        compName="small3"
        posX={1355}
        posY={495}
        title="Peer Review"
        variant='smallSkew'
        textWidth={95}
      />
      <SkewedRect
        compName="text3"
        posX={1355}
        posY={520}
        title="The purpose of the peer review is to deal with any exceptions to the automatic code review (the technical review) but more importantly, to review the code to ensure that the functional requirements are met in the code. Developers are expected to participate in this process and submit the compliance report as well as the object profile (before and after their modifications)."
        variant='smallText'
        textWidth={320}
      />
      <SkewedRect
        compName="small4"
        posX={1355}
        posY={635}
        title="Technical Review"
        variant='smallSkew'
        textWidth={105}
      />
      <SkewedRect
        compName="text4"
        posX={1355}
        posY={660}
        title="Tech leads and code reviewers will utilize the Tech Lead Workbench to approve coding exemptions submitted by developers. If the exemption is rejected, tech leads will provide an explanation for the rejectoin, and help the developer understand the reasoning if necessary. Tech leads also hadve the authority to release transports which have non-compliant code. This may be necessary in emergencies, but is not encouraged, In addition to the techinal code review, tech leads will also ensure that the transports have no dependencies or errors prior to moving them to Q. This minimizes any disruption Resulting from missing artefacts, or objects that are open in other transports."
        variant='smallText'
        textWidth={320}
      />
      <SkewedRect
        compName="small5"
        posX={1355}
        posY={855}
        title="Technical Review"
        variant='smallSkew'
        textWidth={105}
      />
      <SkewedRect
        compName="text5"
        posX={1355}
        posY={880}
        title="Prior to moving to production, this review will be the final step to pick up any critical issues that may have arisen during the above process. In addition, this review will include the results of analysis of the functional requirements of the code to make sure that the modifications are adequate and have been tested."
        variant='smallText'
        textWidth={320}
      />
    </div>
  );
}

export default App;
