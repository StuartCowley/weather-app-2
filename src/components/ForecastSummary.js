/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.css";
import { DataContext } from "../context/DataContext";

function ForecastSummary() {
  const { forecasts, handleForecastSelect } = useContext(DataContext);
  const scroll = () => {
    const section = document.querySelector("#more-details");
    section.scrollIntoView({ behavior: "smooth", block: "center" });
    return handleForecastSelect(forecasts.date);
  };

  return (

    
    <div className="forecast-summary card">
      <div className="forecast-summary_date  Primary">
        {moment(forecasts.date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary_icon ">
        <WeatherIcon name="owm" iconId={forecasts.icon} />
      </div>
      <div className="forecast_summary_temperature ">
        {forecasts.temperature}&deg;C
      </div>
      <div className="forecast-summary_description ">
        {forecasts.description}
      </div>

      <button
        className="button info-button is-primary "
        type="button"
        onClick={scroll}
      >
        More Details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};
export default ForecastSummary;
