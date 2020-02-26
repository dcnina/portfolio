import React, {useEffect} from "react";
import {useParams} from "react-router";
import ProjectBlock from "../components/ProjectBlock";
import ScrollToTop from "../components/ScrollToTop";

const Project = props => {
    let { name } = useParams();

    return (
        <div>
          <ScrollToTop />
          <ProjectBlock name={name}/>
        </div>
    );
  }

export default Project;

