import React from "react";
import { Landing, ArrowIcon } from "./Landing";
import sinon from "sinon";
import { shallow } from "enzyme";

describe("The Landing Page Component", () => {
  it("renders as expected", () => {
    shallow(<Landing />);
  });
  it("simulates click events", () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<ArrowIcon onButtonClick={onButtonClick} />);
    wrapper.find("button").simulate("click");
    expect(onButtonClick).to.have.property("count", 4);
  });
});
