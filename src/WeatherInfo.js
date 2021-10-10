import React from "react";
import FormatDate from "./FormatDate";

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
                <img className="Icon" src={props.data.iconUrl} />
              </div>
              <div className="col-2">
                <h2>{Math.round(props.data.temperature)}°c</h2>
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
