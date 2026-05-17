import CurrentData from "./CurrentData"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import useWeather from "./useWeather"
import loadingIcon from "/images/icon-loading.svg"



export default function Result({weatherData, city, searchQuery, isMetric}) {


if (!weatherData || !weatherData.current) return  !searchQuery ? <p className="no-result">No search result found!</p> : <p className="no-result"><img src={loadingIcon} alt="Loading" /> <span>Loading...</span></p>

const formattedDate = new Date(weatherData.current.time).toLocaleDateString("en-US", {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    ) 

    
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
                <p>{weatherData.current.temperature_2m.toFixed()} {weatherData.current_units.apparent_temperature}</p>
            </div> 
        </div>
        {<CurrentData 
            weatherData={weatherData}
            isMetric={isMetric}
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