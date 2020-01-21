import React from 'react'
import Modal from 'react-modal'
import { clone, sortBy } from 'lodash'

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

const eventNames = ['first points', 'pts +foal', 'crossover', 'intercept', 'dunk', '3 pointer', 'alley oop', 'free throw +1', 'block', 'winning basket', 'steal', 'free throw +2']

const allEvents = [
  {
    cardId: 0,
    cardNumber: 0,
    event: 1,
    time: 8,
    name: 'D.Martin',
  },
  {
    cardId: 1,
    cardNumber: 88,
    event: 2,
    time: 2,
    name: 'D.Lynch',
  },
  {
    cardId: 2,
    cardNumber: 35,
    event: 1,
    time: 11,
    name: 'G.Long',
  },
  {
    cardId: 3,
    cardNumber: 40,
    event: 1,
    time: 55,
    name: 'M.Jack',
  },
  {
    cardId: 4,
    cardNumber: 88,
    event: 2,
    time: 30,
    name: 'K.Sam',
  },
  {
    cardId: 5,
    cardNumber: 32,
    event: 3,
    time: 45,
    name: 'C.Ronaldo',
  },
  {
    cardId: 6,
    cardNumber: 5,
    event: 3,
    time: 50,
    name: 'L.Messi',
  },
  {
    cardId: 7,
    cardNumber: 8,
    event: 2,
    time: 35,
    name: 'W.Koala',
  },
  {
    cardId: 8,
    cardNumber: 13,
    event: 4,
    time: 25,
    name: 'A.Martin',
  },
  {
    cardId: 9,
    cardNumber: 3,
    event: 1,
    time: 97,
    name: 'D.Alex',
  },
  {
    cardId: 10,
    cardNumber: 5,
    event: 2,
    time: 20,
    name: 'J.Sergey',
  },
  {
    cardId: 11,
    cardNumber: 20,
    event: 4,
    time: 85,
    name: 'R.Gong',
  },
  {
    cardId: 12,
    cardNumber: 7,
    event: 4,
    time: 90,
    name: 'L.Hmmm',
  },
  {
    cardId: 13,
    cardNumber: 24,
    event: 2,
    time: 80,
    name: 'D.Martin',
  },
  {
    cardId: 14,
    cardNumber: 24,
    event: 1,
    time: 65,
    name: 'H.Ko',
  },
  {
    cardId: 15,
    cardNumber: 22,
    event: 3,
    time: 70,
    name: 'R.Ali',
  },
  {
    cardId: 16,
    cardNumber: 9,
    event: 4,
    time: 75,
    name: 'S.Tomy',
  },
  {
    cardId: 17,
    cardNumber: 3,
    event: 3,
    time: 51,
    name: 'W.Philips',
  },
  {
    cardId: 18,
    cardNumber: 5,
    event: 1,
    time: 68,
    name: 'A.Windsor',
  },
  {
    cardId: 19,
    cardNumber: 10,
    event: 3,
    time: 73,
    name: 'S.Feaster',
  },
  {
    cardId: 20,
    cardNumber: 8,
    event: 3,
    time: 15,
    name: 'J.Inglis',
  },
  {
    cardId: 21,
    cardNumber: 13,
    event: 1,
    time: 83,
    name: 'D.Martin',
  },
  {
    cardId: 22,
    cardNumber: 5,
    event: 1,
    time: 115,
    name: 'T.Lynch',
  },
  {
    cardId: 23,
    cardNumber: 9,
    event: 3,
    time: 150,
    name: 'D.Short',
  },
  {
    cardId: 24,
    cardNumber: 19,
    event: 4,
    time: 135,
    name: 'D.Daniels',
  },
]

const realEvents = [{"order":0,"type":"assist","player_name":"Nemanja Bjelica","number":"88","clock":"22:10:57 15.01.2020"},{"order":1,"type":"jump shot","player_name":"Harrison Barnes","number":"40","clock":"22:10:57 15.01.2020"},{"order":2,"type":"turnover","player_name":"Buddy Hield","number":"24","clock":"22:11:34 15.01.2020"},{"order":3,"type":"jump shot","player_name":"De'Aaron Fox","number":"5","clock":"22:11:54 15.01.2020"},{"order":4,"type":"jump shot","player_name":"Nemanja Bjelica","number":"88","clock":"22:12:24 15.01. 2020"},{"order":5,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":"22:12:41 15.01.2020"},{"order":6,"type":"rebound","player_name":"Nemanja Bjelica","number ":"88","clock":"22:12:57 15.01.2020"},{"order":7,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":"22:13:13 15.01.2020"},{"order":8,"type":"steal","player_na me":"Harrison Barnes","number":"40","clock":"22:13:45 15.01.2020"},{"order":9,"type":"assist","player_name":"De'Aaron Fox","number":"5","clock":"22:13:52 15.01.2020"},{"order":10,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":"22:13:52 15.01.2020"},{"order":11,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":"22:14:07 15.01.2020"},{"order":12,"type":"assist","player_name":"De'Aaron Fox","number":"5","clock":"22:14:14 15.01.2020"},{"order":13,"type":"dunk","player_name":"Marvin Bagle y III","number":"35","clock":"22:14:14 15.01.2020"},{"order":14,"type":"turnover","player_name":"Buddy Hield","number":"24","clock":"22:14:44 15.01.2020"},{"order":15,"type":"ju mp shot","player_name":"Harrison Barnes","number":"40","clock":"22:15:06 15.01.2020"},{"order":16,"type":"layup","player_name":"De'Aaron Fox","number":"5","clock":"22:15:31 15.0 1.2020"},{"order":17,"type":"rebound","player_name":"De'Aaron Fox","number":"5","clock":"22:15:56 15.01.2020"},{"order":18,"type":"jump shot","player_name":"Buddy Hield","number ":"24","clock":"22:16:31 15.01.2020"},{"order":19,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":"22:16:35 15.01.2020"},{"order":20,"type":"layup","playe r_name":"Nemanja Bjelica","number":"88","clock":"22:16:35 15.01.2020"},{"order":21,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":"22:16:36 15.01.2020"},{"order":22,"type":"layup","player_name":"Nemanja Bjelica","number":"88","clock":"22:16:36 15.01.2020"},{"order":23,"type":"rebound","player_name":"De'Aaron Fox","number":"5","clock":"22:16:37 15.01.2020"},{"order":24,"type":"assist","player_name":"De'Aaron Fox","number":"5","clock":"22:16:40 15.01.2020"},{"order":25,"type":"layup","player_name":"Harri son Barnes","number":"40","clock":"22:16:40 15.01.2020"},{"order":26,"type":"dunk","player_name":"Marvin Bagley III","number":"35","clock":"22:20:39 15.01.2020"},{"order":27,"ty pe":"steal","player_name":"De'Aaron Fox","number":"5","clock":"22:20:54 15.01.2020"},{"order":28,"type":"assist","player_name":"Nemanja Bjelica","number":"88","clock":"22:21:00 15.01.2020"},{"order":29,"type":"layup","player_name":"Buddy Hield","number":"24","clock":"22:21:00 15.01.2020"},{"order":30,"type":"fouldrawn","player_name":"De'Aaron Fox","number":"5","clock":"22:21:27 15.01.2020"},{"order":31,"type":"freethrow","player_name":"De'Aaron Fox","number":"5","clock":"22:21:54 15.01.2020"},{"order":32,"type":"freethrow","player_name":"De'Aaron Fox","number":"5","clock":"22:21:54 15.01.2020"},{"order":33,"type":"jump shot","player_name":"Nemanja Bjelica","number":"88","clock":"22:22:43 15.01.2020"},{"order":34,"type":"layup","player_name":"Buddy Hield","number":"24","clock":"22:23:01 15.01.2020"},{"order":35,"type":"personalfoul","player_name":"Harry Giles III","number":"20","clock":"22:23:25 15.01.2020"},{"order":36,"type":"personalfoul","player_name":"De'Aaron Fox","number":"5","clock":"22:23:50 15.01.2020"},{"order":37,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":"22:24:21 15.01.2020"},{"order":38,"type":"jump shot","player_name":"De'Aaron Fox","number":"5","clock":"22:24:56 15.01.2020"},{"order":39,"type":"rebound","player_name":"Harry Giles III","number":"20","clock":"22:25:13 15.01.2020"},{"order":40,"type":"layup","player_name":"Buddy Hield","number":"24","clock":"22:25:18 15.01.2020"},{"order":41,"type":"steal","player_name":"Nemanja Bjelica","number":"88","clock":"22:25:27 15.01.2020"},{"order":42,"type":"fouldrawn","player_name":"De'Aaron Fox","number":"5","clock":"22:25:33 15.01.2020"},{"order":43,"type":"jump shot","player_name":"Trevor Ariza","number":"0","clock":"22:28:59 15.01.2020"},{"order":44,"type":"rebound","player_name":"Nemanja Bjelica","number":"88","clock":"22:29:04 15.01.2020"},{"order":45,"type":"layup","player_name":"Nemanja Bjelica","number":"88","clock":"22:29:04 15.01.2020"},{"order":46,"type":"jump shot","player_name":"Cory Joseph","number":"9","clock":"22:29:39 15.01.2020"},{"order":47,"type":"jump shot","player_name":"Cory Joseph","number":"9","clock":"22:30:26 15.01.2020"},{"order":48,"type":"rebound","player_name":"Cory Joseph","number":"9","clock":"22:30:28 15.01.2020"},{"order":49,"type":"jump shot","player_name":"Cory Joseph","number":"9","clock":"22:30:29 15.01.2020"},{"order":50,"type":"layup","player_name":"Harrison Barnes","number":"40","clock":"22:30:58 15.01.2020"},{"order":51,"type":"assist","player_name":"Cory Joseph","number":"9","clock":"22:30:58 15.01.2020"},{"order":52,"type":"fouldrawn","player_name":"Harrison Barnes","number":"40","clock":"22:31:01 15.01.2020"},{"order":53,"type":"freethrow","player_name":"Harrison Barnes","number":"40","clock":"22:31:27 15.01.2020"},{"order":54,"type":"assist","player_name":"Buddy Hield","number":"24","clock":"22:32:00 15.01.2020"},{"order":55,"type":"jump shot","player_name":"Harry Giles III","number":"20","clock":"22:32:00 15.01.2020"},{"order":56,"type":"rebound","player_name":"Harry Giles III","number":"20","clock":"22:32:50 15.01.2020"},{"order":57,"type":"jump shot","player_name":"Buddy Hield","number":"24","clock":"22:32:55 15.01.2020"}]

const generateRandomNumber = maxRange => {
  return Math.floor(Math.random() * maxRange) + 1
}

const generateRandomBingo = () => {
  let startPoint
  const generatedCard = []
  const rawType = generateRandomNumber(3)

  switch (rawType) {
    // horisontal
    case 1:
      startPoint = generateRandomNumber(5)
      for (let index = 0; index < 5; index++) {
        generatedCard.push({
          cardId: index === 0 ? startPoint : startPoint + (5 * index),
          letter: 'BINGO'[index]
        })
      }

      break;
    // vertical
    case 2:
      startPoint = generateRandomNumber(4)
      startPoint = startPoint * 5
      for (let index = 0; index < 5; index++) {
        generatedCard.push({
          cardId: index === 0 ? startPoint : startPoint + index,
          letter: 'BINGO'[index]
        })
      }

      break;
    // x type
    case 3:
      startPoint = generateRandomNumber(2) === 1 ? 0 : 4
      const step = startPoint === 0 ? 6 : 4
      for (let index = 0; index < 5; index++) {
        generatedCard.push({
          cardId: index === 0 ? startPoint : startPoint + (index * step),
          letter: 'BINGO'[index]
        })
      }

      break;
    default:
      break;
  }

  return generatedCard
}

const generateRandomEvents = () => {
  const selectedEvents = []
  const events = realEvents
  const eventsLength = events.length

  for (let index = 0; index < 25; index++) {
    let randomEventPosition

    do {
      // generate unique and random number
      randomEventPosition = generateRandomNumber(eventsLength - index)
    } while (typeof events[randomEventPosition] === 'undefined')

    // get element by generated order
    const selectedElement = events[randomEventPosition]

    // remove that element from events
    events.splice(randomEventPosition, 1)

    // change element index
    selectedElement.order = index

    // push element to final array
    selectedEvents.push(selectedElement)
  }

  return selectedEvents
}

const events = generateRandomEvents()
const bingoCards = generateRandomBingo()

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 1,
      slideOpen: false,
      helpModalOpen: false,
      finalModalOpen: false,
      cards: [...allEvents],
      occuredEvents: [],
      bingoEvents: [],
      bingoStatus: 'loading',
      tileDetail: {}
    }
  }

  componentDidMount() {
    this.counter = 0
    this.allEvents = sortBy(allEvents, (o) => o.time )
    setTimeout(() => this.setState({ status: 2 }), 3000)
    setTimeout(() => { this.setState({ status: 3 }); this.bingoStart(); }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.clr)
  }

  bingoStart = () => {
    const that = this
    this.setState({ bingoStatus: 'started' })
    this.clr = setInterval(function () {
      that.counter++
      that.allEvents.forEach(e => {
        if (e.time === that.counter) {
          let occuredEvents = clone(that.state.occuredEvents)
          occuredEvents.push(e)
          that.setState({ occuredEvents, tileDetail: {} })
          let bEvent = bingoCards.filter(b => b.cardId === e.cardId)
          if (bEvent.length !== 0) {
            let bingoEvents = clone(that.state.bingoEvents)
            bingoEvents.push(bEvent[0])
            that.setState({ bingoEvents })
          }
        }
      })
    }, 1000)
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

  render() {
    const {
      status,
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
            { status === 3 && <MarkPanel type="started" /> }
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
                          <span className="number">{c.cardNumber}</span>
                          <span className="action">{eventNames[c.event - 1]}</span>
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
                        ? `${lastOccuredEvent.cardNumber}  ${lastOccuredEvent.name} - ${eventNames[lastOccuredEvent.event-1]}`
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
                                  <span className="number">{c.cardNumber}</span>
                                  <span className="action">{eventNames[c.event - 1]}</span>
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
                                <div className="time">10:00</div>
                                <div>
                                  <div className="name bold">{e.cardNumber} <span style={{color: '#BABABA'}}>- {e.name}</span></div>
                                  <div className="event-name bold">{eventNames[e.event-1]}</div>
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
                              <div className="time">10:00</div>
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
                        <div className="name bold">{tileDetail.cardNumber} {tileDetail.name}</div>
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
