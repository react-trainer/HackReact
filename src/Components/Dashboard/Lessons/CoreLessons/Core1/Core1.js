import React, { Component } from "react";
import Goals from "./Goals";
import Completed from "./Completed";
import { Link, Redirect } from "react-router-dom";
import { Container, Content, Editor, Title, Instructions } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";
import axios from "axios";

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson_info: {},
      goals: true,
      completed: false,
      lesson_number: this.props.match.params.id,
      lesson_title: "Title",
      lesson_description: ["loading!"],
      lesson_content: { test: "loading!" },
      docs_url: "https://reactjs.org/docs/components-and-props.html",
      iframe: "",
      module: "/src/App.js"
    };
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onCloseCompleted = this.onCloseCompleted.bind(this);
    this.onOpenCompleted = this.onOpenCompleted.bind(this);
    this.getLesson = this.getLesson.bind(this);
  }

  componentDidMount() {
    this.getLesson();
  }
  componentDidUpdate(prevProps) {
    console.log("updated");
    console.log("prev" + prevProps.match.params.id);
    console.log("next" + this.props.match.params.id);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getLesson();
    }
  }
  getLesson() {
    axios
      .get(`/api/lesson/${this.props.match.params.id}`)
      .then(response =>
        this.setState({ lesson_info: response.data }, () => this.showGoals())
      );
  }

  showGoals = () => {
    this.setState({
      goals: true,
      lesson_number: this.state.lesson_info[0].lesson_number,
      lesson_title: this.state.lesson_info[0].lesson_title,
      lesson_description: this.state.lesson_info[0].lesson_description,
      lesson_content: this.state.lesson_info[0].lesson_content,
      code_snips: this.state.lesson_info[0].code_snips,
      docs_url: this.state.lesson_info[0].docs_url,
      iframe: this.state.lesson_info[0].iframe
    });
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
    const { lesson_content } = this.state;
    {
      console.log(lesson_content);
    }
    let contentMap = Object.keys(lesson_content).map((e, i) => {
      if (e.includes("img")) {
        return <img alt={"screenshot"} src={[lesson_content[e]]} />;
      } else if (e.includes("title")) {
        return <h2>{[lesson_content[e]]}</h2>;
      } else if (e.includes("content")) {
        return [lesson_content[e]];
      } else {
        return parseInt(e) + ".) " + [lesson_content[e]];
      }
    });
    {
      console.log(contentMap);
    }
    let contentDisplay = contentMap.map((e, i) => {
      return (
        <div key={i}>
          <br />
          {e}
          <br />
          <br />
        </div>
      );
    });

    return (
      <Container>
        {this.state.goals ? (
          <Goals
            onClose={this.onClose}
            onOpen={this.onOpen}
            title={this.state.lesson_title}
            number={this.state.lesson_number}
            goals={this.state.lesson_description}
          />
        ) : null}
        <Content>
          <Title>
            <h1>{this.state.lesson_title}</h1>
            <a
              href={this.state.docs_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              React {this.state.lesson_title} Docs
            </a>
          </Title>
          <Instructions>{contentDisplay}</Instructions>
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
            lesson_id={this.state.lesson_number}
            lesson_title={this.state.lesson_title}
            renderRedirect={this.renderRedirect}
          />
        ) : null}
      </Container>
    );
  }
}

export default Lesson;
