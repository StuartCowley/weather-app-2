/* eslint-disable react/prop-types */
import React from "react";
import { PropTypes } from "prop-types";

export default function LocationDetails(props) {
  // eslint-disable-next-line react/prop-types
  const { city, country } = props;

  return (
    <div className="location title is-2">
      <h1 className="location">{`${city}, ${country}`}</h1>
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
