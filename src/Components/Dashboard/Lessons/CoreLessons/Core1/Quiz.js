import React, { Component } from "react";
import { Answer, Swal1 } from "./Core1SC";
import swal from "sweetalert";

class Quiz extends Component {
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
      answers: []
    };
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
            <Answer onClick={() => this.checkAnswer("a", e.correct_answer)}>
              <h4 key={i}>a. {f} </h4>
            </Answer>
          );
        } else if (j === 1) {
          return (
            <Answer onClick={() => this.checkAnswer("b", e.correct_answer)}>
              <h4 key={i}>b. {f}</h4>
            </Answer>
          );
        } else if (j === 2) {
          return (
            <Answer onClick={() => this.checkAnswer("c", e.correct_answer)}>
              <h4 key={i}>c. {f}</h4>
            </Answer>
          );
        } else if (j === 3) {
          return (
            <Answer onClick={() => this.checkAnswer("d", e.correct_answer)}>
              <h4 key={i}>d. {f}</h4>
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

export default Quiz;
