// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="cont">
        <div className="in-cont">
          <div className="heading">
            <p className="profile">S</p>
            <h1>Sarah Williams</h1>
          </div>
          <div className="balance">
            <p>Your Balance</p>
            <div className="money">
              <p>{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(each => (
              <DenominationItem
                number={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
