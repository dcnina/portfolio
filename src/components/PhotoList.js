import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

class PhotoList extends Component {
  render() {
    return (
      <div className="photoList">
        <h1 className="photoList-title">category</h1>
        <HorizontalScroll>
          <div className="photoList-square"></div>
          <div className="photoList-square"></div>
          <div className="photoList-square"></div>
          <div className="photoList-square"></div>
        </HorizontalScroll>
      </div>
    );
  }
}

export default PhotoList;
