import React from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'


function App() {
  return (
    <div className="App">
      <div class='App-container'>
        <Header className='App-header' />
        <About />
      </div>
    </div>
  );
}

export default App;
