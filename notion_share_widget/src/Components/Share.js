import React, { useState, useContext } from 'react';
import './Share.css';
import { TbShare } from "react-icons/tb";
import { GrCircleQuestion } from 'react-icons/gr';
import { BsPersonCircle } from 'react-icons/bs';
import { BsLink45Deg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './ContextApi';



function Share() {

  let nevigate = useNavigate();
  const { setPerson, setGroups, addAccess, buttonClicked, setButtonClicked } = useContext(AppContext);
  const [isToggled, setToggle] = useState(false);
  const personInvite = [];
  console.log(addAccess)

  const callback = () => {
    setToggle(!isToggled)
  }

  const changePage = () => {
    setPerson(['Tom Cook', 'Arlene Mccoy']);
    setGroups(['Product', 'Engineering']);
    nevigate('/inputField');
  }

  const aadfg = () => {
    for (let i = 0; i < addAccess.length; i = i + 2) {
      // let option = []
      // if (addAccess[i + 1] == "Full access") {
      //   option.push("Can edit", "Can View", "No Access")
      //   console.log("option given " + option)
      // } else if (addAccess[i + 1] === "Can edit") {
      //   option.push("Full access", "Can View", "No Access")
      // } else if (addAccess[i + 1] === "Can View") {
      //   option.push("Full access", "Can edit", "No Access")
      // } else if (addAccess[i + 1] === "No Access") {
      //   option.push("Full access", "Can edit", "Can View")
      // }
      
      personInvite.push(<div className='search' key={i}>
        <div id='personLogo'> <BsPersonCircle /></div>
        <div id='publish'>
          <h2>{addAccess[i]}</h2>
          <h3>{addAccess[i].split(" ")[0] + "@gmail.com"}</h3>
        </div>

        <div className='selectAccess'>
          <select id='selectAccess'>
            <option value={addAccess[i + 1]}>{addAccess[i + 1]}</option>
            <option value="canView">Can View</option>
            <option value="canEdit">Can edit</option>
            <option value="noAccess">No Access</option>
          </select>
        </div>
      </div>)
    }
  }
  aadfg()

  return (
    <div>
      <div id='mainFrame'>
        <button id='shareBtn' onClick={() => setButtonClicked(true)}><span>Share</span><TbShare /></button>
      </div>

      {buttonClicked &&
        <div id='inputFieldPage'>
          <hr />
          <div>

          </div>

          <div className='shareToWeb'>

            <img id='iconimg' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/g53jrn8zc1gjymh9upcm" alt="icon" />

            <div id='publish'>
              <h2>Share to web</h2>
              <h3>Publish and share link with anyone</h3>
            </div>
            <div className='toggle'>
              <input type="checkbox" defaultChecked={isToggled} onClick={callback} id="toggle" />
            </div>

          </div>
          <div id='inputSearch'>
            <div id='userInput'>
              <div id='userInputInner'>
                <input type="text" name="user" id="user" placeholder='     People , emails, groups'
                  onClick={changePage} />
                <button>Invite</button>
              </div>
            </div>

            <div className='search'>
              <img id='oslashLogo' src="https://media.glassdoor.com/sqll/3914039/oslash-squarelogo-1603960634282.png" alt="oslash" />

              <div id='publish'>
                <h2>Everyone at OSlash</h2>
                <h3>25 workspace members</h3>
              </div>

              <div className='selectAccess'>
                <select id='selectAccess'>
                  <option value="noAccess">No access</option>
                  <option value="fullAccess">Full access</option>
                  <option value="canEdit">Can edit</option>
                  <option value="canView">Can View</option>
                </select>
              </div>
            </div>

            {addAccess.length > 0 && personInvite.length > 0 && personInvite.map((data, index) => {
              return data

            })

            }
          </div>

          <div id='learnSharing'>
            <GrCircleQuestion id='learnLogo' />
            <h4>Learn about sharing</h4>
            <BsLink45Deg id='linklogo' />
            <h4 id='copylink' style={{ color: 'black' }}>Copy link</h4>
          </div>
        </div>
      }
    </div>
  )
}

export default Share