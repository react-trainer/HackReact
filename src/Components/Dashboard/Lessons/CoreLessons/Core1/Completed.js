import React, { Component } from "react";
import { Overlay, ModalContent, QuizDialog } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";
import Quiz from "./Quiz";
import PropTypes from "prop-types";

class Completed extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      finished: false,
      correct: 0,
      progress: 0,
      questions: [
        {
          question_id: 0,
          text: "How many best friends made this project?",
          correct_answer: "d",
          answers: ["3", "5", "Jerry", "4"]
        }
      ],
      quiz_id: 1
    };
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

  render() {
    return (
      <div>
        <Overlay />
        <ModalContent onClick={this.onOverlayClick.bind(this)} />

        <QuizDialog onClick={this.onDialogClick}>
          <h1>
            You have finished Lesson {this.props.number}: {this.props.title}!
          </h1>
          <br />
          <h2>Ready to put your knowledge to the test?</h2>
          <br />
          <Quiz
            index={this.state.index}
            finished={this.state.finished}
            correct={this.state.correct}
            progress={this.state.progress}
            questions={this.state.questions}
            lesson_id={this.props.lesson_id}
          />
          <br />
          <br />
          <Button>Next Question</Button>
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
