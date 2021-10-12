import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    temperature: 12,
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
    description: "Clear",
    icon: "800",
  };
  it("renders correctly", () => {
    const { getByText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature.max}
      />
    );
    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-summary_date");
  });
});
