import React, { Component } from "react";
import Line from "../components/Line";
import Footer from "../components/Footer";

class About extends Component {
  render() {
    return (
      
      <div className="about">
        <div className="line">
          <div className="line-horizon" />
        </div>
        <div className="about-text">
          <p className="about-text-hello">Hello!</p>
          <p className="about-text-description">I'm Nina, I'm studying in Bremen in Germany, Master Digital media, for exchange semester. I'm currently studying in the multimedia engineering school, IMAC, in Paris. I love experiment with images and sounds, in all of its forms: music composition, video, photography and graphic design.</p>
          <p className="about-text-stage">I'm currently looking for an internship for 4/6 months starting from march 2020.</p>
          <p className="about-text-resume">-------- Download my resume</p>
          <div className="about-text-link">
            <a href="mailto: dcninaa@gmail.com"><p className="about-text-link-mail">mail</p></a>
            <a href="https://www.linkedin.com/in/nina-de-castro-299626181/" target="_blank"><p className="about-text-link-linkedin">linkedin</p></a>
            <a href="https://www.instagram.com/_ninadecastro/" target="_blank"><p className="about-text-link-insta">instagram</p></a>
            <a href="https://soundcloud.com/ninadecastro" target="_blank"><p className="about-text-link-sound">soundcloud</p></a>
            <a href="https://www.youtube.com/channel/UCZNQCKCmhNEq3WfuEwnsnug?view_as=subscriber" target="_blank"><p className="about-text-link-yt">youtube</p></a>
            <a href="https://github.com/dcnina" target="_blank"><p className="about-text-link-git">github</p></a>
          </div>
        </div>
        <Line/>
        <Footer/>
      </div>
    );
  }
}

export default About;
