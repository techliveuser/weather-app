import { useState,useEffect } from "react";
import axios from "axios";
import "./HourlyWeather.css";
const HourlyForecast=()=>{
   const [forecast, setForecast] = useState([]);
     const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const fetchWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    // res.data is an object
    setForecast(res.data.list); // <-- store the array
  } catch (err) {
    console.log(err);
  }
};
       useEffect(()=>{
            fetchWeather('mohali')
        },[])
   // Take next 8 intervals (~24 hours)
    const hourlyData =forecast.slice(0, 8);

     return (
    <div className="hourly-container">
      <h3 className="bg-dark text-white py-2">Hourly Forecast</h3>

      <div className="hourly-scroll">
        {hourlyData.map((item, index) => {

          const time = new Date(item.dt_txt).getHours();

          return (
            <div key={index} className="hour-card">
              
              <p>{time}:00</p>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="icon"
              />

              <h4>{item.main.temp}°C</h4>

            </div>
          );
        })}
      </div>
    </div>
  );
    
}
export default HourlyForecast