import React from 'react';
import './ControlBar.css';

class ControlBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isfirstDraw: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === "initDraw") {
      this.props.setfirstDraw();
    }
  }

  render() {
    if (this.props.isfirstDraw === true) {
      return (
        <div id="controlBar" >
          <button id="initDraw" onClick={this.handleClick}>Draw For Jacks [Space]</button>
        </div>
      );
    }
    else 
    {
      return (
        <div id="controlBar" >
          <button id="hold1" onClick={this.handleClick}>Hold [z]</button>
          <button id="hold2" onClick={this.handleClick}>Hold [x]</button>
          <button id="hold3" onClick={this.handleClick}>Hold [c]</button>
          <button id="hold4" onClick={this.handleClick}>Hold [v]</button>
          <button id="hold5" onClick={this.handleClick}>Hold [b]</button>
          <button id="finalDraw" onClick={this.handleClick}>Final Draw [Space]</button>
        </div>
      );
    }
  }
};

export default ControlBar;