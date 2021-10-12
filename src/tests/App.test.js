import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders location correctly", () => {
    const validProps = {
      location: {
        city: "Manchester",
        country: "testCountry",
      },
      forecasts: [
        {
          date: 1254454544,
          temperature: {
            max: 12,
            min: 0,
          },
          wind: {
            speed: 13,
            direction: "s",
          },
          humidity: 30,
          description: "Clear",
          icon: "800",
        },
      ],
    };
    render(
      <App location={validProps.location} forecasts={validProps.forecasts} />
    );
    const linkElement = screen.getByText("Manchester, testCountry");
    expect(linkElement).toBeInTheDocument();
  });
});
