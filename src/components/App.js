import React, { useState, useEffect } from "react";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import Search from "./Search";
import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import "bootstrap/dist/css/bootstrap.min.css";
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
    return onscroll
  };
  const scroll = () => {
    const section = document.querySelector( '#more-details' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const handleCitySearch = ()=> {
    getForecast(searchText ,setSelectedDate, setForecasts,setLocation )
   setSearchText('')
  }
 useEffect(() => {
  getForecast(searchText,setSelectedDate, setForecasts, setLocation);
}, [])

  
  return (
    <div className="weather-app container">
      <LocationDetails city={location.city} country={location.country} />
      <Search onSubmit={handleCitySearch} searchText={searchText}  setSearchText={setSearchText}/>
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectForecast && <ForecastDetails forecasts={selectForecast} />}
      
    </div>
  );
}

export default App;
