import "./Footer.css";
const Footer=()=>{
    return(
        <div>
            <footer className="footer">
      <p>🌦️ Weather Forecast App &copy; {new Date().getFullYear()}</p>
      <p>
        Powered by <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeatherMap</a>
      </p>
    </footer>
        </div>
    )
}
export default Footer