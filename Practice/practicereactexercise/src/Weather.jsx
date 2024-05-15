function Weather(prop) {
    return ( 
        <div>
            <h2>{prop.day}</h2>
            <ul>
                <li>{prop.temp}</li>
                <li>{prop.wet}</li>
                <li>{prop.wind}</li>
            </ul>
        </div>
     );
}


export default Weather;