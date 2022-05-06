import React from 'react';
import './App.css';
import AchievementsComponent from './Components/Achievements';
import Bottom from './Components/Bottom';
import SecondInfoComponent from './Components/Education';
import MainInfoComponent from './Components/Information';
import TimelineComponent from './Components/Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Marcelo Pérez Jodal
        </p>

      </header>
      <div className='App-body'>
        <MainInfoComponent />
        <SecondInfoComponent />
        <TimelineComponent />
        <AchievementsComponent />

      </div>
      <Bottom />
    </div>
  );
}

export default App;
