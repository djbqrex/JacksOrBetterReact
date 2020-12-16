import React from 'react';
import './ControlBar.css';

class ControlBar extends React.Component {

  render() {
    return (
      <div id="controlBar" tabIndex="0" onKeyDown={this.handleKey}>
        ControlBar
      </div>
    );
  }
};

export default ControlBar;