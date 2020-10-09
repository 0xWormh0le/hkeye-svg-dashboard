import React from 'react'
import Circle from 'components/Circle';
import Diamond from 'components/Diamond';
import Rectangle from 'components/Rectangle'
import './style.scss'

export default () => (
    <>
      <div className="greyBodySide">
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
      </div>

    </>
)