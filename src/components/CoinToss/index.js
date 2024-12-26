import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    head: 0,
    tails: 0,
    total: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  random = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        head: prevState.head + 1,
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }
  render() {
    const {imgUrl, head, tails, total} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div className="img-con">
            <img src={imgUrl} className="img" alt="toss result" />
          </div>
          <button className="btn" onClick={this.random}>
            Toss Coin
          </button>
          <div className="scores">
            <p className="score">Total:{total}</p>
            <p className="score">Heads:{head}</p>
            <p className="score">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
