import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectsdata from "../datas/projectsdata";
import Footer from "../components/Footer";
import Line from "../components/Line";
import ExtraBlock from "./ExtraBlock";

class ProjectBlock extends Component {
    prevCategory = () => {
    var idprev = parseInt(this.props.id) - 1;
    var route = "/project/" + idprev;
    return (this.props.id > 0) ? route : "/project/"+this.props.id
    }

    nextCategory = () => {
    var idnext = parseInt(this.props.id) + 1;
    var route = "/project/" + idnext;
    return (this.props.id < projectsdata.length - 1) ? route : "/project/"+this.props.id
    }

    extraVisibility = () => {
        if (projectsdata[this.props.id].extraBool == 1)
            return <ExtraBlock id={this.props.id}/>
        return null
    }

    render() {
    let data = projectsdata[this.props.id];
        
    return (
        <div className="project">
            
            <div className="project-content">
                <div className="project-content-top">
                    <div className="project-content-header">
                        <div dangerouslySetInnerHTML={{ __html: data.mainContent }} />
                        <p className="project-content-header-title" id="title">{data.title}</p>
                        <div className="line">
                            <div className="line-project" />
                        </div>
                    </div>
                    <div className="project-content-infos">
                        <p className="project-content-infos-desc">{data.description}</p>
                        <p className="project-content-infos-skills">{data.skills}</p>
                    </div>
                </div>
                {this.extraVisibility()}
            </div>
            <div className="project-controls">
                <Link to={this.prevCategory}>
                    <div className="project-controls-item project-controls-item--prev">prev</div>
                </Link>
                <Link to={this.nextCategory}>
                    <div className="project-controls-item project-controls-item--next">next</div>
                </Link>
            </div>
            <Line/>
            <Footer/>
        </div>
    );
    }
}

export default ProjectBlock;