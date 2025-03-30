import { useState, useEffect } from "react";
import axios from "axios";

export default function Auth() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "mysql202411") {
      setAuthenticated(true);
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  useEffect(() => {
    if (authenticated) {
      axios
        .get("http://localhost:8080/question/allQuestions")
        .then((response) => {
          console.log("Fetched Questions:", response.data);
          setQuestions(response.data);
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
        });
    }
  }, [authenticated]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white"> {/* Dark background, text-white */}
      {/* Password Form */}
      {!authenticated ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-950 p-8 rounded-2xl shadow-lg w-full max-w-md transform transition-all duration-500 hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Enter Password to Access Quiz
          </h2>
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 bg-gray-700" // Darker input
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center animate-pulse">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="w-full max-w-3xl space-y-6 pt-10">
          {/* Quiz Header */}
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">
            Question Bank!
          </h2>

          {/* Questions List */}
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-gray-950 rounded-2xl shadow-lg p-6 mb-6 border border-gray-700 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1" // Darker question box
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-medium text-blue-400">
                  Question ID: {question.id}
                </p>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    question.difficultylevel === "Easy"
                      ? "bg-green-800 text-green-300" // Darker difficulty tags
                      : question.difficultylevel === "Medium"
                      ? "bg-yellow-800 text-yellow-300"
                      : "bg-red-800 text-red-300"
                  }`}
                >
                  {question.difficultylevel}
                </span>
              </div>
              <p className="text-xl font-semibold mb-4">
                {question.questionTitle}
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-400">Option 1: {question.option1}</p>
                <p className="text-gray-400">Option 2: {question.option2}</p>
                <p className="text-gray-400">Option 3: {question.option3}</p>
                <p className="text-gray-400">Option 4: {question.option4}</p>
              </div>
              <p className="text-green-400 font-medium mb-2">
                Right Answer: {question.rightAnswer}
              </p>
              <p className="text-gray-500 text-sm">
                Category: {question.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}