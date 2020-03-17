import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Awards from './Components/Awards';
import Skills from './Components/Skills';
import Links from './Components/Links';


function App() {
  return (
    <div className="App">
      <div class='App-container'>
        <Header className='App-header' />
        <About />
        <Projects />
        <Awards />
        <Skills />
        <Links />
      </div>
    </div>
  );
}

export default App;
