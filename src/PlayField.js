import React from 'react';
import './PlayField.css';
import ControlBar from './ControlBar.js'
import DeckContainer from './DeckContainer.js'
import BetBar from './BetBar.js'

class PlayField extends React.Component {

  handleKey = event => {
    document.getElementById("playField").textContent = 'KeyCode of Key Press: ' + event.keyCode;
  }
  
  render() {
    return (
      <div id="playField" tabIndex="0" onKeyDown={this.handleKey}>
        <ControlBar />
        <DeckContainer />
        <BetBar />
      </div>
    );
  }
};

export default PlayField;