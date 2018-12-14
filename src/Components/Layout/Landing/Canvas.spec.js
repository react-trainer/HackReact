import React from "react";
import { Canvas, Circle } from "./Canvas";
import { shallow } from "enzyme";

describe("The Bubble Component", () => {
  it("renders as expected", () => {
    shallow(<Canvas />);
  });
  it("should contain radius", () => {
    expect(Circle).toContain("radius");
  });
});
