import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Results from "./Results";
import Questions from "./Question";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      questions: null,
      answers: [],
      userLevel: "easy",
      selectedAnswer: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=10&difficulty=${this.state.userLevel}`
    )
      .then((res) => res.json())
      .then((questions) => {
        console.log(questions);
        this.setState({
          questions: questions,
        });
      });
  }

  nextQuestion = () => {
    let step = this.state.step;
    if (step <= 8) {
      this.setState({
        step: step + 1,
      });
    }
  };

  selectOption = ({ target }) => {
    let value = target.innerText;
    let allanswers = [...this.state.answers];
    allanswers.push(value);
    this.setState({
      selectedAnswer: value,
      answers: allanswers,
    });
  };
  render() {
    let { questions, step, answers, selectedAnswer } = this.state;
    return (
      <Switch>
        <Route path="/" exact>
          <Questions
            questions={questions}
            step={step}
            answers={answers}
            selectedAnswer={selectedAnswer}
            nextQuestion={this.nextQuestion}
            selectOption={this.selectOption}
          />
        </Route>
        <Route path="/results" exact>
          <Results questions={this.state.questions} answers={answers} />
        </Route>
      </Switch>
    );
  }
}
