// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {isStarted: false, timeInMin: 0, timeInSec: 0}

  getElapsedTime = () => {
    const {timeInMin, timeInSec} = this.state
    const min = timeInMin < 10 ? `0${timeInMin}` : timeInMin
    const sec = timeInSec < 10 ? `0${timeInSec}` : timeInSec
    return `${min}:${sec}`
  }

  startTimer = () => {
    this.uniqueId = setInterval(this.settingTimeInterval, 1000)
  }

  resetTimer = () => {
    clearInterval(this.uniqueId)
    this.setState({isStarted: false, timeInMin: 0, timeInSec: 0})
  }

  settingTimeInterval = () => {
    const {isStarted, timeInMin, timeInSec} = this.state

    if (timeInSec > 59) {
      this.setState(prev => ({timeInMin: prev.timeInMin + 1, timeInSec: 0}))
    }
    this.setState(prev => ({timeInSec: prev.timeInSec + 1, isStarted: true}))
  }

  stopTimer = () => {
    clearInterval(this.uniqueId)
    this.setState(prev => ({
      isStarted: false,
      timeInMin: prev.timeInMin,
      timeInSec: prev.timeInSec,
    }))
  }

  componentWillUnmount = () => {
    clearInterval(this.uniqueId)
  }

  render() {
    return (
      <div className="bg-container">
        <div className="timer-card">
          <h1 className="heading">Stopwatch</h1>
          <div className="display-time">
            <div className="card-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time">{this.getElapsedTime()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
