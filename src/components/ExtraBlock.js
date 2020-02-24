import React, { Component } from "react";
import projectsdata from "../datas/projectsdata";

const ExtraBlock = props => (
    <div class="project-container" style={{height:'100vh'}}>
    <div className="project-content-extra">
        {projectsdata[props.id].extraContent.map((elm,key) => (
            <div className={"project-content-extra-element-"+key} dangerouslySetInnerHTML={{ __html: elm }} />
        ))}
    </div>
    </div>
);

export default ExtraBlock;