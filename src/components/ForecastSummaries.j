// /* eslint-disable react/prop-types */
// import React, { useContext } from "react";
// import PropTypes from "prop-types";
// import { DataContext } from "../context/DataContext";
// import ForecastSummary from "./ForecastSummary";
// import "../styles/ForecastSummaries.css";
// import "../styles/Card.css";

// export default function ForecastSummaries() {
//   const { forecasts, handleForecastSelect } = useContext(DataContext);
//   return (
//     <div className="forecast-summaries flex-container">
//       {forecasts.map((forecast) => (
//         <ForecastSummary
//           key={forecast.date}
//           date={forecast.date}
//           description={forecast.description}
//           icon={forecast.icon}
//           onSelect={handleForecastSelect}
//           temperature={forecast.temperature.max}
//         />
//       ))}
//     </div>
//   );
// }
// ForecastSummary.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string,
//       temperature: PropTypes.shape({
//         min: PropTypes.number,
//         max: PropTypes.number,
//       }),
//     })
//   ),
// };
