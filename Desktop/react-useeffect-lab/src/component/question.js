import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setTimeRemaining(10);
    setAnswered(false);
  }, [question]);

  useEffect(() => {
    if (answered) return;

    const timeout = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        setAnswered(true);
        onAnswered(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeRemaining, answered, onAnswered]);

  return (
    <div className="question">
      <h2>{question.text}</h2>
      <p>Time Remaining: {timeRemaining}</p>
      <ul>
        {question.answers.map((answer) => (
          <li
            key={answer}
            onClick={() => {
              if (answered) return;
              setAnswered(true);
              onAnswered(answer === question.correct);
            }}
            style={{ cursor: answered ? 'default' : 'pointer', color: answered ? 'gray' : 'black' }}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
