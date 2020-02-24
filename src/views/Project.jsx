import React from "react";
import {useParams} from "react-router";
import ProjectBlock from "../components/ProjectBlock";

function Project() {
    let { id } = useParams();
    
    return (
        <ProjectBlock id={id}/>
    );
  }

export default Project;