import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>Friday 04:00</li>
            <li>Mostly Cloudy</li>
          </ul>
          <img src="" />
          6°c
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 50%</li>
            <li>Humidity 72%</li>
            <li>Wind 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
