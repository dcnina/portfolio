import React, { Component } from "react";
import VideoBlock from "../components/VideoBlock";
import Line from "../components/Line";

import videoData from "../datas/videodata";

class Video extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="video">
        <div className="video-content">
          {videoData.map((elm, key) => (
            <VideoBlock
              key={key}
              title={elm.title}
              description={elm.description}
              img={elm.img}
            />
          ))}
        </div>
        <div className="dev-line"></div>
      </div>
      
    );
  }
}

export default Video;
