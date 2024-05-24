// app/components/WeatherList.js

import Weather from './weather';

const WeatherList = ({ localweather }) => {
  return (
    <section className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">{localweather.city}</h1>
      {localweather.forecast.map((weekday) => (
                   <Weather 
                   day={weekday.day} 
                   temp={weekday.temp} 
                   wet={weekday.precip} 
                   wind={weekday.wind}>
                   </Weather>
      ))}
    </section>
  );
};

export default WeatherList;
