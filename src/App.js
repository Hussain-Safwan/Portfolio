import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './client/css/index.css'

import Navbar from './components/layout/Navbar'
import MainCanvas from './components/layout/MainCanvas'
import Skills from './components/layout/Skills'
import Projects from './components/layout/Projects'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainCanvas} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
