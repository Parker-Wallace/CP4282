import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from "react";
import WeatherList from './WeatherList'
import localweatherstjohns from './StJohnsWeather.json'
import localweatherottowa from './OttawaWeather.json'

function App() {
  // const [nameofstate, function that sets state] = useState(initialstate);
  const [weather, setWeatherLocation] = useState(localweatherstjohns);
  useEffect(() => {
    setInterval(() => {
      setWeatherLocation(weather == localweatherstjohns ? localweatherottowa : localweatherstjohns)
    }, 5000);
  }, []);
  return (
    <div className="App">
      <h2>Parker's Weather</h2>
      <WeatherList localweather={weather}></WeatherList>
    </div>
  );
}

export default App;
