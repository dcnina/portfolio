import React, {Component} from "react";
import projectsdata from "../datas/projectsdata";

class ExtraBlock extends Component {
    getContent = (elm, key) => {
        if (projectsdata[this.props.name].catContent === "video")
            return <div className={"project-content-extra-element-"+key} key={key} dangerouslySetInnerHTML={{ __html: elm }} />
        return <img className="project-content-extra-photo" alt="project-img" key={key} src={require(`../assets/${elm}`)} />
    }

    render() {
        return (
            <div className="project-container" style={{height:'100vh'}}>
            <div className="project-content-extra">
                {projectsdata[this.props.name].extraContent.map((elm,key) => (
                    this.getContent(elm, key)
                    // <div className={"project-content-extra-element-"+key} dangerouslySetInnerHTML={{ __html: elm }} />
                ))}
            </div>
        </div>
        );
    }
    
};



export default ExtraBlock;
