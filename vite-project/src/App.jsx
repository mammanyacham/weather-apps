import { useEffect, useState } from "react"
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";


export default function App() {

  const [formData, setFormData] = useState()
  const [searchQuery, setSearchQuery] = useState()
  const [weatherData, setWeatherData] = useState()
  const [isMetric, setIsMetric] = useState(true)

  function toggleUnits() {
    setIsMetric(prev => !prev)
  }

  const switchUnitsText = isMetric ? "Switch to Imperial" : "Switch to Metric"

  function getFormData(e) {
    const value = e.target.value
    setFormData(value)
  }

  function handleSubmit(e) {
      e.preventDefault()
      setSearchQuery(formData) 
      console.log(searchQuery)
  }

  const temperatureUnit = isMetric ? "celsius" : "fahrenheit";
  const windSpeedUnit = isMetric ? "kmh" : "mph";
  const precipitationUnit = isMetric ? "mm" : "inch";
  
  
  useEffect(() => {
    async function fetchData() {

      if (!searchQuery) return

      try{
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&language=en&format=json`)

        const geoData = await geoResponse.json()
        
        const geoCodeResults = geoData.results[0]
        if (!geoCodeResults || geoCodeResults.length === 0){
          return
        }
        
        const latitude = geoCodeResults.latitude
        const longitude = geoCodeResults.longitude

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?` +
        `latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&temperature_unit=${temperatureUnit}` +
        `&wind_speed_unit=${windSpeedUnit}` +
        `&precipitation_unit=${precipitationUnit}` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
        `&hourly=temperature_2m,weather_code` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code`)

          const weatherData = await weatherResponse.json()


          setWeatherData(weatherData)
          console.log("Current weather:", weatherData)
      } catch(error) {
          console.error("Error fetching geocoding data:", error)

      }
      
    }

     fetchData()    
  }, [searchQuery, isMetric])


  return(
    <div className="container">
      <Header 
        toggleUnits={toggleUnits}
        switchUnitsText={switchUnitsText}
        isMetric={isMetric}
      />
      <Search 
        getFormData={getFormData}
        handleSubmit={handleSubmit}
      />
      <Result
        weatherData={weatherData}
        city={searchQuery}
        isMetric={isMetric}
      />
    </div>  
  )
}