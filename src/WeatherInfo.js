import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <br />
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li>Mostly Cloudy</li> <br />
            <div className="row">
              <div className="col-2">
                <WeatherIcon code={props.data.iconUrl[0].icon} size="70"/>
              </div>
              <div className="col-4">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li></li>
            <li>
              <b>Humidity:</b> {props.data.humidity}%
            </li>
            <li>
              <b>Wind</b> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
