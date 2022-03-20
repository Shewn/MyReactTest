import TopWrapper from "./Container/topWrapper"
import BottomWrapper from "./Container/bottomWrapper"
import store from "./Redux/store"
import { useState } from "react";
import './App.css';


function App() {
  const [data, setData] = useState({
    area: "",
    weather: "",
    desc: "",
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    time: "",
  })
  const [show, setShow] = useState(true);
  const handleAddHistory = (area, time, city, country) => {
    store.dispatch({ type: 'addHistory', payload: { area: area, time: time, city: city, country: country } })
  }
  const handleDeleteHistory = (id) => {
    store.dispatch({ type: 'deleteHistory', payload: id })
  }
  const handleSearchWeatherData = (city, country) => {
    let apiKey = "734db42453091b7ca53a041dee6cbaa0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.cod === 200) {
            const weatherData = data;
            var time;
            var dot = city.trim() !== "" && country.trim() !== "" ? "," : ""
            var area = `${city}${dot}${country}`
            var date = new Date();
            var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
            var am_pm = date.getHours() >= 12 ? "PM" : "AM";
            hours = hours < 10 ? "0" + hours : hours;
            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
            weatherData.area = area
            weatherData.weather = result.weather[0].main
            weatherData.desc = result.weather[0].description
            weatherData.tempMin = result.main.temp - 273.15
            weatherData.tempMax = result.main.temp_max - 273.15
            weatherData.humidity = result.main.humidity
            weatherData.time = time
            setData(weatherData)
            setShow(false);
            setShow(true);
            handleAddHistory(area, time, city, country);
          } else {
            setShow(false);
          }
        });
  }
  return (
    <div className="App">
      <TopWrapper onSearch={handleSearchWeatherData} data={data} show={show} />
      <BottomWrapper onSearch={handleSearchWeatherData} onDelete={handleDeleteHistory} />
    </div>
  );
}

export default App;
