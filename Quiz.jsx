import { decode } from "html-entities";
import { clsx } from "clsx";
import { nanoid } from "nanoid";
import React from "react";

export default function Quiz(props) {
  const [questionsArray, setQuestionsArray] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  let correctScore = questionsArray.filter((question) => {
    return (
      question.selectedIndex !== null &&
      question.answers[question.selectedIndex] === question.correctAnswer
    );
  }).length;

  function setObjects() {
    if (!Array.isArray(props.data) || props.data.length === 0) return [];

    let newarray = [];
    props.data.forEach(function (quiz) {
      newarray.push({
        question: quiz.question,
        answers: [quiz.correct_answer, ...quiz.incorrect_answers],
        correctAnswer: quiz.correct_answer,
        selectedIndex: null,
        id: nanoid(),
      });
    });

    newarray.forEach(function (question) {
      shuffleAnswer(question.answers);
    });

    function shuffleAnswer(combined) {
      for (let i = combined.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = combined[i];
        combined[i] = combined[j];
        combined[j] = temp;
      }
      return combined;
    }
    return newarray;
  }

  function holdAnswer(questionIndex, answerIndex) {
    setQuestionsArray(function (prevValue) {
      return prevValue.map(function (question, index) {
        if (index === questionIndex) {
          return {
            ...question,
            selectedIndex: answerIndex,
          };
        } else {
          return { ...question };
        }
      });
    });
  }

  function checkAnswer() {
    if (!showResults) {
      setShowResults(true);
    } else {
      props.reload();
    }
  }

  const quizEl = questionsArray.map(function (question, questionIndex) {
    return (
      <section key={question.id} className="quiz-box">
        <h2>{decode(question.question)}</h2>
        {question.answers.map(function (answer, answerIndex) {
          const isCorrect = showResults && answer === question.correctAnswer;
          const isWrong = showResults && !isCorrect;
          const isSelected = answerIndex === question.selectedIndex;
          const isDisabled = showResults;

          return (
            <button
              key={question.id + answer}
              disabled={showResults}
              className={clsx(
                "answer-btn",
                isSelected && "selected",
                isCorrect && "correct",
                isWrong && isSelected && "wrong",
                isDisabled && isWrong && !isSelected && "disabled"
              )}
              onClick={() => {
                holdAnswer(questionIndex, answerIndex);
              }}
            >
              {decode(answer)}
            </button>
          );
        })}
        <div className="grey-line"></div>
      </section>
    );
  });

  React.useEffect(() => {
    if (!Array.isArray(props.data) || props.data.length === 0) return;

    const newArr = setObjects();
    setQuestionsArray(newArr);
    setShowResults(false);
  }, [props.data]);

  if (questionsArray.length === 0) {
    return <p>loading quiz...</p>;
  }

  return (
    <div className="quiz-section">
      {quizEl}
      <div className="results-box">
        {showResults && (
          <p className="score">
            You scored {correctScore} / {questionsArray.length} correct answers
          </p>
        )}
        <button
          className="check-answers"
          onClick={() => {
            checkAnswer();
          }}
        >
          {showResults ? "Play Again" : "Check answers"}
        </button>
      </div>
    </div>
  );
}
