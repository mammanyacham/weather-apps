import useWeather from './useWeather'

export default function HourlyForecast({weatherData}) {

    const time = weatherData.hourly.time.slice(0, 9)
    const weatherCode = weatherData.hourly.weather_code.slice(0, 9)
    const temp = weatherData.hourly.temperature_2m.slice(0, 9)

    const day = new Date(time).toLocaleDateString('en-US', {weekday: 'long'})    

    const hourlyForecast = time.map((time, index) => {
        const hourlyTime = new Date(time).toLocaleTimeString('en-US', {
            hour: 'numeric'
        })

        return {
            newTime: hourlyTime,
            weatherCode: weatherCode[index],
            temp: temp[index]
        }
    })
        


    const { getWeatherIcon } =  useWeather()

    const displayHourlyForecast = hourlyForecast.map((hour, index) => (
        <div className="hourly-forecast-item" key={index}>
            <div className='time-icon-container'>
                <img src={getWeatherIcon(hour.weatherCode)} alt="Weather icon" className='weather-icon'/>
                <p>{hour.newTime}</p>
            </div>
            <p>{hour.temp}°</p>
        </div>
    ))


    return(
        <section className="hourly-forecast-container">
            
            <p className="hourly-section-title">Hourly forecast</p>
            {displayHourlyForecast}
        </section>
    )
}