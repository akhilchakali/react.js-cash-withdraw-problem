// Write your code here
import './index.css'

const DenominationItem = props => {
  const {number, updateBalance} = props
  const {id, value} = number
  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
