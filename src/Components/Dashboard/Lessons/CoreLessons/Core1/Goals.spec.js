import React from "react";
import { shallow } from "enzyme";
import Goals from "./Goals";

describe("Completed", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Goals />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
