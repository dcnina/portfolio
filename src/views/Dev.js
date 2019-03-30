import React, { Component } from 'react';
import Line from '../components/Line';

class Dev extends Component {
  render() {
    return (
      <div className="dev">
        <Line/>
        <div className="dev-project-1">
          <img alt="pulp-image" className="dev-project-1-iphone-1" src={require("../assets/pulp-iphone2.png")}/>
          <div className="dev-project-1-right">
            <p className="dev-project-title">pulp festival app</p>
            <div className="dev-project-1-right-description">
              <img alt="pulp-image" className="dev-project-1-iphone-2" src={require("../assets/pulp-iphone3.png")}/>
              <div className="dev-project-1-right-description-text">
                <p className="dev-project-1-right-text">
                Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti. 
                </p>
                <div className="dev-project-1-right-description-link">
                  <div><a href="https://itunes.apple.com/fr/app/pulp-festival/id1455112407?mt=8"><p>AppStore</p></a>
                  <a href="https://play.google.com/store/apps/details?id=com.lafermedubuisson.pulp.festival"><p>Google Play</p></a></div>
                  <div className="dev-project-1-right-description-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dev-project-2">
          <p className="dev-project-title">listen to the weather</p>
          <div className="dev-project-2-top">
            <p className="dev-project-2-top-text">
              Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti. 
            </p>
            <img alt="listen-to-the-weather-image" className="dev-project-2-top-image" src={require("../assets/listen-accueil.png")}/>
          </div>
          <div className="dev-project-2-bottom">
            <div className="dev-project-2-bottom">
              <img alt="listen-to-the-weather-image" className="dev-project-2-bottom-image" src={require("../assets/listen-neige.png")}/>
              <div className="dev-project-2-bottom-description-link">
                <a href="https://dcnina.github.io/listentotheweather/"><p>Website</p></a>
                <div className="dev-project-2-bottom-description-line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="dev-project-3">
          <div className="dev-project-3-left">
            <img alt="run-in-the-valley-image1" className="dev-project-3-left-image" src={require("../assets/RunInTheValley_1.png")}/>
            <div className="dev-project-3-left-description">
              <div className="dev-project-3-left-description-line"></div>
              <a href="https://github.com/dcnina/RunInTheValley"><p>Github</p></a>
            </div>
          </div>
          <div className="dev-project-3-right">
            <p className="dev-project-title">run in the valley</p>
            <p className="dev-project-2-top-text">
              Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti. 
            </p>
            <div className="dev-project-3-right-images">
              <img alt="run-in-the-valley-image1" className="dev-project-3-right-images-2" src={require("../assets/RunInTheValley_2.png")}/>
              <img alt="run-in-the-valley-image1" className="dev-project-3-right-images-2" src={require("../assets/runinthevalley.png")}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dev;
