import pression from  '../../img/thermo.png'
import humidity from  '../../img/humidity.png'
import wind from  '../../img/wind.png'


const CapitalWeather = (props) => {
  const baseUrlIcon = "http://openweathermap.org/img/wn/";
  const extensionIcon = "@2x.png";
  
  if (props.data){

    let data = props.data;
    let temp = Math.floor(data.main.temp)
    let icon = baseUrlIcon + data.weather[0].icon + extensionIcon
    return (
      <div className = "card2">
      <h4 className = "text-center">{data.name}</h4>
      <img className = "imgTemps" src = {icon}></img>
      <p className = "text-center pTemps">{data.weather[0].description}</p>
      <p className = "text-center">{temp}°C</p>
      <div className = "imgBlockPression">
        <img className = "icon" src = {pression}></img>
      </div>
      <div className = "imgBlockHumidite">
        <img className = "icon" src = {humidity}></img>
      </div>
      <div className = "imgBlockVent">
        <img className = "icon" src = {wind}></img> 
      </div>
      <div className = "pBlockPression">
        <p className = "white">{data.main.pressure} hpa</p>
      </div>
      <div className = "pBlockHumidite">
        <p className = "white">{data.main.humidity}%</p>
      </div>
      <div className = "pBlockVent">
        <p className = "white">{data.wind.speed} m/s</p>
      </div>
    </div>
    )
  }
  else {
    return(
      <p> Aucune ville selectionnée</p>
    )
  }
}

export default CapitalWeather;