import sunnyIcon from "/images/icon-sunny.webp"
import cloudyIcon from "/images/icon-partly-cloudy.webp"
import fogIcon from "/images/icon-fog.webp"
import stormIcon from "/images/icon-storm.webp"
import snowIcon from "/images/icon-snow.webp"
import rainIcon from "/images/icon-rain.webp"
import drizzleIcon from "/images/icon-drizzle.webp"

export default function useWeather() {
    function getWeatherIcon(code) {
            if(code === 0) return sunnyIcon
            if(code <= 3) return cloudyIcon
            if(code >= 45 && code <= 48) return fogIcon
            if(code >= 51 && code <= 67) return drizzleIcon
            if(code >= 71 && code <= 77) return snowIcon
            if(code >= 80 && code <= 82) return rainIcon
            if(code > 82) return stormIcon
        }
    return { getWeatherIcon }
}