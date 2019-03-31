import React, { Component } from "react";
import Line from "../components/Line";
import PhotoList from "../components/PhotoList";

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <Line />
        <PhotoList />
      </div>
    );
  }
}

export default Photo;
