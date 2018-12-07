import React, { Component } from "react";

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
          q_id: 0,
          text: "How many best friends made this project?"
        }
      ],
      answers: []
    };
  }

  render() {
    return (
      <div>
        <h1>Quiz</h1>
      </div>
    );
  }
}

export default Quiz;
