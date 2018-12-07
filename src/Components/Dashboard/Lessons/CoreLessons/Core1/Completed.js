import React, { Component } from "react";
import { Overlay, ModalContent, QuizDialog } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";
import Quiz from "./Quiz";

class Completed extends Component {
  constructor() {
    super();
    this.state = {};
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
          <Quiz />
          <br />
          <br />
          <Button>Next Question</Button>
        </QuizDialog>
      </div>
    );
  }
}

export default Completed;
