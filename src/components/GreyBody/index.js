import React from 'react'
import Circle from 'components/Circle';
import Diamond from 'components/Diamond';
import Rectangle from 'components/Rectangle'
import './style.scss'

export default () => {
  const handleItemClick = () => alert("Event");
return(
    <>
      <div className="greyBodySide">
        <div className = 'background1'>
          <Rectangle color = 'RGB(79, 167, 157)' x="15%" y="5%" onClick={handleItemClick}>START</Rectangle>

          <h1 className = 'header1'>Developer</h1> 

          <Rectangle color = 'RGB(82, 170, 219)' solid='solid' x="10%" y="30%" onClick={handleItemClick}>
              Code <br/>Complete
          </Rectangle> 

          <Circle color='RGB(82, 170, 219)' x="26%" y="30%" onClick={handleItemClick}>Hawkeye/ <br/> APOD</Circle>

          <Diamond color='RGB(82, 170, 219)' x="43%" y="30%" onClick={handleItemClick}>Complete?</Diamond>

          <Rectangle color = 'RGB(82, 170, 219)'  x="57%" y="30%" onClick={handleItemClick}>
              Request <br/>Deviation
          </Rectangle> 

          <Diamond color='RGB(82, 170, 219)' x="75%" y="30%" onClick={handleItemClick}>Approved?</Diamond>

          <Rectangle color = 'RGB(82, 170, 219)'  x="88%" y="30%" onClick={handleItemClick}>
              Change <br/>Code
          </Rectangle> 

          <Rectangle color = 'RGB(82, 170, 219)'  x="42%" y="65%" onClick={handleItemClick}>
              Generate <br/>Compliance <br/>Report
          </Rectangle> 

          <Rectangle color = 'RGB(51, 130, 197)'  x="59%" y="65%" onClick={handleItemClick}>
              <i>Upload <br/>Compliance </i>
              <br/>Report
          </Rectangle> 

          <Rectangle color = 'RGB(51, 130, 197)'  x="75%" y="65%" onClick={handleItemClick}>
              Request <br/>Code <br/>Review
          </Rectangle> 

        </div>
        <div className = 'background2'>
            <h1 className = 'header2'>Code Reviewer</h1> 

            <Rectangle color = 'RGB(51, 130, 197)'  x="74%" y="8%" onClick={handleItemClick}>
                  Code <br/>Review
            </Rectangle> 

            <Rectangle color = 'RGB(51, 130, 197)' solid='solid' x="59%" y="50%" onClick={handleItemClick}>
                Reject
            </Rectangle> 

            <Diamond color='RGB(51, 130, 197)' x="74%" y="50%" onClick={handleItemClick}>Compliant?</Diamond>

            <Rectangle color = 'RGB(51, 130, 197)' solid='solid' x="86%" y="50%" onClick={handleItemClick}>
                Approved
            </Rectangle> 

          </div>
      </div>

    </>
  )
}