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
    console.log(weather);
  }, [weather]);
  return (
    <div className="App">
      <button onClick={()=>{
        if (weather.city == "St Jonn's") {
          setWeatherLocation(localweatherottowa)
        }
        else {
          setWeatherLocation(localweatherstjohns)
        }
      }}>Click Here</button>
      <h2>Parker's Weather</h2>
      <WeatherList localweather={weather}></WeatherList>
    </div>
  );
}

export default App;
