import React, { Component } from 'react';
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

  componentDidMount() {
      console.log("コンポーネントのマウント後");
      this.fetchAtLocalJson();
  }

  fetchAtLocalJson = () => {
    const timeline = [];
    console.log("コンポーネントのマウント後")
    fetch("../timeline.json")
      .then(function (response) {
        return response.json();
      }).then((json) => {
        for (var i = 0; i < json.length; i++) {
          console.log(json[i].text);
          timeline.push(json[i].text);
          //<Timeline timeline={timeline} />

        }
      });
  }

  render() {
    const timeline = [];

    return (
      <div className="App">
        <p className="App-intro">
          今何してる？
          <input type="text" value={this.state.text}
            onChange={e => { this.setState({ text: e.target.value }) }} />
        </p>
        <p>
          {this.state.text}
          <input type="button" value="ツイート" onClick={() => {


            var array = this.state.timeline;
            array.unshift(this.state.text);
            this.setState({ timeline: array });
            this.setState({ text: "" });
          }} />
        </p>
        <Timeline timeline={timeline} />
      </div>
    );
  }
}



export default App;