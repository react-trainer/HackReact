import React from "react";
import { shallow } from "enzyme";
import Core1 from "./Core1";
import Completed from "./Completed";
import Goals from "./Goals";

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

  it("should mount with state", () => {
    const wrapper = shallow(<Core1 />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    expect(wrapper.state("goals")).toBe(true);
    expect(wrapper.state("completed")).toBe(false);
    expect(wrapper.state("title")).toBe("Title");
    expect(wrapper.state("number")).toBe("1");
    expect(wrapper.state("docsURL")).toBe(
      "https://reactjs.org/docs/components-and-props.html"
    );
    expect(wrapper.state("iframe")).toBe("30l5vp4jqq");
    expect(wrapper.state("module")).toBe("/src/App.js");
  });

  
});
