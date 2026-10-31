import DailyForcast from "./components/DailyForcast"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HourlyForecast from "./components/HourlyForecast"
import Weather from "./components/Weather"
import WeatherChart from "./components/WeatherChart"

const App=()=>{
  return(
    <div className="hero">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="app">
              <Weather/>
            </div>
          </div>
          <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <HourlyForecast/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
              {/*    <DailyForcast/> */}
                </div>
              </div>
          </div>
        </div>
      
      </div>
      <Footer/>
    </div> 
    
  )
}
export default App