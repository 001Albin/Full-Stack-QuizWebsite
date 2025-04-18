import { useState } from "react";
import { FaLock } from "react-icons/fa";
import axios from "axios";

export default function Auth() {
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://full-stack-quizwebsite-9sk5.onrender.com/question/allQuestions",
        {
          params: { pass: password },
        }
      );
      setQuestions(response.data);
    } catch (err) {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
      {!questions.length ? (
        <form onSubmit={handleSubmit} className="bg-gray-950 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Enter Password to Access Quiz</h2>

          <div className="relative w-full">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-gray-400 shadow-md"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 mt-4">
            Submit
          </button>

          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        </form>
      ) : (
        <div className="w-full max-w-3xl space-y-6 pt-10">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">Question Bank!</h2>
          {questions.map((question) => (
            <div key={question.id} className="relative bg-gray-950 rounded-2xl shadow-lg p-6 mb-6 border border-gray-700">
              <span
                className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${question.difficultylevel === "easy"
                    ? "bg-green-800 text-green-300"
                    : question.difficultylevel === "medium"
                      ? "bg-yellow-800 text-yellow-300"
                      : "bg-red-800 text-red-300"
                  }`}
              >
                {question.difficultylevel.charAt(0).toUpperCase() + question.difficultylevel.slice(1)}
              </span>


              <p className="text-sm font-medium text-blue-400">Question ID: {question.id}</p>
              <p className="text-xl font-semibold mb-4">{question.questionTitle}</p>
              <p className="text-gray-400">Option 1: {question.option1}</p>
              <p className="text-gray-400">Option 2: {question.option2}</p>
              <p className="text-gray-400">Option 3: {question.option3}</p>
              <p className="text-gray-400">Option 4: {question.option4}</p>
              <p className="text-green-400 font-medium mb-2">Right Answer: {question.rightAnswer}</p>
              <p className="text-gray-500 text-sm">Category: {question.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
