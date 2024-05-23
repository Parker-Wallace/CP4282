import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from "react";
import WeatherList from './WeatherList'
import localweatherstjohns from './StJohnsWeather.json'
import localweatherottowa from './OttawaWeather.json'

function App() {
  // const [nameofstate, function that sets state] = useState(initialstate);
  const [weather, setWeatherLocation] = useState(localweatherstjohns);
  return (
    <div className="App">
      <h2>Parker's Weather</h2>
      <button onClick={()=>{weather === localweatherottowa ? setWeatherLocation(localweatherstjohns) : setWeatherLocation(localweatherottowa)}}>hellow</button>
      <WeatherList localweather={weather}></WeatherList>
    </div>
  );
}

export default App;
