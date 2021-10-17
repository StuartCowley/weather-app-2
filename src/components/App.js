import React from "react";
// eslint-disable-next-line import/named
import { DataContextProvider } from "../context/DataContext";
import LocationDetails from "./LocationDetails";
import Search from "./Search";
import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable */

function App() {
  

  return (
    < DataContextProvider > 
    
    <div className="weather-app container">
      <LocationDetails  /> 
      <Search />
       < Forecast /> 
     <ForecastDetails  />
    
    </div>
        </DataContextProvider>
  );
}

export default App;
