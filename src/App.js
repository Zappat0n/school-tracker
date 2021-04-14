import React from 'react';
import './App.css';
import Button from './components/Button';
import NavBar from './containers/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="errors" />
      </header>
      <Button />
    </div>
  );
}

export default App;
