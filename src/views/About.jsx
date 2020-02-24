import React, { Component } from "react";
import Line from "../components/Line";
import Footer from "../components/Footer";

class About extends Component {

  // getTopElement = () => {
  //   var object = document.getElementsByClassName('about-text-hello'); 
  //   var rect = object.getBoundingClientRect();
  //   console.log("coucou" + rect + "   "+ rect.left);
    
  //   return <div className="line-horizon" />
  // }

  render() {
    return (
      
      <div className="about">
        <div className="about-text">
          <div className="line">
            <p className="about-text-hello" id="hello">Hello!</p>
            <div className="line-horizon" />
          </div>
          <p className="about-text-description">I'm Nina, I'm a Digital Media master student in Bremen, for exchange semester. I'm currently studying in the multimedia engineering school, IMAC, in Paris. I love experiment with images and sounds, in all of its forms: music composition, video, sounds design, photography and graphic design.</p>
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