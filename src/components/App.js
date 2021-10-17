import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/named
import { DataContextProvider } from "../context/DataContext";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import Search from "./Search";
import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDetailsTwo from "./ForecastDetailsTwo";
import MoreDetails from "./MoreDetails";
/* eslint-disable */

function App() {
  
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

const selectForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
 

 useEffect(() => {
  getForecast(searchText,setSelectedDate, setForecasts, setLocation);
}, [])

  
  return (
    < DataContextProvider > 
    
    <div className="weather-app container">
      {location && <LocationDetails city={location.city} country={location.country} /> }
      <Search />
      {selectForecast && < Forecast /> }
      {/* <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
        /> */}
       < MoreDetails/ >
      {selectForecast && <ForecastDetails forecasts={selectForecast} />}
      <ForecastDetailsTwo />
    </div>
        </DataContextProvider>
  );
}

export default App;
