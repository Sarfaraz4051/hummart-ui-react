import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const About=()=>{
  return(
    <h1>
      About US
    </h1>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/about" component={About}/>
        
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

