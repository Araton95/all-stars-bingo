import React from 'react'
import Modal from 'react-modal'
import moment from 'moment'
import { uniqBy, clone, random } from 'lodash'

import MarkPanel from '../../common/markPanel'

// Images
import Randomizing from '../../../assets/images/img-randomizing.svg'
import VHSLogo from '../../../assets/images/vhs.png'
import IconMatchStarter from '../../../assets/images/icn-match-start.svg'
import IconBingoBall from '../../../assets/images/icn-ball.svg'
import IconBingoCheckedBall from '../../../assets/images/icn-ball-claimed.svg'
import IconDots from '../../../assets/images/icn-dots.svg'
import IconHelp from '../../../assets/images/icn-help.svg'
import IconClose from '../../../assets/images/icn-close.svg'
import PlayerImgs from '../../../assets/images/photos/index.js'
import FinalModal from '../../../assets/images/final.jpg'
import HelpImg1 from '../../../assets/images/img-help-01.svg'
import HelpImg2 from '../../../assets/images/img-help-02.svg'
import HelpImg3 from '../../../assets/images/img-help-03.svg'

let realEvents = [{"order":0,"type":"assist","player_name":"Nemanja Bjelica","number":"88","clock":1579144257},{"order":1,"type":"jump shot","player_name":"Harrison Barnes","number":"40","clock":1579144257},{"order":2,"type":"turnover","player_name":"Buddy Hield","number":"24","clock":1579144294},{"order":3,"type":"jump shot","player_name":"De'Aaron Fox","number":"5","clock":1579144314},{"order":4,"type":"jump shot","player_name":"Nemanja Bjelica","number":"88","clock":1579144344},{"order":5,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":1579144361},{"order":6,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":1579144377},{"order":7,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":1579144393},{"order":8,"type":"steal","player_name":"Harrison Barnes","number":"40","clock":1579144425},{"order":9,"type":"assist","player_name":"De'Aaron Fox","number":"5","clock":1579144432},{"order":10,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":1579144432},{"order":11,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":1579144447},{"order":12,"type":"assist","player_name":"De'Aaron Fox","number":"5","clock":1579144454},{"order":13,"type":"dunk","player_name":"Marvin Bagley III","number":"35","clock":1579144454},{"order":14,"type":"turnover","player_name":"Buddy Hield","number":"24","clock":1579144484},{"order":15,"type":"jump shot","player_name":"Harrison Barnes","number":"40","clock":1579144506},{"order":16,"type":"layup","player_name":"De'Aaron Fox","number":"5","clock":1579144531},{"order":17,"type":"rebound","player_name":"De'Aaron Fox","number":"5","clock":1579144556},{"order":18,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":1579144591},{"order":19,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":1579144595},{"order":20,"type":"layup","player_name":"Nemanja Bjelica","number":"88","clock":1579144595},{"order":21,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":1579144596},{"order":22,"type":"layup","player_name":"Nemanja Bjelica","number":"88","clock":1579144596},{"order":23,"type":"rebound","player_name":"De'Aaron Fox","number":"5","clock":1579144597},{"order":24,"type":"assist","player_name":"De'Aaron Fox","number":"5","clock":1579144600},{"order":25,"type":"layup","player_name":"Harrison Barnes","number":"40","clock":1579144600},{"order":26,"type":"dunk","player_name":"Marvin Bagley III","number":"35","clock":1579144839},{"order":27,"type":"steal","player_name":"De'Aaron Fox","number":"5","clock":1579144854},{"order":28,"type":"assist","player_name":"Nemanja Bjelica","number":"88","clock":1579144860},{"order":29,"type":"layup","player_name":"Buddy Hield","number":"24","clock":1579144860},{"order":30,"type":"fouldrawn","player_name":"De'Aaron Fox","number":"5","clock":1579144887},{"order":31,"type":"freethrow","player_name":"De'Aaron Fox","number":"5","clock":1579144914},{"order":32,"type":"freethrow","player_name":"De'Aaron Fox","number":"5","clock":1579144914},{"order":33,"type":"jump shot","player_name":"Nemanja Bjelica","number":"88","clock":1579144963},{"order":34,"type":"layup","player_name":"Buddy Hield","number":"24","clock":1579144981},{"order":35,"type":"personalfoul","player_name":"Harry Giles III","number":"20","clock":1579145005},{"order":36,"type":"personalfoul","player_name":"De'Aaron Fox","number":"5","clock":1579145030},{"order":37,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":1579145061},{"order":38,"type":"jump shot","player_name":"De'Aaron Fox","number":"5","clock":1579145096},{"order":39,"type":"rebound","player_name":"Harry Giles III","number":"20","clock":1579145113},{"order":40,"type":"layup","player_name":"Buddy Hield","number":"24","clock":1579145118},{"order":41,"type":"steal","player_name":"Nemanja Bjelica","number":"88","clock":1579145127},{"order":42,"type":"fouldrawn","player_name":"De'Aaron Fox","number":"5","clock":1579145133},{"order":43,"type":"jump shot","player_name":"Trevor Ariza","number":"0","clock":1579145339},{"order":44,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":1579145344},{"order":45,"type":"layup","player_name":"Nemanja Bjelica","number":"88","clock":1579145344},{"order":46,"type":"jump shot","player_name":"Cory Joseph","number":"9","clock":1579145379},{"order":47,"type":"jump shot","player_name":"Cory Joseph","number":"9","clock":1579145426},{"order":48,"type":"rebound","player_name":"Cory Joseph","number":"9","clock":1579145428},{"order":49,"type":"jump shot","player_name":"Cory Joseph","number":"9","clock":1579145429},{"order":50,"type":"layup","player_name":"Harrison Barnes","number":"40","clock":1579145458},{"order":51,"type":"assist","player_name":"Cory Joseph","number":"9","clock":1579145458},{"order":52,"type":"fouldrawn","player_name":"Harrison Barnes","number":"40","clock":1579145461},{"order":53,"type":"freethrow","player_name":"Harrison Barnes","number":"40","clock":1579145487},{"order":54,"type":"assist","player_name":"Buddy Hield","number":"24","clock":1579145520},{"order":55,"type":"jump shot","player_name":"Harry Giles III","number":"20","clock":1579145520},{"order":56,"type":"rebound","player_name":"Harry Giles III","number":"20","clock":1579145570},{"order":57,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":1579145575}]
// Remove duplicates with the same clock value
realEvents = uniqBy(realEvents, 'clock')

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 1,
      gameTime: '',
      slideOpen: false,
      helpModalOpen: false,
      finalModalOpen: false,
      cards: [],
      occuredEvents: [],
      bingoEvents: [],
      bingoStatus: 'loading',
      tileDetail: {}
    }
  }

  componentDidMount() {
    this.allEvents = this.generateRandomEvents()
    this.bingoCards = this.generateRandomBingo()
    this.gameClock = this.dateToUnix('2020-01-16T03:10:44+00:00')

    const latestEvent = Math.max.apply(Math, realEvents.map(o => o.clock))
    this.quarterTime = latestEvent - this.gameClock
    this.playStartCountdown = this.secondsToCountdownFormat(this.quarterTime )
    this.setState({ cards: this.allEvents })
    setTimeout(() => this.setState({ status: 2 }), 3000)
    setTimeout(() => { this.setState({ status: 3 }); this.bingoStart(); }, 5000)
  }

  generateRandomNumber = maxRange => {
    return random(0, maxRange)
  }

  generateRandomBingo = () => {
    let startPoint
    const generatedCard = []
    const rawType = this.generateRandomNumber(2)

    switch (rawType) {
      // horisontal
      case 0:
        startPoint = this.generateRandomNumber(4)
        for (let index = 0; index < 5; index++) {
          generatedCard.push({
            cardId: index === 0 ? startPoint : startPoint + (5 * index),
            letter: 'BINGO'[index]
          })
        }

        break;
      // vertical
      case 1:
        startPoint = this.generateRandomNumber(4)
        startPoint = startPoint * 5
        for (let index = 0; index < 5; index++) {
          generatedCard.push({
            cardId: index === 0 ? startPoint : startPoint + index,
            letter: 'BINGO'[index]
          })
        }

        break;
      // x type
      case 2:
        startPoint = this.generateRandomNumber(1) === 0 ? 0 : 4
        const step = startPoint === 0 ? 6 : 4
        for (let index = 0; index < 5; index++) {
          generatedCard.push({
            cardId: index === 0 ? startPoint : startPoint + (index * step),
            letter: startPoint === 0 ? 'BINGO'[index] : 'OGNIB'[index]
          })
        }

        break;
      default:
        break;
    }

    return generatedCard
  }

  componentWillUnmount() {
    clearInterval(this.clr)
  }

  bingoStart = () => {
    this.setState({ bingoStatus: 'started' })
    this.clr = setInterval(() => {
      this.gameClock++

      const countdownTime = this.secondsToCountdownFormat(this.quarterTime)
      if (--this.quarterTime < 0) {
        clearInterval(this.clr)
      }

      this.setState({ gameTime: countdownTime })

      this.allEvents.forEach(e => {
        if (e.clock === this.gameClock) {
          let occuredEvents = clone(this.state.occuredEvents)
          e.gameClock = countdownTime
          occuredEvents.push(e)
          this.setState({ occuredEvents, tileDetail: {} })
          let bEvent = this.bingoCards.filter(b => b.cardId === e.cardId)
          if (bEvent.length !== 0) {
            let bingoEvents = clone(this.state.bingoEvents)
            bingoEvents.push(bEvent[0])
            this.setState({ bingoEvents })
          }
        }
      })
    }, 1000)
  }

  secondsToCountdownFormat = (timestamp) => {
    let minutes = parseInt(timestamp / 60, 10)
    let seconds = parseInt(timestamp % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return minutes + ":" + seconds;
  }

  generateRandomEvents = () => {
    const selectedEvents = []
    const events = realEvents
    const eventsLength = events.length

    for (let index = 0; index < 25; index++) {
      let randomEventPosition

      do {
        // generate unique and random number
        randomEventPosition = this.generateRandomNumber(eventsLength - index)
      } while (typeof events[randomEventPosition] === 'undefined')

      // get element by generated order
      const selectedElement = events[randomEventPosition]

      // remove that element from events
      events.splice(randomEventPosition, 1)

      // change element index
      selectedElement.cardId = index

      // push element to final array
      selectedEvents.push(selectedElement)
    }

    return selectedEvents
  }

  tapTile = (index) => {
    let { occuredEvents } = this.state
    let cards = clone(this.state.cards)
    let bingoEvents = clone(this.state.bingoEvents)

    if (occuredEvents.filter(e => e.cardId === index).length !== 0) {
      cards[index].tapped = true
      bingoEvents.forEach(e => { if(e.cardId === index) e.checked = true })
      this.setState({ cards, bingoEvents })
      if (bingoEvents.length === 5 && bingoEvents.every((e) => e.checked)) {
        setTimeout(() => this.setState({ bingoStatus: 'done' }), 1500)
        // setTimeout(() => this.setState({ finalModalOpen: true }), 2000)
        clearInterval(this.clr)
      }
    } else {
      let tileDetail = this.state.cards.filter(e => e.cardId === index)[0]
      this.setState({ tileDetail })
    }
  }

  dateToUnix = (date) => {
    return moment(date).utcOffset('-0500').valueOf() / 1000
  }

  render() {
    const {
      status,
      gameTime,
      slideOpen,
      bingoStatus,
      occuredEvents,
      bingoEvents,
      helpModalOpen,
      finalModalOpen,
      cards,
      tileDetail
    } = this.state

    const lastOccuredEvent = occuredEvents.length !== 0 ? occuredEvents[occuredEvents.length-1] : null
    const lastBingoEvent = bingoEvents.length !== 0 ? bingoEvents[bingoEvents.length-1] : null

    return (
      <div className="page-content cards-page">
        <div>
          <div className={`top ${slideOpen ? 'blur' : ''}`}>
            <div className="title">
              <span>BINGO</span>
              <span>HOT HAND</span>
            </div>
            { status === 1 && <MarkPanel type="loading" /> }
            { status === 2 && <MarkPanel type="loaded" /> }
            { status === 3 && <MarkPanel type="started" time={gameTime}/> }
          </div>

          {
            status === 1 && (
              <div className="creating-content">
                <img className="randomImg" src={Randomizing} alt="" />
                <div className="text1 condensed">RANDOMIZING</div>
                <div className="text2">Creating your Bingo card</div>
              </div>
            )
          }
          {
            status === 2 && (
              <div className="tiles" style={{marginTop: '42px'}}>
                <div className="cards-content">
                  {
                    cards.map((c, i) => (
                      <div className="card-content" key={i}>
                        <div className="card tapped">
                          <span className="number">{c.number}</span>
                          <span className="action">{c.type}</span>
                          <span className="name">{c.player_name}</span>
                          <img className="playerImg" src={PlayerImgs[`player${c.cardId+1}`]} alt="" />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
          {
            status === 3 && (
              <div className={`bingo-content ${slideOpen ? 'opened' : 'closed'}`}>
                <div className="event-status" onClick={() => this.setState({ slideOpen: true })}>
                  <div className={`event ${(lastOccuredEvent !== null && bingoStatus !== 'done')? 'active': ''}`}>
                    {
                      (lastOccuredEvent !== null && bingoStatus !== 'done')
                        ? `${lastOccuredEvent.number}  ${lastOccuredEvent.player_name} - ${lastOccuredEvent.type}`
                        : 'Live Match Feed...'
                    }
                  </div>
                  <img src={IconDots} alt="" />
                </div>
                <div className="tiles">
                  <div className="cards-content">
                    {
                      cards.map((c, i) => {
                        let bingoEvent = bingoEvents.filter(b => b.cardId === i)
                        let isBingoCard = bingoEvent.length !== 0
                        return (
                          <div className="card-content" key={i}>
                            {
                              (bingoStatus === 'done' && isBingoCard) ?
                                <div className="card done" >
                                  {bingoEvent[0].letter}
                                </div>
                                :
                                <div
                                  className={`card ${c.tapped ? (isBingoCard ? 'isBingo' : 'tapped') : ''} ${lastOccuredEvent !== null && lastOccuredEvent.cardId === i && !c.tapped ? 'highlighted': ''}`}
                                  onClick={bingoStatus !== 'done' ? () => this.tapTile(i) : null}
                                >
                                  <span className="number">{c.number}</span>
                                  <span className="action">{c.type}</span>
                                  <span className="name">{c.player_name}</span>
                                  <img className="playerImg" src={PlayerImgs[`player${c.cardId+1}`]} alt="" />
                                </div>
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="sliding-pane">
                  <div className="feed-text bold">Live Match Feed</div>
                  <div className="match-quarter">
                    <div className="match-feed bold" onClick={() => this.setState({ slideOpen: false })}>1ST QUARTER</div>
                    <div className="events">
                      {
                        clone(occuredEvents).reverse().map((e, i) => {
                          let bingoEvent = bingoEvents.filter(b => b.cardId === e.cardId)
                          let isBingoEvent = bingoEvent.length !== 0
                          let isBingoChecked = isBingoEvent && bingoEvent[0].checked
                          return (
                            <div className="event" key={i}>
                              <div className="info">
                                <div className="time">{e.gameClock}</div>
                                <div>
                                  <div className="name bold">{e.number} <span style={{color: '#BABABA'}}>- {e.player_name}</span></div>
                                  <div className="event-name bold">{e.type}</div>
                                </div>
                              </div>
                              {
                                isBingoEvent && (
                                  !isBingoChecked ?
                                    <img className="ball-icon" src={IconBingoBall} alt="" />
                                    :
                                    <img className="ball-icon" src={IconBingoCheckedBall} alt="" />
                                )
                              }
                            </div>
                          )
                        })
                      }
                      {
                        bingoStatus === 'started' && (
                          <div className="event">
                            <div className="info">
                              <div className="time">{this.playStartCountdown}</div>
                              <div>
                                <div className="event-name bold">Match started</div>
                              </div>
                            </div>
                            <img className="ball-icon" src={IconMatchStarter} alt="" />
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
                {
                  Object.keys(tileDetail).length ===0 ?
                    <div className={`bingo-status ${lastBingoEvent !== null ? 'active' : ''} ${slideOpen ? 'blur' : ''}`}>
                      { bingoEvents.length !== 5 && lastBingoEvent === null && 'Tap a tile to see more information' }
                      { bingoEvents.length !== 5 && lastBingoEvent !== null  && !lastBingoEvent.checked && 'Calling Out!' }
                      { bingoEvents.length !== 5 && lastBingoEvent !== null  && lastBingoEvent.checked && 'Very well. Keep on!' }
                      { bingoEvents.length === 5 && lastBingoEvent !== null  && !lastBingoEvent.checked && 'Called Out! Hit it!' }
                      { bingoStatus !== 'done' && bingoEvents.length === 5 && bingoEvents.every((e) => e.checked) && 'Great job!' }
                      { bingoStatus === 'done' && <span className="winner bold">YOU ARE A WINNER!</span> }
                    </div>
                    :
                    <div className="tile-detail">
                      <div className="playerImg">
                        <img src={PlayerImgs[`player${tileDetail.cardId+1}`]} alt="" />
                      </div>
                      <div className="info">
                        <div className="name bold">{tileDetail.number} {tileDetail.player_name}</div>
                        <div className="name bold">Player 1st Basket</div>
                        <div className="desc">Occurs when player throws the ball amd scores a goal and a behind post a behind.</div>
                      </div>
                    </div>
                }
              </div>
            )
          }
        </div>

        <div className="footer">
          {
            status === 1
              ? <img src={VHSLogo} alt="" />
              : Object.keys(tileDetail).length ===0 && <img src={IconHelp} alt="" onClick={() => this.setState({ helpModalOpen: true })} />
          }
          <div className="indicater" />
        </div>

        <Modal
          key="help-tile"
          className="help-modal"
          isOpen={helpModalOpen}
          onRequestClose={() => this.setState({ helpModalOpen: false })}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={false}
        >
          <div className="help-modal-content">
            <div style={{marginTop: '60px'}}>
              <div className="title">Rules to play</div>
              <ul className="rules">
                <li>Wait till action from your tile Called Out.</li>
                <li>Claim a tile on your Bingo Card.</li>
                <li>Must make a horizontal, diagonal OR vertical line to get a BINGO</li>
              </ul>
              <div className="help-imgs">
                <div className="help-img"><img src={HelpImg1} alt="" /></div>
                <div className="help-img"><img src={HelpImg2} alt="" /></div>
                <div className="help-img"><img src={HelpImg3} alt="" /></div>
              </div>
            </div>
            <div className="footer">
              <img src={IconClose} alt="" onClick={() => this.setState({ helpModalOpen: false })} />
              <div className="indicater" />
            </div>
          </div>
        </Modal>

        <Modal
          key="final-tile"
          className="final-modal"
          isOpen={finalModalOpen}
          onRequestClose={() => this.setState({ finalModalOpen: false })}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={false}
        >
          <div className="final-modal-content">
            <img className="page-img" src={FinalModal} alt="" />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Cards;
