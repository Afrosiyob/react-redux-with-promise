import { render, cleanup, screen } from "@testing-library/react";
import Todo from "../Todo";

afterEach(() => {
  cleanup();
});

test("Todo", () => {
  render(<Todo label="this is label" completed={false} />);
  const testElement = screen.getByTestId("todo-1");
  expect(testElement).toBeInTheDocument();
});
