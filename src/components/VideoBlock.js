import React from "react";

import bgVideo from "../assets/bg-video.jpg";

const VideoBlock = props => (
  <div className="videoBlock">
    <iframe class="videoBlock-video" width="560" height="315" src={`https://www.youtube.com/embed/${props.img}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <div className="videoBlock-titles">
      <h2 className="videoBlock-titles-title">{props.title}</h2>
      <p className="videoBlock-titles-desc">{props.description}</p>
    </div>
  </div>
);

export default VideoBlock;
