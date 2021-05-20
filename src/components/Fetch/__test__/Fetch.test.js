import { render, waitFor, screen, cleanup } from "@testing-library/react";
import axiosMock from "axios";
import Fetch from "../Fetch";
import renderer from "react-test-renderer";
afterEach(cleanup);

test("fetch data and display", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      greeting: "hello there...",
    },
  });

  const url = "/greeting";

  const { container } = render(<Fetch url={url} />);

  expect(container).toHaveTextContent(/fetch component/i);

  const resolvedBox = await waitFor(() => container);

  expect(resolvedBox).toHaveTextContent("hello there...");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);

  expect(axiosMock.get).toHaveBeenCalledWith(url);
});

test("fetch data snapshot", async () => {
  const url = "/greeting";
  const component = renderer.create(<Fetch url={url} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
