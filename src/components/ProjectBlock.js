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

    getPrevId = () => {
        return (this.props.id > 0) ? parseInt(this.props.id) - 1 : this.props.id;
    }

    getNextId = () => {
        return (this.props.id < projectsdata.length - 1) ? parseInt(this.props.id) + 1 : this.props.id;
    }

    prevCategory = () => {
        var idprev = parseInt(this.props.id) - 1;
        return (this.props.id > 0) ? "/work/" + projectsdata[idprev].name : "/work/"+projectsdata[this.props.id].name
    }

    nextCategory = () => {
        var idnext = parseInt(this.props.id) + 1;
        return (this.props.id < projectsdata.length - 1) ? "/work/" + projectsdata[idnext].name : "/work/"+projectsdata[this.props.id].name
    }

    extraVisibility = () => {
        if (projectsdata[this.props.id].extraBool == 1)
            return <ExtraBlock id={this.props.id}/>
        return null
    }

    render() {
    let data = projectsdata[this.props.id];
    //console.log("PREV: " + this.prevCategory() + "  id: " + this.getPrevId());
    //console.log("NEXT: " + this.nextCategory() + "  id: " + this.getNextId());
        
    return (
        
        <div className="project">
            <ScrollToTop/>
            <div className="project-content">
                <div className="project-content-top">
                    <div className="project-content-header">
                        <div className="project-content-header-maincontent" dangerouslySetInnerHTML={{ __html: data.mainContent }} />    
                        <div className="project-content-line">
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
                <Link to={{
                    pathname: this.prevCategory(),
                    id: this.getPrevId()
                }}>
                    <div className="project-controls-item project-controls-item--prev">prev</div>
                </Link>
                <Link to={{
                    pathname: this.nextCategory(),
                    id: this.getNextId()
                }}>
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