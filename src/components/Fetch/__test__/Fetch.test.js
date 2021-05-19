import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import Fetch from "../Fetch";

import axios from "axios";

afterEach(cleanup);

test("fetches and display data", async () => {
  const url = "/greeting";

  const { container } = render(<Fetch url={url} />);

  expect(container).toHaveTextContent("loading");
});
