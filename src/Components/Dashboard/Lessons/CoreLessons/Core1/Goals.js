import React, { Component } from "react";

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
        <div>
          <div key={i}>
            <p>
              {i + 1}: {e}
            </p>
          </div>
          <br />
        </div>
      );
    });

    return (
      <div>
        <div className="modal-overlay-div" />
        <div
          className="modal-content-div"
          onClick={this.onOverlayClick.bind(this)}
        >
          <div className="modal-dialog-div" onClick={this.onDialogClick}>
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
            <button>Back To Lessons</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
