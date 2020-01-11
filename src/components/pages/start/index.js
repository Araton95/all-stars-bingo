import React from 'react'
import { Link } from 'react-router-dom'
import MarkPanel from '../../common/markPanel'

// Images
import VHSLogo from '../../../assets/images/vhs.png'

class Start extends React.Component {
  render() {
    return (
      <div className="page-content start">
        <div className="start-content">
          <div style={{width: '100%'}}>
            <div className="top">
              <div className="bingo bold">BINGO</div>
              <div className="hot condensed">HOT HAND</div>
            </div>
            <div className="mark-content">
              <MarkPanel type="start" />
            </div>
            <div className="desc">
              If the game has already started. Depending on quarter - show information related to playing bingo in the next quarter.
            </div>
          </div>
          <div className="footer">
            <Link to="/cards">
              <button className="createBtn bold">START</button>
            </Link>
            <img className="vhsLogo" src={VHSLogo} alt="" />
            <div className="indicator" />
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
