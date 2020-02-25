import React, {useEffect} from "react";
import {useParams} from "react-router";
import ProjectBlock from "../components/ProjectBlock";
import ScrollToTop from "../components/ScrollToTop";

const Project = props => {
    let { name } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
        <ScrollToTop/>
        <ProjectBlock name={name} id={props.location.id}/>
        </div>
    );
  }

export default Project;

