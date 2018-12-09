import React from "react";
import { shallow, mount } from "enzyme";
import Core1 from "./Core1";
import Completed from "./Completed";
import Goals from "./Goals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

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

describe("Core1 - Axios", () => {
  const spy = jest.spyOn(Core1.prototype, "getLesson");
  const wrapper = mount(<Core1 />);
  const mockData = {
    lesson_id: 1,
    user_id: 1,
    lesson_url: "lesson_url",
    lesson_title: "lesson_title",
    lesson_description: "lesson_description",
    times_rated: 5,
    total_rating: 5
  };
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("/api/lesson/1").reply(200, mockData);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
  });

  it('calls the "getLesson" function', () => {
    expect(spy).toHaveBeenCalled();
  });

  it("sets lesson to state", () => {
    expect(wrapper.state().lesson_info).toEqual(mockData);
  });
});
