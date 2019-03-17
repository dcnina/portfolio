import React from 'react';

import bgVideo from '../assets/bg-video.jpg';

const VideoBlock = props => (
  <div className="videoBlock">
    <img alt="wesha" src={bgVideo} className="videoBlock-img"/>
    <div className="videoBlock-titles">
      <h2 className="videoBlock-titles-title">{props.title}</h2>
      <p className="videoBlock-titles-desc">{props.description}</p>
    </div>
  </div>
);

export default VideoBlock;
