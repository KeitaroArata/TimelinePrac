import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timeline.css';

function Tweet (props){
    return(
        <div className="text">
          {props.text}
        </div>
    )
}

function UserName (props){
    return(
        <div className="name">
          {props.userName}
        </div>
    ) 
}

class Timeline extends React.Component {
  render() {
    console.log("aaaaaa" + this.props.timeline);
    let tweets = [];
    for (let i = 0; i < this.props.timeline.length; i++ ) {
      tweets.push(
        <body>
        <div className = "tweet">
          <img className="imgicon" src="" alt=""></img>
          <div className="infomation">
          <UserName userName = { this.props.timeline[i].userName }/>
          </div>
          {/* <div className="text"> */}
          <Tweet text = { this.props.timeline[i].text }/>
          {/* </div> */}
            <div className="action">
              <p className="star">星</p>
              <p className="retweet">リツイート</p>
            </div>
        </div>
        </body>

/* <div class="tweet">
<img class="imgicon" src="" alt="">
<div class="infomation">
  <p class="name">NAME</p>
  <p class="fullname">@ name</p>
</div>
<div class="text">
  <p>aaaaaaaaaaaaaaaaaaaaaa</p>
</div>
  <div class="action">
    <p class="star">星</p>
    <p class="retweet">リツイート</p>
  </div>
</div>

        //  <p>
        //   <UserName userName = { this.props.timeline[i].userName }/>
        //   <Tweet text = { this.props.timeline[i].text }/>
        // </p>
        // </div> */
      )
    }
    return (
      
       <p> {tweets}</p>
      
    )
  }
}

// Timeline.propTypes = {
// timeline: PropTypes.array.isRequired
// };

export default Timeline;