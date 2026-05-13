import { useEffect, useState } from "react"
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";


export default function App() {

  const [formData, setFormData] = useState()
  const [searchQuery, setSearchQuery] = useState()
  const [weatherData, setWeatherData] = useState()
  const [units, setUnits] = useState()


  function getFormData(e) {
    const value = e.target.value
    setFormData(value)
   
  }

  function handleSubmit(e) {
      e.preventDefault()
      setSearchQuery(formData) 

      console.log(searchQuery)
  }
  

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


        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code`)

          const weatherData = await weatherResponse.json()


          setWeatherData(weatherData)
          console.log("Current weather:", weatherData)
      } catch(error) {
          console.error("Error fetching geocoding data:", error)

      }
      
    }

     fetchData()    
  }, [searchQuery])



  return(
    <div className="container">
      <Header />
      <Search 
        getFormData={getFormData}
        handleSubmit={handleSubmit}
      />
      <Result
        weatherData={weatherData}
        city={searchQuery}
      />
    </div>  
  )
}