import React, { Component } from "react";
import { Answer, Swal1 } from "./Core1SC";
import swal from "sweetalert";
import PropTypes from "prop-types";
import axios from "axios";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quiz_info: [{ answers: ["a", "b", "c", "d"] }]
    };
    this.getQuiz = this.getQuiz.bind(this);
  }

  componentDidMount() {
    this.getQuiz();
  }

  getQuiz() {
    axios
      .get(`/api/quiz/${this.props.lesson_id}`)
      .then(response => this.setState({ quiz_info: response.data }))
      .catch(err => console.log(err));
  }

  checkAnswer = (value, correct) => {
    return value === correct ? alert("got it!") : alert("nope!");
  };

  render() {
    let quizdisplay = this.state.quiz_info.map((e, i) => {
      return (
        <div>
          <h2>{e.question_text}</h2>
          <Answer
            key={0}
            onClick={() => this.checkAnswer("a", e.correct_answer)}
          >
            a. {e.answers[0]}
          </Answer>

          <Answer
            key={1}
            onClick={() => this.checkAnswer("b", e.correct_answer)}
          >
            b. {e.answers[1]}
          </Answer>

          <Answer
            key={2}
            onClick={() => this.checkAnswer("c", e.correct_answer)}
          >
            c. {e.answers[2]}
          </Answer>

          <Answer
            key={3}
            onClick={() => this.checkAnswer("d", e.correct_answer)}
          >
            d. {e.answers[3]}
          </Answer>
        </div>
      );
    });
    console.log(quizdisplay);
    return <div>{quizdisplay[this.props.progress]}</div>;
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
