import { useEffect, useState } from "react"
import Header from "./components/Header";
import Search from "./components/Search";


export default function App() {

  const [formData, setFormData] = useState()
  const [searchQuery, setSearchQuery] = useState()
  const [geoCode, setGeoCode] = useState()
  const [latLong, setLatLong] = useState()
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [weatherData, setWetherData] = useState()


  function getFormData(e) {
    const value = e.target.value
    setFormData(value)
    console.log(formData)
  }

  function handleSubmit(e) {
      e.preventDefault()
      setSearchQuery(formData) 

      console.log(searchQuery)
  }
  


  useEffect(() => {
    async function getGeoCode() {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&language=en&format=json`)

      const data = await response.json()
      setGeoCode(data)


      const geoCodeResult = geoCode.results[0]
     

      setLatLong({ latitude: geoCodeResult.latitude, longitude: geoCodeResult.longitude })
      console.log(geoCode)
    }
     getGeoCode()

    
    
  }, [searchQuery])




  useEffect( () => {
     
    async function fetchData() { 
      const response = await fetch(``)

      const data = await response.json()
     
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
    </div>  
  )
}