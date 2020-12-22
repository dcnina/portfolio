import React, { Component } from "react";
import Footer from "../components/Footer";
import Line from "../components/Line";
import { Link } from "react-router-dom";
import PhotoList from "../components/PhotoList";
import photodata from "../datas/photodata";

class PhotoBlock extends Component { 
    render() {
        return (
            <div className="photo">
                <div className="photo-content">
                    <div className="photo-content-data">
                        {photodata.map((elm, key) => (
                            <PhotoList 
                                key={key}
                                title={elm.title}
                                photos={elm.photos} 
                            />
                        ))}
                    </div>
                </div>
                <Line/>
                <Footer/>
            </div>
        );
    }
}

export default PhotoBlock;