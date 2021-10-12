/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import "../styles/Forecast-details.css";

function ForecastDetails({ forecasts }) {
  // eslint-disable-next-line react/prop-types
  const { humidity, wind, date, temperature } = forecasts;

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="Forecast-details">
      <span> {moment(date).format("ddd Do MMM")} </span>
      <span> Maximum temperature:{temperature.max}&deg;C </span>
      <span> Minimum temperature:{temperature.min}&deg;C </span>
      <span> Humidity:{humidity} % </span>
      <span> Wind Speed:{wind.speed} </span>
    </div>
  );
}

export default ForecastDetails;
