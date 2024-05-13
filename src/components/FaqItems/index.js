import {Component} from 'react'
import './index.css'

class FaqItems extends Component {
  render() {
    const {answers} = this.props
    const {answerText} = answers
    return (
      <>
        <hr />
        <p className="answers">{answerText}</p>
      </>
    )
  }
}

export default FaqItems
