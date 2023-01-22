import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const text = isDarkMode ? 'Light Mode' : 'Dark-Mode'
    return (
      <div className="app-container">
        <div className={`container ${modeClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
