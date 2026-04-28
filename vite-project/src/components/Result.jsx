import CurrentData from "./CurrentData"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import useWeather from "./useWeather"



export default function Result({weatherData, city}) {


if (!weatherData || !weatherData.current) return <p>Weather data not available yet...</p>

const formattedDate = new Date(weatherData.current.time).toLocaleDateString("en-US", {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    ) 

    //use weather code to determine which icon to display
    const weatherCode = weatherData.current.weather_code

    const { getWeatherIcon } = useWeather()

    return (
    <>
        <div className="current-weather-info">
            <div className="city-date-div"> 
                {city && <h1>{city.toUpperCase()}</h1>}
                <p>{formattedDate}</p>
            </div>
            <div className="temperature">
                <img src={getWeatherIcon(weatherCode)} className="weather-img"/>
                <p>{weatherData.current.temperature_2m.toFixed()}°C</p>
            </div> 
        </div>
        {<CurrentData 
            weatherData={weatherData}
         />}
         {<DailyForecast 
             weatherData={weatherData}
             formattedDate={formattedDate.weekdayday}       
         />}

         {<HourlyForecast
               weatherData={weatherData} 
         />}
    </>
    )
   
}  