import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './client/css/index.css'

import Autocomplete from 'Autocomplete'
import Navbar from './components/layout/Navbar'
import MainCanvas from './components/layout/MainCanvas'
import About from './components/layout/About'
import Skills from './components/layout/Skills'
import Projects from './components/layout/Projects'
import Contact from './components/layout/Contact'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainCanvas} />
          <Route exact path='/about' component={About} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contacts' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
