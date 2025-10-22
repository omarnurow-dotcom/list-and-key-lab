import React, { useState, useCallback } from "react";
import Question from "./component/question";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      text: "What is the capital of Kenya?",
      answers: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
      correct: "Nairobi",
    },
    {
      text: "What color is the sky?",
      answers: ["Blue", "Red", "Green", "Purple"],
      correct: "Blue",
    },
  ];

  const handleAnswer = useCallback((result) => {
    console.log("Answered:", result);
    setQuestionIndex((prev) => (prev + 1) % questions.length);
  }, [questions.length]);

  return (
    <div className="App">
      <h1>Trivia App</h1>
      <Question question={questions[questionIndex]} onAnswered={handleAnswer} />
    </div>
  );
}

export default App;

