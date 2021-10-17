/* eslint-disable react/prop-types */
import React, { useContext }from "react";
import { PropTypes } from "prop-types";
import { DataContext } from "../context/DataContext";
export default function LocationDetails(props) {
  // eslint-disable-next-line react/prop-types
  const { location } = useContext(DataContext);
  console.log(location )

  return (
    <div className="location title is-2">
      <h1 className="location">{`${location.city}, ${location.country}`}</h1>
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
