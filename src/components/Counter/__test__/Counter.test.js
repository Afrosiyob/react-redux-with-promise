import { render } from "@testing-library/react";
import Counter from "../Counter";

test("Counter", () => {
  const { container } = render(<Counter />);

  expect(container).toBeInTheDocument();
});

test("Counter with props", () => {
  const { container } = render(<Counter number={0} />);

  expect(container).toBeInTheDocument();
});
