/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
// import moment from "moment";
import { DataContext } from "../context/DataContext";

export default function ForecastDetailsTwo() {
  const { selectedDate } = useContext(DataContext);
  return (
    <div>
      {selectedDate && (
        <>
          {/* <h2> {moment(selectedDate.date).format("ddd Do MMM")} </h2>
          <h2>Icon is{selectedDate.icon} </h2>
          <h2>Widn is{selectedDate.wind} </h2> */}
        </>
      )}
    </div>
  );
}
