import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <br />
        <footer>This website is created by RBK for SheCodes exercice</footer>
      </div>
    </div>
  );
}
