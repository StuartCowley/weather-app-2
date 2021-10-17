/* eslint-disable react/prop-types */
import React from "react";

export default function MoreDetails(props) {
  const { Onclick } = props;
  return (
    <div>
      <button onClick={Onclick} type="submit">
        More Details{" "}
      </button>
    </div>
  );
}
