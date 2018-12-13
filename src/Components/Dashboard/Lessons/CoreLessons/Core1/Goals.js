import React, { Component } from "react";
import { Overlay, ModalContent, Dialog } from "./Core1SC";
import { Button } from "../../../../resources/styles/masterStyles";
import { Link } from "react-router-dom";

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
    console.log("goals props" + this.props.goals);
    // let goalsDisplay = this.props.goals.map((e, i) => {
    //   return (
    //     <div key={i}>
    //       <p>
    //         {i + 1}: {e}
    //       </p>
    //     </div>
    //   );
    // });

    return (
      <div>
        <Overlay />
        <ModalContent onClick={this.onOverlayClick.bind(this)} />
        <Dialog onClick={this.onOverlayClick.bind(this)}>
          <h1>
            Lesson {this.props.number}: {this.props.title}
          </h1>
          <br />
          <h2>What You Will Learn:</h2>
          <br />
          <br />
          <h3>{this.props.goals}</h3>
          <br />
          <br />
          <br />
          <h2>Click anywhere to start!</h2>
          <br />
          <br />
          <Link to="/dashboard/lessons/all">
            <Button>Back To Lessons</Button>
          </Link>
        </Dialog>
      </div>
    );
  }
}

export default Goals;
