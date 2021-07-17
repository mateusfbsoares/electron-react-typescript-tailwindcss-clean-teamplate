import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';


function render() {
  ReactDOM.render(

    <Router>
        <Route path="/" exact component={Home}></Route>
    </Router>

  , document.body);
}

render();