import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../Services/TriviaConfig';
import Question from '../../Data/Question';
import Results from '../Result/Result';
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await fetchQuestions();
      setQuestions(questions);
    };

    getQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  };
  
  if (showResults) {
    return <Results score={score} />;
  }

  return (
    <div className="quiz">
      <div className="title">
        
        
      </div>
      <div className="mainContent">
        {questions.length > 0 ? (
          <div className="question-container">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="options-container">
              {questions[currentQuestionIndex].incorrect_answers.map((answer, index) => (
                <div
                  key={index}
                  className="option"
                  onClick={() => handleAnswer(false)}
                >
                  {answer}
                </div>
              ))}
              <div
                className="option"
                onClick={() => handleAnswer(true)}
              >
                {questions[currentQuestionIndex].correct_answer}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
