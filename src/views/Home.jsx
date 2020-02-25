import React, { Component } from "react";
import Line from "../components/Line";
import Footer from "../components/Footer";
import WorkBlock from "../components/WorkBlock";
import homedata from "../datas/homedata";

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }


  render() {
    return (
      <div className="home">
        <div className="home-works">
          <div className="home-works-content">
            {homedata.map((elm, key) => (
              <WorkBlock
                key={key}
                id={elm.id}
                name={elm.name}
                title={elm.title}
                category={elm.category}
                img={elm.img}
              />
            ))}
          </div>
        </div>
        <div className="home-more">
          <div>
            <div>
                <div className="home-more-line">
                  <p className="home-more-title">more</p>
                  <div className="home-more-line-horizon" />
                </div>
            </div>
            <div className="home-more-tab">
              <div className="home-more-tab-music">
                <p className="home-more-tab-title">music</p>
                <a href="https://soundcloud.com/ninadecastro/expose" target="_blank"><p>Exposé</p></a>
                <a href="https://soundcloud.com/ninadecastro/neige" target="_blank"><p>Neige</p></a>
              </div>
              <div className="home-more-tab-films">
                <p className="home-more-tab-title">films</p>
                <a href="https://youtu.be/q77jG6srjuM" target="_blank"><p>Micro complice</p></a>
                <a href="https://youtu.be/zMBlH4rEEX0" target="_blank"><p>Metronorme</p></a>
              </div>
              <div className="home-more-tab-music">
                <p className="home-more-tab-title">animation</p>
                <a href="https://youtu.be/M40_LMUQ2OQ" target="_blank"><p>The dog the futur</p></a>
                <a href="https://youtu.be/bbc4k0ZFsPQ" target="_blank"><p>Ghost song</p></a>
              </div>
              <div className="home-more-tab-music">
                <p className="home-more-tab-title">web/design</p>
                <a href="https://dcnina.github.io/listentotheweather/" target="_blank"><p>Listen to the weather</p></a>
                <a href="https://projet-alt-13.netlify.com/" target="_blank"><p>alt-13</p></a>
              </div>
            </div>
          </div>
        </div>
        <Line/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
