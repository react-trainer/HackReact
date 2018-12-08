import React from "react";
import { shallow, mount } from "enzyme";
import Core1 from "./Core1";
import Completed from "./Completed";
import Goals from "./Goals";
import { Content } from "./Core1SC";

describe("Core1", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Core1 />)));
  it("should render a <div />", () => {
    const wrapper = shallow(<Core1 />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render Goals component", () => {
    expect(wrapper.containsMatchingElement(<Goals />)).toEqual(true);
  });

  it("should render Completed component", () => {
    expect(wrapper.containsMatchingElement(<Completed />)).toEqual(false);
  });

  it("should mount with goals false", () => {
    const wrapper = mount(<Core1 />);
    expect(wrapper.state().completed).to.equal(false);
  });
});
