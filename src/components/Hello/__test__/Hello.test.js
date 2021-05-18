import { cleanup, render, screen, fireEvent } from "@testing-library/react";
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
  const { container } = render(<Hello name="Jane" />);

  expect(container).toBeInTheDocument();

  expect(container).toHaveTextContent("Hello, Jane");

  expect(container).toContainHTML(
    '<h3 data-testid="hello-1"> Hello, Jane </h3>'
  );
});

test("Hello snapshot", () => {
  const tree = renderer.create(<Hello />).toJSON();

  expect(tree).toMatchSnapshot();
});
