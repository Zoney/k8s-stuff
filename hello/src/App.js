import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  fetch('http://localhost:31001/WeatherForecast')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setWeather(data[0].summary);
    console.log(weather);
    console.log(data[0].summary);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather: {weather}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
