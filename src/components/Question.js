import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Questions extends Component {
  constructor(props) {
    super();
  }
  render() {
    let {
      questions,
      step,
      selectedAnswer,
      nextQuestion,
      selectOption,
    } = this.props;
    let index = step;
    return (
      <div>
        {questions != null ? (
          <Singlequestion
            singleQuestion={questions.results[index]}
            nextQuestion={nextQuestion}
            step={step}
            selectOption={selectOption}
            selectedAnswer={selectedAnswer}
          />
        ) : (
          " loading content wait .."
        )}
        <div className="result-button">
          {step === 9 && selectedAnswer ? (
            <Link to="/results" className="next-button">
              get result
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

function Singlequestion(props) {
  let { singleQuestion, nextQuestion, step, selectOption, selectedAnswer } =
    props;
  step = step + 1;
  let allAnswers = [...singleQuestion.incorrect_answers];
  allAnswers.push(singleQuestion.correct_answer);
  return (
    <>
      <div className="question-container">
        <div className="col question-wrapper">
          <h1 className="text-center"> Quiz website </h1>
          <h2 className="question-index">
            Question <span>{step}/10</span>
          </h2>
          <progress className="progress-bar" max="10" value={step}></progress>
          <h2 className="question-title">{singleQuestion.question}</h2>
          <div>
            {allAnswers.map((answer, index) => {
              return (
                <p
                  key={index}
                  onClick={selectOption}
                  className={
                    selectedAnswer === answer ? "selected-question" : ""
                  }
                  value={answer}
                >
                  {answer}
                </p>
              );
            })}
          </div>
        </div>
        <button className="next-button" onClick={nextQuestion}>
          next
        </button>
      </div>
    </>
  );
}
