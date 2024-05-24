// app/components/Weather.js

const Weather = (prop) => {
    return (
      <div className="border p-4 rounded-md bg-gray-100 mb-4">
        <h2 className="text-xl font-bold mb-2">{prop.day}</h2>
        <ul className="list-disc pl-5">
        <li>{prop.temp}</li>
                <li>{prop.wet}</li>
                <li>{prop.wind}</li>
        </ul>
      </div>
    );
  };
  
  export default Weather;
  