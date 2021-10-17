/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import moment from "moment";
import React, { useContext } from "react";
// import MoreDetails from "./MoreDetails";
import { DataContext } from "../context/DataContext";

function Forecast() {
  const { forecasts, selectedDate, setSelectedDate } = useContext(DataContext);
  //   const dayselected = () => {
  //     setSelectedDate(forecast.date);
  //   };
  return (
    <>
      {forecasts.map((forecast) => (
        <>
          <h2> date is:{moment(forecast.date).format("ddd Do MMM")} </h2>
          <h2> description is: {forecast.description} </h2>
          <h2> widn is: {forecast.wind.speed} </h2>
          <h2> icon is: {forecast.icon} </h2>
          <h2> temperature is: {forecast.temperature.min} </h2>
          <h2> humidity is: {forecast.humidity} </h2>
          {selectedDate && (
            <button
              onClick={() => {
                const displayDay = forecasts.find(
                  (day) => day.date === forecast.date
                );
                console.log(displayDay);
                setSelectedDate(displayDay);
                console.log(selectedDate);
                // setSelectedDate(forecast.date);
                // console.log(`${moment(selectedDate).format("ddd Do MMM")}`);
              }}
            >
              {" "}
              More Details
            </button>
          )}
          {/* {selectedDate && 
            <button Onclick={() => {  console.log(selectedDate);
                setSelectedDate(forecast.date);>
           </button>} */}
        </>
      ))}
    </>
  );
}
export default Forecast;
