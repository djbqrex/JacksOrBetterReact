import React from 'react';
import './ControlBar.css';

class ControlBar extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === "initDraw" || e.target.id === "finalDraw") {
      this.props.togglefirstDraw();
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
          <button id="hold1" onClick={this.handleClick}>Hold Card 1 [z]</button>
          <button id="hold2" onClick={this.handleClick}>Hold Card 2 [x]</button>
          <button id="hold3" onClick={this.handleClick}>Hold Card 3 [c]</button>
          <button id="hold4" onClick={this.handleClick}>Hold Card 4 [v]</button>
          <button id="hold5" onClick={this.handleClick}>Hold Card 5 [b]</button>
          <button id="finalDraw" onClick={this.handleClick}>Final Draw [Space]</button>
        </div>
      );
    }
  }
};

export default ControlBar;