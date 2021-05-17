import { act, cleanup, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Counter from "../Counter";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  cleanup();
});

it("Counter", () => {
  act(() => {
    render(<Counter number={0} />, container);
  });

  console.log(container.innerHTML);

  //   expect(container.textContent).toBe("count");
});
