import { useState } from "react";
import axios from "axios";
const WeatherChart=()=>{
      const [forecast, setForecast] = useState([]);
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
         const fetchWeather = async (city) => {
  /*   const current = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    ); */

    const forecastData = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

   /*  setWeather(current.data); */
    setForecast(forecastData.data.list);
  };
   useEffect(()=>{
              fetchWeather('mohali')
          },[])
    return(
        <div>
            
        </div>
    )
}
export default WeatherChart