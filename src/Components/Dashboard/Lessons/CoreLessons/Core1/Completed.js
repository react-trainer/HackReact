import React, { Component } from "react";
import { Overlay, ModalContent, QuizDialog } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

class Completed extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      finished: false,
      correct: 0,
      progress: 0,
      total: 3,
      redirect: false
    };
    this.upQuiz = this.upQuiz.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  //set this up to activate certain buttons
  listenKeyboard(event) {
    if (
      event.key === "Escape" ||
      event.keyCode === 27 ||
      event.keyCode === 32 ||
      event.keyCode === 13
    ) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    this.setState({
      redirect: false
    });
    if (this.props.onClose) {
      window.addEventListener("keydown", this.listenKeyboard.bind(this), true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener(
        "keydown",
        this.listenKeyboard.bind(this),
        true
      );
    }
  }

  onOverlayClick() {
    this.props.onClose();
  }

  onDialogClick(event) {
    event.stopPropagation();
  }

  upQuiz() {
    this.setState({ progress: this.state.progress + 1 });
  }

  unmountCompleted() {
    this.setState({
      finished: false
    });
  }

  setRedirect() {
    this.setState({
      redirect: true
    });
  }

  renderRedirect() {
    return <Redirect to={`/lesson/${this.props.lesson_id + 1}`} />;
  }

  render() {
    const { redirect } = this.state;
    return (
      <div>
        <Overlay />
        <ModalContent onClick={this.onOverlayClick.bind(this)} />

        <QuizDialog onClick={this.onDialogClick}>
          <h1>
            You have finished Lesson {this.props.lesson_id}:{" "}
            {this.props.lesson_title}!
          </h1>
          <br />
          <h1>Complete the quiz!</h1>
          <br />
          <Quiz
            progress={this.state.progress}
            lesson_id={this.props.lesson_id}
          />
          <br />
          <br />
          {this.state.progress + 1 !== this.state.total ? (
            <Button onClick={this.upQuiz}>Next Question</Button>
          ) : (
            <div>
              {/* {redirect ? this.renderRedirect() : null} */}
              <Link to={`/lesson/${parseInt(this.props.lesson_id) + 1}`}>
                <Button onClick={this.props.onClose}>Next Lesson</Button>
              </Link>
            </div>
          )}
          <h1>
            {this.state.progress + 1} / {this.state.total}
          </h1>
        </QuizDialog>
      </div>
    );
  }
}

Completed.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  title: PropTypes.string,
  number: PropTypes.string,
  goals: PropTypes.array,
  lesson_id: PropTypes.number
};

export default Completed;
