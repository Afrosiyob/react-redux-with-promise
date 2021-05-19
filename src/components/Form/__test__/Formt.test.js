import { screen, render } from "@testing-library/react";
import Form from "../Form";

import renderer from "react-test-renderer";

test("Form", () => {
  render(<Form />);
  screen.debug();

  const labelUsername = screen.getByText(/username:/i);
  screen.getByRole("textbox", {
    name: /username:/i,
  });
  expect(labelUsername).toHaveTextContent(/username/i);

  const labelPassword = screen.getByText(/password:/i);

  expect(labelPassword).toHaveTextContent(/password/i);

  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
