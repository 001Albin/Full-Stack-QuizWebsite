import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quizId = location.state?.quizId;

  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false); // NEW

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://full-stack-quizwebsite-9sk5.onrender.com/quiz/get/${quizId}`);
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setQuestions(data);
        } else {
          alert("No questions found for this quiz.");
        }
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
        alert("Failed to load quiz questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (quizId) {
      fetchQuizQuestions();
    } else {
      alert("Invalid quiz ID. Redirecting...");
      navigate("/");
    }
  }, [quizId, navigate]);

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
  
    console.log("Submitting payload:", payload); // 👈 This should show up in the console
  
    setSubmitting(true);
  
    try {
      const res = await fetch(`https://full-stack-quizwebsite-9sk5.onrender.com/quiz/submit/${quizId}`, {
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
    } finally {
      setSubmitting(false);
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-pulse mt-3 pb-4">
        🚀Quiz For  Programmers
      </h1>

      {loading ? (
        <div className="text-center text-cyan-400 text-lg font-semibold animate-pulse">
          ⏳ Loading quiz questions...
        </div>
      ) : questions.length === 0 ? (
        <div className="text-center text-red-400 text-lg">
          ❌ No questions found for this quiz.
        </div>
      ) : (
        questions.map((question, index) => (
          <div
            key={question.id}
            className="bg-[#0f0f0f] border border-cyan-500 rounded-2xl p-6 mb-8 shadow-md hover:shadow-cyan-500/30 transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-4 text-cyan-400 pt-5">
              Q{index + 1}: {question.questionTitle}
            </h2>

            <div className="space-y-3">
              {["option1", "option2", "option3", "option4"].map((optKey, i) => {
                const optionText = question[optKey];
                if (!optionText) return null;

                return (
                  <label
                    key={i}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-200 border border-transparent ${
                      responses[question.id] === optionText
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold"
                        : "hover:bg-gray-800 border-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={optionText}
                      checked={responses[question.id] === optionText}
                      onChange={() => handleOptionChange(question.id, optionText)}
                      className="mr-3 accent-cyan-400"
                    />
                    <span>
                      {String.fromCharCode(65 + i)}. {optionText}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))
      )}

      {!loading && questions.length > 0 && score === null && (
        <div className="text-center mt-10">
          {submitting ? (
            <div className="text-cyan-400 font-semibold text-lg animate-pulse">
              🚀 Submitting your answers...
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-300 text-black shadow-lg hover:scale-105"
            >
              ✅ Submit Quiz
            </button>
          )}
        </div>
      )}

      {score !== null && (
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
