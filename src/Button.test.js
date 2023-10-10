import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "./components/customButton";

describe("Button Component", () => {
  test("renders a button with the correct text", () => {
    render(<CustomButton title="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test("handles click events correctly", () => {
    render(<CustomButton title="Click Me" />);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toBeVisible();
  });
});
