import React from "react";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Appointment", () => {
  xit("renders without crashing", () => {
    render(<Appointment />);
  });

  xit("does something it is supposed to do", () => {
    // ...
  });

  xit("does something else it is supposed to do", () => {
    // ...
  });
});
