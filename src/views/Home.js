import React, { Component } from "react";
import Line from "../components/Line";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Line />
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
            <img
              alt="photography"
              className="home-project-image"
              src={require("../assets/projet-1.png")}
            />
            <div className="home-project-text">
              <p className="home-project-1-text-title home-project-text-right">
                naivetés partagées
              </p>
              <p className="home-project-1-text-description">
                Et quoniam inedia gravi adflictabantur, locum petivere Paleas
                nomine.
              </p>
            </div>
            <div className="home-project-1-cat">
              <p className="home-project-1-cat-text">01 - photography</p>
            </div>
          </div>
          <div className="home-project-2">
            <img
              alt="micro-complice"
              className="home-project-image"
              src={require("../assets/projet-2.png")}
            />
            <div className="home-project-text home-project-left">
              <p className="home-project-2-text-title home-project-text-left">
                micro complice
              </p>
              <p className="home-project-2-text-description">
                Et quoniam inedia gravi adflictabantur, locum petivere Paleas
                nomine.
                {/* <a href="https://youtu.be/q77jG6srjuM">https://youtu.be/q77jG6srjuM</a> */}
              </p>
            </div>
            <div className="home-project-2-cat">
              <p className="home-project-2-cat-text"> 02 - video</p>
            </div>
          </div>
          <div className="home-project-3">
            <img
              alt="app-pulp-festival"
              className="home-project-image"
              src={require("../assets/pulp.png")}
            />
            <div className="home-project-text">
              <p className="home-project-3-text-title home-project-text-right">
                pulp festival
              </p>
              <p className="home-project-3-text-description">
                Et quoniam inedia gravi adflictabantur, locum petivere Paleas
                nomine.
              </p>
            </div>
            <div className="home-project-3-cat">
              <p className="home-project-3-cat-text">03 - dev app</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
