import { useState,useEffect } from "react";
import axios from "axios";
import "./DailyForcast.css";
const DailyForcast=()=>{
      const [temp, setTemp] = useState();
        const [daily, setDaily] = useState([]);
     const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const fetchWeather = async (city) => {
      try {
        const cityRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setTemp(cityRes.data.main.temp);

        const { lat, lon } = cityRes.data.coord;
        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
        );
        setDaily(forecastRes.data.daily);
        console.log(forecastRes)
      } catch (err) {
        console.log(err);
      }
    };
       useEffect(()=>{
            fetchWeather('chandigarh')
        },[])
   

     return (
    <div className="daily-container">
      <h3>Daily Forecast</h3>
      <div className="daily-scroll">
        {daily.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          return (
            <div key={index} className="day-card">
              <p>{date}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <p>{Math.round(day.temp.day)}°C</p>
              <p>{day.weather[0].main}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DailyForcast