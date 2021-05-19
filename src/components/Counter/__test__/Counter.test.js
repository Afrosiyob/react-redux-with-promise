import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("Counter", () => {
  const { container } = render(<Counter />);

  expect(container).toBeInTheDocument();
});

test("Counter with props", () => {
  const { container } = render(<Counter number={0} />);

  expect(container).toBeInTheDocument();
});

test("Counter buttons", () => {
  render(<Counter number={0} />);

  const increment = screen.getByRole("button", { name: /increment/i });

  const decrement = screen.getByRole("button", { name: /decrement/i });

  const message = screen.getByText(/count 0/i);

  expect(message).toHaveTextContent("count 0");

  fireEvent.click(increment);

  expect(message).toHaveTextContent("count 1");

  fireEvent.click(decrement);

  expect(message).toHaveTextContent("count 0");
});
