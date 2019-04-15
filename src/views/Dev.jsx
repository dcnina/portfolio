import React, { Component } from "react";
import DevBlockProject from "../components/DevBlockProject";

import devData from "../datas/devdata";

class Dev extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="dev">
        <div className="dev-blocks">
          {devData.map((elm, key) => (
            <DevBlockProject
              key={key}
              nb={key}
              title={elm.title}
              imgs={elm.img}
              description={elm.description}
              links={elm.links}
              category={elm.category}
            />
          ))}
        </div>
        <div className="dev-line"></div>
      </div>
    );
  }
}

export default Dev;
