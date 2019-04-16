import React, { Component } from "react";
import Line from "../components/Line";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Line />
        <img
          alt="formes"
          className="about-image"
          src={require("../assets/formes.svg")}
        />
        <div className="about-description">
          <p className="about-description-hello">Hello !</p>
          <p className="about-description-text">
            I'm Nina, I'm currently studying in the multimedia engineering school, IMAC, in Paris. I love experiment images and sounds, in all these forms: video, photography and graphic design.<br/><br/>I'm currently looking for an internship for 2 months from june 2019.
          </p>
          <p className="about-description-mail">
            Contact me : <a href="mailto: dcninaa@gmail.com">dcninaa@gmail.com</a>
          </p>
        </div>
        <div className="about-icons">
          <a href="https://www.instagram.com/ninaa_dc/">
            <img
              alt="instagram"
              className="about-icons-image"
              src={require("../assets/instagram-logo.png")}
            />
          </a>
          <a href="https://github.com/dcnina">
            <img
              alt="github"
              className="about-icons-image"
              src={require("../assets/github-logo.png")}
            />
          </a>
          <a href="https://www.linkedin.com/in/nina-de-castro-299626181/">
            <img
              alt="linkedin"
              className="about-icons-image"
              src={require("../assets/linkedin.png")}
            />
          </a>
          <a href="">
            <img
              alt="cv"
              className="about-icons-image"
              src={require("../assets/cv.svg")}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
