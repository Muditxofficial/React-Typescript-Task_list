import React, { FC } from 'react';
import './App.css';
import Header from './components/Header' 
const App: FC = () => {
  return (
    <div className="App">
      <Header title='task List App' subtitle='create some task'/>
    </div>
  );
}

export default App;
