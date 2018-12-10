import React, { Component } from "react";
import { Overlay, ModalContent, Dialog } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";

class Goals extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
    let goalsDisplay = this.props.goals.map((e, i) => {
      return (
        <div key={i}>
          <p>
            {i + 1}: {e}
          </p>
        </div>
      );
    });

    return (
      <div>
        <Overlay />
        <ModalContent onClick={this.onOverlayClick.bind(this)} />
        <Dialog onClick={this.onDialogClick}>
          <h1>
            Lesson {this.props.number}: {this.props.title}
          </h1>
          <br />
          <h2>What You Will Learn:</h2>
          <br />
          {goalsDisplay}
          <h2>Click anywhere to start!</h2>
          <br />
          <br />
          <Button>Back To Lessons</Button>
        </Dialog>
      </div>
    );
  }
}

export default Goals;
