import React from "react";

import bgVideo from "../assets/bg-video.jpg";

const VideoBlock = props => (
  <div className="videoBlock">
    {/* <img alt="wesha" src={bgVideo} className="videoBlock-img" /> */}
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.img}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="videoBlock-titles">
      <h2 className="videoBlock-titles-title">{props.title}</h2>
      <p className="videoBlock-titles-desc">{props.description}</p>
    </div>
  </div>
);

export default VideoBlock;
