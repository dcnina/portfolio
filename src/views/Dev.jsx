import React, { Component } from "react";
import Line from "../components/Line";
import DevBlockProject from "../components/DevBlockProject";

import devData from "../datas/devdata";

class Dev extends Component {
  render() {
    return (
      <div className="dev">
        <Line />
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
      </div>
    );
  }
}

export default Dev;
