/* eslint-disable react/prop-types */
import moment from "moment";
import React, { useContext } from "react";
// import moment from "moment";
import "../styles/Forecast-details.css";

import { DataContext } from "../context/DataContext";

function ForecastDetails() {
  // eslint-disable-next-line react/prop-types
  // const { forecasts } = useContext(DataContext);
  const { selectedDate } = useContext(DataContext);
  // eslint-disable-next-line no-console
  const { date, temperature, description, icon, humidity, wind } = selectedDate;
  console.log(selectedDate);
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="Forecast-details card" id="more-details">
      <span> {moment(date).format("ddd Do MMM")} </span>
      <span> Max temperature: {temperature.max}&deg;C </span>
      <span> Min temperature: {temperature.min}&deg;C </span>
      <span> Humidity: {humidity}% </span>
      <span> Wind Speed:{wind.speed} </span>
      <spa> Icon : {icon} </spa>
      <spa> Icon : {description} </spa>
    </div>
  );
}

export default ForecastDetails;
