import React from 'react';
import './DeckContainer.css';

class DeckContainer extends React.Component {

  render() {
    return (
      <div id="deckContainer" tabIndex="0" onKeyDown={this.handleKey}>
        DeckContainer
      </div>
    );
  }
};

export default DeckContainer;