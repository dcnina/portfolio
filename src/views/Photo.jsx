import React, {Component} from "react";
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

