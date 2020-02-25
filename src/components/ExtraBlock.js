import React from "react";
import projectsdata from "../datas/projectsdata";
import ScrollToTop from "../components/ScrollToTop";

const ExtraBlock = props => (
    
    <div class="project-container" style={{height:'100vh'}}>
        <ScrollToTop/>
        <div className="project-content-extra">
            {projectsdata[props.name].extraContent.map((elm,key) => (
                <div className={"project-content-extra-element-"+key} dangerouslySetInnerHTML={{ __html: elm }} />
            ))}
        </div>
    </div>
);

export default ExtraBlock;