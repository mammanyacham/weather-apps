export default function CurrentData({weatherData}) {
    const current = [
        {name: "Feels Like", data: weatherData.current.apparent_temperature, unit: weatherData.current_units.apparent_temperature},
        {name: "Humidity", data: weatherData.current.relative_humidity_2m, unit: weatherData.current_units.relative_humidity_2m},
        {name: "Wind", data: weatherData.current.wind_speed_10m, unit: weatherData.current_units.wind_speed_10m},
        {name: "Precipitation", data: weatherData.current.precipitation, unit: weatherData.current_units.precipitation}
    ]

    const displayCurrent = current.map((item, index) => 
      (   
        <div key={index} className="current-weather-data-item">
            <p className="current-name">{item.name}</p>
            <p className="current-data">{item.data}{item.unit}</p>
        </div>
      )
    )

    return(
        <div className="current-weather-data">
            {displayCurrent}
        </div>
    )
}