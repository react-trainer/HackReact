import React, { Component } from "react";
import Goals from "./Goals";
import Completed from "./Completed";
import { Container, Content, Editor, Title, Instructions } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";

class Lesson extends Component {
  constructor() {
    super();
    this.state = {
      goals: false,
      completed: false,
      title: "Title",
      number: "1",
      docsURL: "https://reactjs.org/docs/components-and-props.html",
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
    this.onCloseCompleted = this.onCloseCompleted.bind(this);
    this.onOpenCompleted = this.onOpenCompleted.bind(this);
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

  showCompleted = () => {
    this.setState({ completed: true });
  };

  hideCompleted = () => {
    this.setState({ completed: false });
  };

  onCloseCompleted() {
    this.hideCompleted();
  }

  onOpenCompleted() {
    this.showCompleted();
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
          <Title>
            <h1>{this.state.title}</h1>
            <a
              href={this.state.docsURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              React {this.state.title} Docs
            </a>
          </Title>
          <Instructions>
            Place instructions here. Place instructions here. Place instructions
            here. Place instructions here. Place instructions here. Place
            instructions here. Place instructions here. Place instructions here.
            Place instructions here. Place instructions here. Place instructions
            here. Place instructions here. Place instructions here. Place
            instructions here. Place instructions here. Place instructions here.
            Place instructions here. Place instructions here. Place instructions
            here. Place instructions here. Place instructions here. Place
            instructions here. Place instructions here. Place instructions here.
            Place instructions here. Place instructions here. Place instructions
            here. Place instructions here. Place instructions here. Place
            instructions here. Place instructions here. Place instructions here.
            Place instructions here. Place instructions here. Place instructions
            here. Place instructions here.
          </Instructions>
          <div className="navbuttons">
            <Button
              backgroundColor="#00a6cc"
              position="fixed"
              top="92%"
              left="13%"
              onClick={this.showCompleted}
            >
              Quiz
            </Button>
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
        {this.state.completed ? (
          <Completed
            onClose={this.onCloseCompleted}
            onOpen={this.onOpenCompleted}
            title={this.state.title}
            number={this.state.number}
            goals={this.state.lessongoals}
          />
        ) : null}
      </Container>
    );
  }
}

export default Lesson;
