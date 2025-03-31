import { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8080/question/allQuestions", {
        params: { pass: password }, // Send password as a query parameter
      });
      setQuestions(response.data); // Store the received questions
    } catch (err) {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
  {!questions.length ? (
    <form onSubmit={handleSubmit} className="bg-gray-950 p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Password to Access Quiz</h2>
      
      <div className="space-y-4"> {/* Added space between input and button */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-lg border border-gray-950 focus:ring-2 focus:ring-blue-500 bg-gray-700"
        />
        
        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700">
          Submit
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
    </form>
  ) : (
    <div className="w-full max-w-3xl space-y-6 pt-10">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">Question Bank!</h2>
      {questions.map((question) => (
        <div key={question.id} className="bg-gray-950 rounded-2xl shadow-lg p-6 mb-6 border border-gray-700">
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
