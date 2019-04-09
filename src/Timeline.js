import React, { Component } from 'react';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: props.timeline,
      name: props.name,
    }
  }

  render() {
    let tweets = [];

    for (let i in this.state.timeline) {
      tweets.push(<li>{this.state.timeline[i]}</li>)
    }

    return <ul>{tweets}</ul>
  }
}

export default Timeline;