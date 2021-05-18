import { cleanup, render, screen } from "@testing-library/react";
import Hello from "../Hello";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("Hello no props", () => {
  const { container } = render(<Hello />);

  expect(container).toBeInTheDocument();

  expect(container).toHaveTextContent("XD Hi, stranger");

  expect(container).toContainHTML(
    '<span data-testid="hello-1"> XD Hi, stranger </span>'
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

test("Hello snapshot", () => {
  const tree = renderer.create(<Hello />).toJSON();

  expect(tree).toMatchSnapshot();
});
