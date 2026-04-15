export default function Result({weatherData, city}) {

    return (
        <div className="current-weather-info">

            {city && <h1>{city.toUpperCase()}</h1>}

             {weatherData && weatherData.current ? 
             <>
                <p>{weatherData.current.time}</p>
                <p>{weatherData.current.apparent_temperature}°C</p> 
             </>
             : null}
        </div>
    )
   
}  