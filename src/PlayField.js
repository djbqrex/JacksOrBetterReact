import React from 'react';
import './PlayField.css';
import ControlBar from './ControlBar.js'
import DeckContainer from './DeckContainer.js'
import BetBar from './BetBar.js'

class PlayField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isfirstDraw : true
    }

    this.setfirstDraw = this.setfirstDraw.bind(this)
  }

  handleKey = event => {
    document.getElementById("playField").textContent = 'KeyCode of Key Press: ' + event.keyCode;
  }
  
  setfirstDraw() {
    this.setState({
      isfirstDraw: false
    })
  }

  render() {
    return (
      <div id="playField" tabIndex="0" onKeyDown={this.handleKey}>
        <ControlBar setfirstDraw={this.setfirstDraw} isfirstDraw={this.state.isfirstDraw}/>
        <DeckContainer />
        <BetBar />
      </div>
    );
  }
};

export default PlayField;