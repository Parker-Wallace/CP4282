// app/page.js
'use client';

import { useState } from 'react';
import WeatherList from '../components/weather';

// Import JSON files
import localweatherstjohns from '../../../public/jsondocs/stjohnsweather.json';
import localweatherottowa from '../../../public/jsondocs/ottawaweather.json';

export default function HomePage() {
  const [weather, setWeatherLocation] = useState(localweatherstjohns);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Parker's Weather</h2>
      <button
        onClick={() =>
          weather === localweatherottowa
            ? setWeatherLocation(localweatherstjohns)
            : setWeatherLocation(localweatherottowa)
        }
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200"
      >
        Switch Weather Location
      </button>
      <WeatherList localweather={weather}></WeatherList>
    </div>
  );
}
