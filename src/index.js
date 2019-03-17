import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Video from './views/Video';
import Photo from './views/Photo';
import Menu from './components/Menu';

const Root = () => (
    <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/photography' component={Photo}/>
          <Route path='/video' component={Video}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
