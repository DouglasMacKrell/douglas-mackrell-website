import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Links from './Components/Links/Links';
import NoMatch from './Components/NoMatch';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'


function App() {
  return (
    <div className="App">
      <div class='App-container'>
        <React.Fragment>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Header} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/links" component={Links} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
