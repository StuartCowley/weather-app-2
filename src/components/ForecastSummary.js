/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

function ForecastSummary(props) {
  const { date, temperature, description, icon, onSelect } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary_icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast_summary_temperature">{temperature}&deg;C</div>
      <div className="forecast-summary_description">{description}</div>
      <button type="button" className="forecast" onClick={() => onSelect(date)}>
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
