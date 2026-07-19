import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio introduction and selected work", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /I build dependable web products/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Products built to solve/i })).toBeInTheDocument();
});
