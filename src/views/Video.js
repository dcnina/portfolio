import React, { Component } from 'react';
import VideoBlock from '../components/VideoBlock';
import Line from '../components/Line';

import videoData from '../datas/videodata';

class Video extends Component {
  render() {
    return (
      <div className="video">
        <Line/>
        {videoData.map((elm, key)=>
          <VideoBlock
            key={key}
            title={elm.title}
            description={elm.description}
            img={elm.img}
          />
        )}
      </div>
    );
  }
}

export default Video;
