import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    };
  }

  fetchAtLocalJson = () => {
    fetch("../timeline.json")
      .then(function (response) {
        return response.json();
      }).then((json) => {
        const timeline = [];
        for (let i = 0; i < json.length; i++) {
          const tweet = {
            text: json[i].text,
            userName: json[i].user.name,
          };

          timeline.push(tweet);
        }
        this.setState({
          timeline,
        });
      });
  }

  componentDidMount() {
    this.fetchAtLocalJson();

    setInterval(() => {
      this.setState({
        timer: 1,
      })
  }, 1000);
  }

  render() {
    if (this.state.timeline.lenght > 0) {
      console.log("aaaaaaaaaaa" + this.state.timeline[0].text)
    }
    return (
      <div className="App">
        <p className="App-intro">
          今何してる？
          {/* <input type="text" value={this.state.text}
            onChange={e => { this.setState({ text: e.target.value }) }}/>  */}

        </p>
        <p>
          {this.state.text}
          <input type="button" value="ツイート" onClick={() => {
            //<Timeline timeline = {this.state.timeline} />
            // <Timeline timeline = {timeline} />
            //var array = this.state.timeline;
            //array.unshift(this.state.text);
            //this.setState({ timeline: array });
            //this.setState({ text: "" });
          }} />
        </p>
        <Timeline timeline={this.state.timeline} />
      </div>
    );
  }
}



export default App;