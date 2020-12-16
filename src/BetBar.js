import React from 'react';
import './BetBar.css';

class BetBar extends React.Component {

  render() {
    return (
      <div id="betBar" tabIndex="0" onKeyDown={this.handleKey}>
        BetBar
      </div>
    );
  }
};

export default BetBar;