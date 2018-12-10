import React, { Component } from "react";
import { Answer, Swal1 } from "./Core1SC";
import swal from "sweetalert";
import PropTypes from "prop-types";
import axios from "axios";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quiz_info: {},
      questions: [
        {
          question_id: 0,
          text: "How many best friends made this project?",
          correct_answer: "d",
          answers: ["3", "5", "Jerry", "4"]
        }
      ]
    };
    this.getQuiz = this.getQuiz.bind(this);
  }

  componentDidMount() {
    this.getQuiz();
  }

  getQuiz() {
    axios
      .get("/api/quiz/1")
      .then(response => this.setState({ quiz_info: response.data }));
  }

  checkAnswer = (value, correct) => {
    return value === correct ? (
      <Swal1>{swal({ text: "Got it!", icon: "success", className: "" })}</Swal1>
    ) : (
      <Swal1> {swal({ text: "Nope!", icon: "error" })}</Swal1>
    );
  };

  render() {
    let quizdisplay = this.state.questions.map((e, i) => {
      let answers = e.answers.map((f, j) => {
        if (j === 0) {
          return (
            <Answer
              key={j}
              onClick={() => this.checkAnswer("a", e.correct_answer)}
            >
              a. {f}
            </Answer>
          );
        } else if (j === 1) {
          return (
            <Answer
              key={j}
              onClick={() => this.checkAnswer("b", e.correct_answer)}
            >
              b. {f}
            </Answer>
          );
        } else if (j === 2) {
          return (
            <Answer
              key={j}
              onClick={() => this.checkAnswer("c", e.correct_answer)}
            >
              c. {f}
            </Answer>
          );
        } else if (j === 3) {
          return (
            <Answer
              key={j}
              onClick={() => this.checkAnswer("d", e.correct_answer)}
            >
              d. {f}
            </Answer>
          );
        }
      });
      return (
        <div key={i}>
          <h3>{e.text}</h3>
          <br />
          {answers}
        </div>
      );
    });
    return <div>{quizdisplay}</div>;
  }
}

Quiz.propTypes = {
  index: PropTypes.number,
  finished: PropTypes.bool,
  correct: PropTypes.number,
  progress: PropTypes.number,
  questions: PropTypes.array,
  quiz_id: PropTypes.number
};

export default Quiz;
