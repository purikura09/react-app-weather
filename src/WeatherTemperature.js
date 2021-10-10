import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDeafult();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDeafult();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(props.celsius)}°</span>

        <span className="Metric">
          C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(fahrenheit())}°</span>
        <span className="Metric">
          <a href="/" onClick={convertCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
