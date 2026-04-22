import useWeather from './useWeather'

export default function DailyForecast({weatherData}) {
   
   const { getWeatherIcon } = useWeather()
   const days = weatherData.daily.time
   const dailyForecast = days.map((day, index) => {
    
    const weekday = new Date(day).toLocaleDateString('en-US', {
        weekday: 'short'
    })

    return{
        date: weekday,
        minTemp: weatherData.daily.temperature_2m_min[index],
        maxTemp: weatherData.daily.temperature_2m_max[index],
        weatherCode: weatherData.daily.weather_code[index]
   }})

    const dispayDailyForecast = dailyForecast.map((day, index) => (
        <div className="daily-forecast-item" key={index}>
            <p className='weekday'>{day.date}</p>
            <img src={getWeatherIcon(day.weatherCode)}/>
            <div>
                <p className='temp'>{day.minTemp.toFixed()}°</p>
                <p className='temp'>{day.maxTemp.toFixed()}°</p>
            </div>
        </div>
    ))
    return( 
        <>
            <p className='daily-section-title'>Daily forecast</p>
            <section className='daily-forecast-container'>
                {dispayDailyForecast}
            </section>
        </>
    )
}