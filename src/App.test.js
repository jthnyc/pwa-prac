import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders date", () => {
  render(<App />);
  const linkElement = screen.getByText(/November/i);
  expect(linkElement).toBeInTheDocument();
});
