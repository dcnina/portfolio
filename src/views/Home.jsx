import React, { Component } from "react";
import Line from "../components/Line";
import { NavLink } from "react-router-dom";

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home">
      <div className="home-content">
        <div className="home-header">
          <div className="home-title">
            <div className="home-title-formes">
              <div className="home-title-formes-1" />
              <div className="home-title-formes-2" />
              <div className="home-title-formes-3" />
            </div>
            <h1 className="home-title-1 title-h1">nina de castro</h1>
            <svg
              width="797"
              height="125"
              viewBox="0 0 797 125"
              className="home-title-notfill"
            >
              <text
                x="0"
                y="120"
                fill="none"
                stroke-width="2.5"
                stroke="#E9C9BB"
                className="title-h1"
              >
                nina de castro
              </text>
            </svg>
            <h3 className="home-title-3 title-h3">
              creative engineer - photographer
            </h3>
          </div>
        </div>
        <div className="home-project">
          <div className="home-project-1">
          <div className="home-project-content">
            <NavLink to="/photography"><img alt="photography" className="home-project-image" src={require("../assets/projet-1.png")}/></NavLink>
            <div className="home-project-text">
              <p className="home-project-1-text-title home-project-text-right">naivetés partagées</p>
              <p className="home-project-1-text-description">Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine.</p>
            </div>
            </div>
            <div className="devBlock-content-category">
              <h2 className="devBlock-content-category-text">02 - <span>video</span></h2>
            </div>
          </div>
          <div className="home-project-2">

          <div className="home-project-content">
          <NavLink to="/video"><img alt="micro-complice" className="home-project-image" src={require("../assets/projet-2.png")}/></NavLink>
            <div className="home-project-text home-project-left">
              <p className="home-project-2-text-title home-project-text-left">micro complice</p>
              <div className="home-project-2-text-description"><p>
              Short film directed in 48h during a week-end organized by 803Z and De l’autre Côté with the theme «Magic».
              </p></div>
            </div>
            </div>
            <div className="devBlock-content-category">
              <h2 className="devBlock-content-category-text">02 - <span>video</span></h2>
            </div>
          </div>
          <div className="home-project-3">
            <div className="home-project-content">
            <NavLink to="/dev"><img alt="app-pulp-festival" className="home-project-image" src={require("../assets/pulp.png")}/></NavLink>
            <div className="home-project-text">
              <p className="home-project-3-text-title home-project-text-right">pulp festival</p>
              <div className="home-project-3-text-description"><p>
                Application developped for the strip cartoon festival of La Ferme du Buisson, PULP Festival.
              </p></div>
            </div>
            </div>
            <div className="devBlock-content-category">
              <h2 className="devBlock-content-category-text">02 - <span>video</span></h2>
            </div>
          </div>
        </div>
        </div>
        <div className="dev-line"></div>
      </div>
    );
  }
}

export default Home;
