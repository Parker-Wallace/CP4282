import Weather from './Weather'
import localweather from './StJohnsWeather.json'




function WeatherList() {
    return (
        <section>
            <h1>{localweather.city}</h1>
                {localweather.forecast.map((weekday) => (
                   <Weather day={weekday.day} temp={weekday.temp} wet={weekday.precip} wind={weekday.wind}></Weather>
    ))}
        </section>
    )
    
}
export default WeatherList