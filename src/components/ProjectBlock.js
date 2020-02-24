import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectsdata from "../datas/projectsdata";
import Footer from "../components/Footer";
import Line from "../components/Line";
import ExtraBlock from "./ExtraBlock";
import ScrollToTop from "./ScrollToTop";

class ProjectBlock extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
      componentDidUpdate() {
        window.scrollTo(0,0);
      }

    prevCategory = () => {
    var idprev = parseInt(this.props.id) - 1;
    var route = "/work/" + idprev;
    return (this.props.id > 0) ? route : "/work/"+this.props.id
    }

    nextCategory = () => {
    var idnext = parseInt(this.props.id) + 1;
    var route = "/work/" + idnext;
    return (this.props.id < projectsdata.length - 1) ? route : "/work/"+this.props.id
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
            <ScrollToTop/>
            <div className="project-content">
                <div className="project-content-top">
                    <div className="project-content-header">
                        <div className="project-content-header-maincontent" dangerouslySetInnerHTML={{ __html: data.mainContent }} />    
                        <div className="line">
                            <p className="project-content-header-title" id="title">{data.title}</p>
                            <div className="project-content-header-line-horizon" />
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