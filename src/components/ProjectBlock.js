import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectsdata from "../datas/projectsdata";
import projectkeys from "../datas/projectkeys";
import Footer from "../components/Footer";
import Line from "../components/Line";
import ExtraBlock from "./ExtraBlock";

class ProjectBlock extends Component { 
    getObjectKeyIndex = (obj, keyToFind) =>{
        var i = 0, key;

        for (key in obj) {
            if (key === keyToFind)
                return i;
            i++;
        }
        return null;
    }

    prevCategory = () => {
        var id = this.getObjectKeyIndex(projectsdata, this.props.name);
        var idprev = parseInt(id) - 1;
        return (id > 0) ? "/"+projectkeys[idprev] : "/"+projectkeys[projectkeys.length - 1]
    }

    nextCategory = () => {
        var id = this.getObjectKeyIndex(projectsdata, this.props.name);
        var idnext = parseInt(id) + 1;
        return (id < projectkeys.length - 1) ? "/"+projectkeys[idnext] : "/"+projectkeys[0]
    }

    extraVisibility = () => {
        if (projectsdata[this.props.name].extraBool === 1)
            return <ExtraBlock name={this.props.name}/>
        return null
    }

    extraArrow = () => {
        if (projectsdata[this.props.name].extraBool === 1)
            return <p className="project-content-arrow">↓</p>
        return null
    }

    getContent = () => {
        var mainContent = projectsdata[this.props.name].mainContent;
        if (projectsdata[this.props.name].catContent === "video")
            return <div className="project-content-header-maincontent" dangerouslySetInnerHTML={{ __html: mainContent }} />
        return <img className="project-content-header-photo" alt="project-img" src={require(`../assets/${mainContent}`)} />
    }

    render() {
    let data = projectsdata[this.props.name];
        
    return (
        
        <div className="project">
            <div className="project-content">
                <div className="project-content-top">
                    <div className="project-content-header">
                        {/* <img alt="np" src={require('../assets/np.png')} /> */}
                        {this.getContent()}   
                        <div className="project-content-line">
                            <p className="project-content-header-title" id="title">{data.title}</p>
                            <div className="project-content-header-line-horizon" />
                        </div>
                    </div>
                    <div className="project-content-infos">
                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        {/* <p className="project-content-infos-desc">{data.description}</p> */}
                        <p className="project-content-infos-skills">{data.skills}</p>
                    </div>
                    {this.extraArrow()}
                </div>
                {this.extraVisibility()}
            </div>
            <div className="project-controls">
                <Link to={this.prevCategory()}>
                    <div className="project-controls-item project-controls-item--prev">prev</div>
                </Link>
                <Link to={this.nextCategory()}>
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