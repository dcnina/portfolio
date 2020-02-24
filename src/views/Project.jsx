import React, {useEffect} from "react";
import {useParams} from "react-router";
import ProjectBlock from "../components/ProjectBlock";
import ScrollToTop from "../components/ScrollToTop";

function Project() {
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <ProjectBlock id={id}/>
    );
  }

export default Project;

