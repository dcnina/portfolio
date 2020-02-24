import React from "react";
import { NavLink } from "react-router-dom";

const WorkBlock = props => (
    
        <div className="workBlock">
            <div className="workBlock-img">
                <NavLink to={`work/${props.id}`}>
                    <img className="workBlock-img-img" alt="work-img" src={require(`../assets/${props.img}.png`)}/>
                </NavLink>
            </div>
            <div className="workBlock-desc">
                <NavLink to={`project/${props.id}`}>
                    <div className="line">
                        <p className="workBlock-desc-title">{props.title}</p>
                        <div className="workBlock-desc-line-horizon" />
                    </div>
                    <p className="workBlock-desc-cat">{props.category}</p>
                </NavLink>
            </div>
        </div>
);

export default WorkBlock;