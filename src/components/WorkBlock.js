import React from "react";
import { Link } from "react-router-dom";

const WorkBlock = props => (
    
        <div className="workBlock">
            <div className="workBlock-img">
                <Link to={`/${props.name}`}>
                    <img className="workBlock-img-img" alt="work-img" src={require(`../assets/${props.img}.png`)}/>
                </Link>
            </div>
            <div className="workBlock-desc">
                <Link to={`/${props.name}`}>
                    <div className="line">
                        <p className="workBlock-desc-title">{props.title}</p>
                        <div className="workBlock-desc-line-horizon" />
                    </div>
                    <p className="workBlock-desc-cat">{props.category}</p>
                </Link>
            </div>
        </div>
);

export default WorkBlock;