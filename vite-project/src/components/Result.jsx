export default function Result({weatherData, city}) {


if (!weatherData || !weatherData.current) return null

const formattedDate = new Date(weatherData.current.time).toLocaleDateString("en-US", {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    ) 
    return (
    <>
        {weatherData && weatherData.current ? 
            <div className="current-weather-info">
                {city && <h1>{city.toUpperCase()}</h1>}
                <p>{formattedDate}</p>
                <p>{weatherData.current.apparent_temperature}°C</p> 
            </div>
            : <p>Weather data not available yet...</p>}
    </>
    )
   
}  