import React from "react";
// import PreloadImage from "react-preload-image";
// import FastImage from 'react-native-fast-image'

// je t'aime baby
const PhotoList = ({ title, photos }) => (
    <div className="photo-content-data-photoList">
        <div className="photo-content-data-photoList-grid">
            {photos.map((elem, key) => (
                <img className="photo-content-data-photoList-photo" alt="project-img" key={key} src={require(`../assets/photos${elem}`)} />
            ))}
        </div>
        {/* <p>{ title }</p> */}
        <div className="photo-line">
            <p className="photo-content-data-photoList-title">{ title }</p>
            <div className="photo-content-data-photoList-line-horizon" />
        </div>
    </div>
)

export default PhotoList;