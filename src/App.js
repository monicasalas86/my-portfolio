import React from 'react';
import About from './components/About.js';
import Skills from './components/Skills.js';
import './App.css';

const App = () => {
  
  return (
    <main>
      <header>
          <nav>
            <a href='/'>home</a>
            <a href='/about'>about</a>
            <a href='/skills'>skills</a>
          </nav>
      </header>
      <div className='portfolioBody'>
        <div className='intro' path='/'>
          <h1>hey there, i'm monica 👋🏼</h1>
          <p>a full stack web development student at lambda school</p>
        </div>
        <div className='components'>
          <About/>
          <Skills/>
        </div>
      </div>
    </main>
  );
}

export default App;
