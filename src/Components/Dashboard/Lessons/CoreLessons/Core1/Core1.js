import React, { Component } from "react";
import Goals from "./Goals";
import { Container, Content, Editor } from "./Core1SC";

class Lesson extends Component {
  constructor() {
    super();
    this.state = {
      goals: false,
      title: "Title",
      number: "1",
      // lesson_id: this.props.lesson_id,
      lessongoals: [
        "get shwifty",
        "pump..... pump..... pump it up!",
        "now watch me oooooo crank that soulja boi",
        "pop, lock, and drop it"
      ],
      // iframe: "my59mjx84y"
      iframe: "30l5vp4jqq",
      module: "/src/App.js"
    };
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  componentDidMount() {
    //this.getlesson() -- get a lesson from db

    this.showGoals();
  }

  showGoals = () => {
    this.setState({ goals: true });
  };

  hideGoals = () => {
    this.setState({ goals: false });
  };

  onClose() {
    this.hideGoals();
  }

  onOpen() {
    this.showGoals();
  }

  render() {
    return (
      <Container>
        {this.state.goals ? (
          <Goals
            onClose={this.onClose}
            onOpen={this.onOpen}
            title={this.state.title}
            number={this.state.number}
            goals={this.state.lessongoals}
          />
        ) : null}

        <Content>
          <div className="titlebox">
            <h1>{this.state.title}</h1>
          </div>
          <a
            href="https://reactjs.org/docs/components-and-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Component Docs
          </a>
          <p />
          <div className="navbuttons">
            <button>Prev</button>
            <button>Next</button>
          </div>
        </Content>

        <Editor>
          <iframe
            src={`https://codesandbox.io/embed/${
              this.state.iframe
            }?forcerefresh=1&view=split&verticallayout=0&editorsize=50&module=${
              this.state.module
            }`}
            title="test_lesson"
            width="100%"
            height="890px"
            border="0"
            border-radius="4px"
            overflow="hidden"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Editor>
      </Container>
    );
  }
}

export default Lesson;
