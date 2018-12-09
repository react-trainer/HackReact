import React from "react";
import { shallow } from "enzyme";
import Completed from "./Completed";
import Quiz from "./Quiz";

describe("Completed", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Completed />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Quiz Component", () => {
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(true);
  });

  
});
