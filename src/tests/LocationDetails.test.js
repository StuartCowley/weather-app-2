import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";
// import location from "../data/forcast.json";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toHaveClass("location");
  });
});
