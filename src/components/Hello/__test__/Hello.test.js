import { cleanup, render, screen } from "@testing-library/react";
import Hello from "../Hello";

afterEach(() => {
  cleanup();
});

test("Hello no props", () => {
  render(<Hello />);
  const helloelement = screen.getByTestId("hello-1");
  expect(helloelement).toBeInTheDocument();
  expect(helloelement).toHaveTextContent("Hi, stranger");
  expect(helloelement).toContainHTML(
    '<span data-testid="hello-1"> Hi, stranger </span>'
  );
});

test("Hello with props", () => {
  render(<Hello name="Jane" />);
  const helloelement = screen.getByTestId("hello-1");
  expect(helloelement).toBeInTheDocument();
  expect(helloelement).toHaveTextContent("Hello, Jane");
  expect(helloelement).toContainHTML(
    '<h3 data-testid="hello-1"> Hello, Jane </h3>'
  );
});
