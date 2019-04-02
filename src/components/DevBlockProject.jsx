import React from "react";

const DevBlockProject = ({ nb, title, imgs, description, links, category })=> (
  <div className={`devBlock-${nb} devBlock`}>
    <div className="devBlock-content">
      <img className="devBlock-content-img" alt={imgs[0]} src={require(`../assets/${imgs[0]}.png`)} />
      <div className="devBlock-content-right">
        <h2 className="devBlock-content-right-title">{title}</h2>
        <div className="devBlock-content-category">
          <h2 className="devBlock-content-category-text">0{nb + 1} - <span>{category}</span></h2>
        </div>
        <div className="devBlock-content-right-info">
          <div className="devBlock-content-right-info-images">
            {imgs.map((img, key) => (
              <img alt={key} src={require(`../assets/${img}.png`)} />
            ))}
          </div>
          <div className="devBlock-content-right-info-text">
            <p className="devBlock-content-right-info-text-desc">{description}</p>
            <div className="devBlock-content-right-info-text-links">
              <div className="devBlock-content-right-info-text-links-items">
                {links.map((link, key) => (
                  <a href={link.link} rel="noopener noreferrer" target="_blank">{link.name}</a>
                ))}
              </div>
              <div className="devBlock-content-right-info-text-links-line"></div>
            </div>
          </div>
  </div>
      </div>
    </div>
  </div>
);

export default DevBlockProject;
