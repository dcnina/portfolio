import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Video from './views/Video';
import Photo from './views/Photo';
import Menu from './components/Menu';
import About from './views/About';
import Dev from './views/Dev';

const Root = () => (
    <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/photography' component={Photo}/>
          <Route exact path='/video' component={Video}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/dev' component={Dev}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
