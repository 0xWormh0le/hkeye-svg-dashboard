import React from 'react'
import SkewedRect from 'components/SkewedRect'

export default () => (
  <>
    <SkewedRect
      id="greenTitle"
      style={{ marginBottom: '5px' }}
      title="Types of Review"
      variant='mediumText'
      textWidth={160}
    />
    <SkewedRect
      id="small1"
      style={{ display: 'flex', marginTop: '2px', marginBottom: '3px' }}
      title="Self-Monitoring Review"
      variant='smallSkew'
      textWidth={145}
    />
    <SkewedRect
      id="text1"
      style={{ marginLeft: '30px' }}
      title="All developers are expected to use APOD in the DW as frequently as necessary to ensure that their code is compliant. Once their work is completed, developers are expected to generate the compliance report and an object profile and submit it to the Peer Review team for final approval."
      variant='smallText'
      textWidth={330}
    />
    <SkewedRect
      id="small2"
      style={{ display: 'flex', marginTop: '2px', marginBottom: '3px' }}
      title="Manual Review"
      variant='smallSkew'
      textWidth={95}
    />
    <SkewedRect
      id="text2"
      style={{ marginLeft: '30px' }}
      title="In some cases the DEVELOPER WORKBENCH code review tool can't be used due to product limitations. In these cases, or with the written approval of the SAP Development Manager, a manual review will be required. In all other cases the Self-Monitoring process should be followed."
      variant='smallText'
      textWidth={325}
    />
    <SkewedRect
      id="small3"
      style={{ display: 'flex', marginTop: '2px', marginBottom: '3px' }}
      title="Peer Review"
      variant='smallSkew'
      textWidth={95}
    />
    <SkewedRect
      id="text3"
      style={{ marginLeft: '30px' }}
      title="The purpose of the peer review is to deal with any exceptions to the automatic code review (the technical review) but more importantly, to review the code to ensure that the functional requirements are met in the code. Developers are expected to participate in this process and submit the compliance report as well as the object profile (before and after their modifications)."
      variant='smallText'
      textWidth={320}
    />
    <SkewedRect
      id="small4"
      style={{ display: 'flex', marginTop: '2px', marginBottom: '3px' }}
      title="Technical Review"
      variant='smallSkew'
      textWidth={105}
    />
    <SkewedRect
      id="text4"
      style={{ marginLeft: '30px' }}
      title="Tech leads and code reviewers will utilize the Tech Lead Workbench to approve coding exemptions submitted by developers. If the exemption is rejected, tech leads will provide an explanation for the rejectoin, and help the developer understand the reasoning if necessary. "
      variant='smallText'
      textWidth={320}
    />
    <SkewedRect
      id="text4"
      style={{ marginLeft: '30px', marginTop: '5px' }}
      title="Tech leads also hadve the authority to release transports which have non-compliant code. This may be necessary in emergencies, but is not encouraged, In addition to the techinal code review, tech leads will also ensure that the transports have no dependencies or errors prior to moving them to Q. This minimizes any disruption Resulting from missing artefacts, or objects that are open in other transports."
      variant='smallText'
      textWidth={320}
    />
    <SkewedRect
      id="small5"
      style={{ display: 'flex', marginTop: '2px', marginBottom: '3px' }}
      title="Production Review"
      variant='smallSkew'
      textWidth={120}
    />
    <SkewedRect
      id="text5"
      style={{ marginLeft: '30px' }}
      title="Prior to moving to production, this review will be the final step to pick up any critical issues that may have arisen during the above process. In addition, this review will include the results of analysis of the functional requirements of the code to make sure that the modifications are adequate and have been tested."
      variant='smallText'
      textWidth={320}
    />
  </>
)