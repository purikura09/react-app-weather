import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle-icons-weather.svg/1024px-Circle-icons-weather.svg.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <br />
        <h1>{weatherData.city}</h1>
        <br />
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Friday 04:00</li>
              <li>Mostly Cloudy</li> <br />
              <div className="row">
                <div className="col-2">
                  <img className="Icon" src={weatherData.iconUrl} />
                </div>
                <div className="col-2">
                  <h2>{Math.round(weatherData.temperature)}°c</h2>
                </div>
              </div>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li></li>
              <li>
                <b>Humidity:</b> {weatherData.humidity}%
              </li>
              <li>
                <b>Wind</b> {weatherData.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ee1b96c1f77d3aae1b3b86327285b0f8";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
