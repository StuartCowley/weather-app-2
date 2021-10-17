/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function ForecastDetailsTwo() {
  const { selectForecast, selectedDate } = useContext(DataContext);
  console.log(selectForecast);
  console.log(selectedDate);
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
