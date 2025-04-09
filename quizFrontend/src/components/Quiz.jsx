import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quizId = location.state?.quizId;
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const res = await fetch(`http://localhost:8080/quiz/get/${quizId}`);
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    if (quizId) {
      fetchQuizQuestions();
    }
  }, [quizId]);

  const handleOptionChange = (questionId, selectedOption) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    const payload = Object.entries(responses).map(([id, response]) => ({
      id: Number(id),
      response,
    }));

    try {
      const res = await fetch(`http://localhost:8080/quiz/submit/${quizId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      setScore(result);
    } catch (error) {
      console.error("Error submitting quiz", error);
      alert("Failed to submit quiz. Try again.");
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleRestart = () => {
    setResponses({});
    setScore(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-10 px-4 pt-15">
    <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-pulse">
      🚀 Quiz For Programmers
    </h1>
  
    {questions.map((question, index) => (
      <div
        key={question.id}
        className="bg-[#0f0f0f] border border-cyan-500 rounded-2xl p-6 mb-8 shadow-md hover:shadow-cyan-500/30 transition-shadow duration-300"
      >
        <h2 className="text-xl font-bold mb-4 text-cyan-400">
          Q{index + 1}: {question.questionTitle}
        </h2>
  
        <div className="space-y-3">
          {["option1", "option2", "option3", "option4"].map((optKey, i) => (
            <label
              key={i}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition duration-200 ${
                responses[question.id] === question[optKey]
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold"
                  : "hover:bg-gray-800"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={question[optKey]}
                checked={responses[question.id] === question[optKey]}
                onChange={() =>
                  handleOptionChange(question.id, question[optKey])
                }
                className="mr-3 accent-cyan-400"
              />
              <span>
                {String.fromCharCode(65 + i)}. {question[optKey]}
              </span>
            </label>
          ))}
        </div>
      </div>
    ))}
  
    {score === null ? (
      <div className="text-center mt-10">
        <button
          onClick={handleSubmit}
          className="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-300 text-black shadow-lg hover:scale-105"
        >
          ✅ Submit Quiz
        </button>
      </div>
    ) : (
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold text-lime-400 mb-6 drop-shadow">
          🎉 Your Score: {score}/{questions.length}
        </h2>
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handleGoHome}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-white font-semibold shadow-lg"
          >
            🔙 Go Home
          </button>
          <button
            onClick={handleRestart}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-md"
          >
            🔄 Restart Quiz
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default Quiz;
