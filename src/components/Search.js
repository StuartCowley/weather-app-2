import React from "react";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";
import "../styles/App.css";
import "../styles/Card.css";

export default function Search({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  // eslint-disable-next-line consistent-return
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      return onSubmit();
    }
  };
  return (
    <div className="Search d-flex">
      <input
        className="input is-rounded is-large"
        type="text"
        placeholder="Search by city...."
        onChange={handleInputChange}
        value={searchText}
        onKeyPress={handleEnter}
      />
      <button
        className="button-search button is-primary is-large is-rounded"
        type="submit"
        onClick={onSubmit}
      >
        Search
      </button>
    </div>
  );
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
