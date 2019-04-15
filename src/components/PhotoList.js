import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import photoData from "../datas/photodata";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };

    this.prevCategory = this.prevCategory.bind(this);
    this.nextCategory = this.nextCategory.bind(this);
  }

  prevCategory() {
    if (this.state.id > 0) {
      this.setState({
        id: this.state.id - 1
      });
    } 
  }
  
  nextCategory() {
    if (this.state.id < photoData.length - 1) {
      this.setState({
        id: this.state.id + 1
      });
    }
  }

  render() {
    return (
      <div className="photoList">
        <h1 className="photoList-title">{photoData[this.state.id].title}</h1>
        <HorizontalScroll>
          {/* <div className="photoList-square" /> */}
          {/* <img src="" className="photoList-square"/> */}
          {photoData[this.state.id].img.map((elm, key) => (
            <img
              key={key}
              alt={elm}
              className="photoList-square"
              src={require(`../assets/${elm}.JPG`)}
            />
          ))}
        </HorizontalScroll>
        <div className="photoList-controls">
          <div onClick={this.prevCategory} className="photoList-controls-item photoList-controls-item--prev">prev</div>
          <div onClick={this.nextCategory} className="photoList-controls-item photoList-controls-item--next">next</div>
        </div>
      </div>
    );
  }
}

export default PhotoList;
