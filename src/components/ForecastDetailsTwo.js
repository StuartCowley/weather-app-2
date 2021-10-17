/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function ForecastDetailsTwo() {
  const { selectForecast } = useContext(DataContext);
  console.log(selectForecast);
  return (
    <div>
      {selectForecast && (
        <>
          <h2>date is{selectForecast.date} </h2>
          <h2>Icon is{selectForecast.icon} </h2>
          <h2>Widn is{selectForecast.wind.speed} </h2>
        </>
      )}
    </div>
  );
}
