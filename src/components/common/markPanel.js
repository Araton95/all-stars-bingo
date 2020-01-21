import React from 'react'

// Images
import LogoImg from '../../assets/images/nba-chi-20.png'
import TeamGiannis from '../../assets/images/team-giannis.png'
import TeamLebron from '../../assets/images/team-lebron.png'

class MarkPanel extends React.Component {
  render() {
    return (
      <div className="mark-panel">
        <div className="mark-panel-content">
          <img className="teamImg" src={TeamLebron} alt=""/>
          {
            this.props.type === 'start' && (
              <div className="quarter-part">
                <div className="mark-board">
                  <div className="logo-part">
                    <img className="logoImg" src={LogoImg} alt="" />
                  </div>
                </div>
                <div className="text bold">Starts in 1d 12hrs 1m</div>
              </div>
            )
          }
          {
            this.props.type === 'loading' && (
              <div className="quarter-part">
                <div className="text bold">Starts in 1d 12hrs 1m</div>
              </div>
            )
          }
          {
            this.props.type === 'loaded' && (
              <div className="quarter-part">
                <div className="text bold">1ST QUARTER</div>
                <div className="mark-board">
                  <div className="logo-part">
                    <img className="logoImg" src={LogoImg} alt="" />
                  </div>
                  <div className="scores-part">
                    <div className="score bold">--</div>
                    <div className="score bold">--</div>
                  </div>
                </div>
                <div className="text bold">Starts in 1d 12hrs 1m</div>
              </div>
            )
          }
          {
            this.props.type === 'started' && (
              <div className="quarter-part">
                <div className="text bold">1ST QUARTER</div>
                <div className="mark-board">
                  <div className="logo-part">
                    <img className="logoImg" src={LogoImg} alt="" />
                  </div>
                  <div className="scores-part">
                    <div className="score bold">--</div>
                    <div className="score bold">--</div>
                  </div>
                </div>
                <div className="text bold">{this.props.time}</div>
              </div>
            )
          }
          <img className="teamImg" src={TeamGiannis} alt=""/>
        </div>
      </div>
    );
  }
}

export default MarkPanel;
