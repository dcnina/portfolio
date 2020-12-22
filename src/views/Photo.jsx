import React, {Component} from "react";
import {useParams} from "react-router";
import PhotoBlock from "../components/PhotoBlock";
import ScrollToTop from "../components/ScrollToTop";

class Photo extends Component {
  render() {
    return (
        <div>
          <ScrollToTop />
          <PhotoBlock/> 
        </div>
    );
  }
}

export default Photo;

