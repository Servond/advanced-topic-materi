import { render, screen } from "@testing-library/react";
import Home from "./Pages/Home";

test("render a text of hello world", () => {
  render(<Home title="Mau Apa" />);
  const homeElement = screen.getByText(/mau apa/i);
  expect(homeElement).toBeInTheDocument();
});
