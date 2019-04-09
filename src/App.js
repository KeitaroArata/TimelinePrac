import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from './Timeline.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      timeline: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          今何してる？
          <input type="text" value={ this.state.text }
            onChange={e => {this.setState({text: e.target.value})}}/>
        </p>
        <p>
          {this.state.text}
          <input type="button" value="ツイート" onClick={() => {
            var array = this.state.timeline;
            array.unshift(this.state.text);
            this.setState({timeline: array});
            this.setState({text: ""});
          }} />
        </p>

        <Timeline timeline={this.state.timeline} />
      </div>
    );
  }
}

export default App;