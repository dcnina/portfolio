import React, { Component } from 'react';
import Line from '../components/Line';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Line/>
        <img className="about-image" src={require("../assets/formes.svg")}/>
        <div className="about-description">
            <p className="about-description-hello">Hello !</p>
            <p className="about-description-text">Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti.Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine.</p>
            <p className="about-description-mail">Contact me : dcninaa@gmail.com</p>
        </div>
        <div className="about-icons">
            <img className="about-icons-image" src={require("../assets/instagram-logo.png")}/>
            <img className="about-icons-image" src={require("../assets/github-logo.png")}/>
            <img className="about-icons-image" src={require("../assets/linkedin.png")}/>
            <img className="about-icons-image" src={require("../assets/cv.svg")}/>
        </div>
      </div>
    );
  }
}

export default About;
