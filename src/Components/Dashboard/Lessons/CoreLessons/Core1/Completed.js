import React, { Component } from "react";
import { Overlay, ModalContent, QuizDialog, Wavy } from "./Core1SC";
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
      redirect: false,
      correcta: true,
      correctb: true,
      correctc: true,
      correctd: true
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
    this.setState({
      progress: this.state.progress + 1,
      correcta: true,
      correctb: true,
      correctc: true,
      correctd: true
    });
  }

  correct = () => {
    return this.state.progress + 1 < this.state.total ? this.upQuiz() : null;
  };

  wrong = value => {
    this.setState({ [`correct${value}`]: false });
  };

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
    return (
      <div>
        <Overlay />
        <ModalContent onClick={this.onOverlayClick.bind(this)} />

        <QuizDialog onClick={this.onDialogClick}>
          <Wavy>Pop Quiz!</Wavy>
          <br />
          <br />
          <Quiz
            progress={this.state.progress}
            total={this.state.total}
            lesson_id={this.props.lesson_id}
            upQuiz={this.upQuiz}
            correct={this.correct}
            wrong={this.wrong}
            correcta={this.state.correcta}
            correctb={this.state.correctb}
            correctc={this.state.correctc}
            correctd={this.state.correctd}
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
