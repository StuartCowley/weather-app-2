/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import getForecast from "../requests/getForecast";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  }, []);
  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
    setSearchText("");
  };
  const scroll = () => {
    const section = document.querySelector("#more-details");
    section.scrollIntoView({ behavior: "smooth", block: "center" });
    // eslint-disable-next-line no-undef
    return handleForecastSelect();
  };
  const value = {
    forecasts,
    location,
    selectedDate,
    searchText,
    setSearchText,
    handleCitySearch,
    scroll,
    setSelectedDate,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
