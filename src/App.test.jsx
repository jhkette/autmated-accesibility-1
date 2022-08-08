import { render } from "@testing-library/react";
import { toHaveNoViolations, axe } from "jest-axe";
import React from "react";

import App from "./App";


expect.extend(toHaveNoViolations);

it("should have no a11y errors caught by jest-axe", async () => {
  const { container } = render(<App />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
