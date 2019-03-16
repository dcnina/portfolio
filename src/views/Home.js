import React, { Component } from 'react';
import Line from '../components/Line';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Line/>
        <div className="home-header">
          <div className="home-title">
            <div className="home-title-formes">
              <div className="home-title-formes-1"></div>
              <div className="home-title-formes-2"></div>
              <div className="home-title-formes-3"></div>
            </div>
            <h1 className="home-title-1 title-h1">nina de castro</h1>
            <svg width="797" height="125" viewBox="0 0 797 125" className="home-title-notfill">
              <text x="0" y="120" fill="none" stroke-width="2.5"
                    stroke="#E9C9BB" className="title-h1">nina de castro</text>
            </svg>
            <h3 className="home-title-3 title-h3">creative engineer - photographer</h3>
          </div>
        </div>
        <div className="home-project">
          <div className="home-project-1">
            <img className="home-project-image" src={require("../assets/projet-1.png")}/>
          </div>
          <div className="home-project-2">
            <img className="home-project-image" src={require("../assets/projet-2.png")}/>
          </div>
          <div className="home-project-3">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
