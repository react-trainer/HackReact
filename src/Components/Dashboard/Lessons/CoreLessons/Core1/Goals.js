import React, { Component } from "react";
import { Overlay, ModalContent, Dialog, Wavy, Spread } from "./Core1SC";

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
          <Wavy>
            {this.props.title}
          </Wavy>
          <Spread>
            <h2>What You Will Learn:</h2>

            <h3>{this.props.goals}</h3>

            <h2>Click anywhere to start!</h2>
          </Spread>
        </Dialog>
      </div>
    );
  }
}

export default Goals;
