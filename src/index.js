import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.jsx";
import Menu from "./views/Menu.jsx";
import About from "./views/About.jsx";
import Project from "./views/Project.jsx";
import Photo from "./views/Photo.jsx";
import ScrollToTop from "./components/ScrollToTop";


const Root = () => (
  <BrowserRouter >
    <ScrollToTop/>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/photo" component={Photo} />
      <Route path="/:name" component={Project} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
