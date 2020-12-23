import React, { Component } from "react";
import Line from "../components/Line";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class About extends Component {
  render() {
    return (
      
      <div className="about">
        <div className="about-text">
          <div className="line">
            <p className="about-text-hello" id="hello">Hello!</p>
            <div className="line-horizon" />
          </div>
          <p className="about-text-description">I'm Nina, I'm a freelance artist · editor. graphist. motion designer. photographer, near to Paris.<br></br><br></br>Recently graduated from the multimedia engineering school<a className="a-color" target="_blank" rel="noopener noreferrer" href="https://www.ingenieur-imac.fr"> IMAC</a>, after one exchange semester in the <a className="a-color" target="_blank" rel="noopener noreferrer" href="http://digitalmedia-bremen.de">Digital Media Master</a> in Bremen. I love experiment with images and sounds, in all of its forms: video, photography, music composition, sounds design, and graphic design.</p>
          <p className="about-text-stage">I'm currently available for all type of projects, just contact me ! </p>
          <Link to="/DeCastro-Nina-CV-english.pdf" target="_blank" rel="noopener noreferrer" download><p className="about-text-resume">-------- Download my resume</p></Link>
          <div className="about-text-link">
            <a href="mailto: dcninaa@gmail.com"><p className="about-text-link-mail">mail</p></a>
            <a href="https://www.linkedin.com/in/nina-de-castro-299626181/" target="_blank" rel="noopener noreferrer"><p className="about-text-link-linkedin">linkedin</p></a>
            <a href="https://www.instagram.com/_ninadecastro/" target="_blank" rel="noopener noreferrer"><p className="about-text-link-insta">instagram</p></a>
            <a href="https://vimeo.com/ninadecastro" target="_blank" rel="noopener noreferrer"><p className="about-text-link-sound">vimeo</p></a>
            <a href="https://www.youtube.com/channel/UCZNQCKCmhNEq3WfuEwnsnug?view_as=subscriber" target="_blank" rel="noopener noreferrer"><p className="about-text-link-yt">youtube</p></a>
            <a href="https://soundcloud.com/ninadecastro" target="_blank" rel="noopener noreferrer"><p className="about-text-link-sound">soundcloud</p></a>
            <a href="https://github.com/dcnina" target="_blank" rel="noopener noreferrer"><p className="about-text-link-git">github</p></a>
          </div>
        </div>
        <Line/>
        <Footer/>
      </div>
    );
  }
}

export default About;
