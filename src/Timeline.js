import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Tweet (props){
    return(
        <div class="tweet">
            <p>{props}</p>
        </div>
    ) 
}

function UserName (props){
    return(
        <div class="name">
            <p>{props}</p>
        </div>
    ) 
}

class Timeline extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        timeline: props.timeline
    }
  }

  render() {
      console.log(this.props.timeline);
    let tweets = ["a", "b"];
   // console.log("タイムラインの情報：　" + this.state.timeline[0].userName);
   if(this.props.timeline.length > 2){
    for (let i in this.props.timeline.length) {
        console.log("aaaaaa" + this.props.timeline)
      tweets.push(
         <li>
          <Tweet tweet = { this.props.timeline[i].text }/>
          <UserName userName = { this.props.timeline[i].userName }/>
        </li>
      )
    }
}
    return <ul>{tweets}</ul>
  }
}

Timeline.propTypes = {
timeline: PropTypes.array.isRequired
};

export default Timeline;