import React from "react";
import { shallow } from "enzyme";
import Quiz from "./Quiz";

describe("Quiz", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Quiz />)));

  it("should mount with state", () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper.state("finished")).toBe(false);
    expect(wrapper.state("correct")).toBe(0);
    expect(wrapper.state("progress")).toBe(0);
  }); 
});
