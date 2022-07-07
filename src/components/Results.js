import React, { Component } from "react";

export default class Results extends Component {
  constructor(props) {
    super();
  }
  render() {
    let { questions, answers } = this.props;
    if (!questions && !answers.lenght>0) {
      return "answers donot have data it is loading";
    }
    return (
     
      <div className="table-container">
           <table className="styled-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>You selected</th>
              <th>Right or Wrong</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer, index) => {
              return (
                <tr
                  key={answer}
                  className={
                    answer === questions[index].correct_answer
                      ? "active-row"
                      : "false"
                  }
                >
                  <td>{questions[index].question}</td>
                  <td>{questions[index].correct_answer}</td>
                  <td>{answer}</td>
                  <td>
                    {answer === questions[index].correct_answer
                      ? "true"
                      : "false"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
