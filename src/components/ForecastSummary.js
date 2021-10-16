/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.css";

function ForecastSummary(props) {
  const { date, temperature, description, icon, onSelect } = props;
  return (
    <div className="forecast-summary card">
      <div className="forecast-summary_date  Primary">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary_icon ">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast_summary_temperature ">{temperature}&deg;C</div>
      <div className="forecast-summary_description ">{description}</div>
      <button
        className="button info-button is-primary "
        type="button"
        onClick={() => onSelect(date)}
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
