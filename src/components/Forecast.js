/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Forecast() {
  const { forecasts, handleForecastSelect } = useContext(DataContext);
  // eslint-disable-next-line no-console
  const date = forecasts[0];
  console.log(date);
  return (
    <>
      {forecasts.map((forecast) => (
        <>
          <h2> date is: {forecast.date} </h2>
          <h2> description is: {forecast.description} </h2>
          <h2> widn is: {forecast.wind.speed} </h2>
          <h2> icon is: {forecast.icon} </h2>
          <h2> temperature is: {forecast.temperature.min} </h2>
          <h2> humidity is: {forecast.humidity} </h2>
          <button type="submit" onClick={handleForecastSelect(date)}>
            More Details
          </button>
        </>
      ))}
    </>
  );
}

export default Forecast;
