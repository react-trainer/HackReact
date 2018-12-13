import React from "react";
import { shallow} from "enzyme";
import Core1 from "./Core1";
import Completed from "./Completed";
// import Goals from "./Goals";
// import MockAdapter from "axios-mock-adapter";
// import axios from "axios";

const match = {
  params: {
    id: 1
  }
};

describe("Core1 - Initial", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Core1 match={match} />)));
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should nota render Completed component", () => {
    expect(
      wrapper.containsMatchingElement(<Completed match={match} />)
    ).toEqual(false);
  });

  it("should initialize with proper conditions", () => {
    const wrapper = shallow(<Core1 match={match} />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    expect(wrapper.state("goals")).toBe(true);
    expect(wrapper.state("completed")).toBe(false);
  });
});

// describe("Core1 - Axios/Mounting", () => {
//   const spy = jest.spyOn(Core1.prototype, "getLesson");
//   const wrapper = mount(<Core1 match={match} />);
//   const mockData = {
//     lesson_title: "lesson_title",
//     lesson_description: "lesson_description",
//     lesson_content: "lessona_content",
//     docs_url: "docs_url",
//     iframe: "iframe"
//   };
//   beforeEach(() => {
//     const mock = new MockAdapter(axios);
//     mock.onGet("/api/lesson/1").reply(200, mockData);
//     const componentInstance = wrapper.instance();
//     componentInstance.componentDidMount();
//   });

//   it('calls the "getLesson" function', () => {
//     expect(spy).toHaveBeenCalled();
//   });
// });
