import React from 'react'
import { Link } from 'react-router-dom'

// Images
import LogoImg from '../../../assets/images/nba-chi-20.png'
import TeamGiannis from '../../../assets/images/team-giannis.png'
import TeamLebron from '../../../assets/images/team-lebron.png'
import VHSLogo from '../../../assets/images/vhs.png'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ status: 2 }), 2000)
  }

  render() {
    return (
      <div className="page-content home">
        {
          this.state.status === 1 ?
            <img className="logo-img" src={LogoImg} alt="" />
            :
            <div className="card-create-content">
              <div className="top">
                <div className="bingo bold">BINGO</div>
                <div className="hot condensed">HOT HAND</div>
              </div>
              <div className="chose-teams">
                <div className="text condensed">CHOSE YOUR TEAM</div>
                <div className="teams">
                  <div className="team-block">
                    <div className="teamImg">
                      <img src={TeamLebron} alt=""/>
                    </div>
                    <div className="team-txt">TEAM ROASTER</div>
                  </div>
                  <div className="or bold">OR</div>
                  <div className="team-block">
                    <div className="teamImg">
                      <img src={TeamGiannis} alt=""/>
                    </div>
                    <div className="team-txt">TEAM ROASTER</div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <Link to="/start">
                  <button className="createBtn bold">CREATE CARD</button>
                </Link>
                <img className="vhsLogo" src={VHSLogo} alt="" />
                <div className="indicator" />
              </div>
            </div>
        }
      </div>
    );
  }
}

export default Home;
