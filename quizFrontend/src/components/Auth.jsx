import { useState } from "react";
import { FaLock, FaFilter, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function Auth() {
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questionToDelete, setQuestionToDelete] = useState(null);

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

  const handleFilterClick = () => {
    setFilterVisible(!filterVisible);
  };

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setFilterVisible(false);

    try {
      const response = await axios.get(
        `https://full-stack-quizwebsite-9sk5.onrender.com/question/category/${category}`
      );
      setQuestions(response.data);
    } catch (err) {
      setError("Unable to fetch questions for the selected category.");
    }
  };

  const handleDeleteQuestion = (id) => {
    axios
      .delete(`https://full-stack-quizwebsite-9sk5.onrender.com/question/delete/${id}`)
      .then(() => {
        setQuestions(questions.filter((question) => question.id !== id));
        setQuestionToDelete(null);
      })
      .catch(() => {
        setError("Failed to delete the question.");
      });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
       <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          {/* Existing blurs */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-600 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-600 rounded-full blur-lg"></div>

          {/* Additional blurs */}
          <div className="absolute top-20 right-1/3 w-20 h-20 bg-pink-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-yellow-400 rounded-full blur-xl"></div>
          <div className="absolute top-1/4 right-20 w-16 h-16 bg-green-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-500 rounded-full blur-2xl"></div>
        </div>
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
        <div className="w-full max-w-2xl space-y-6 pt-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-500 text-center">Question Bank!</h2>
            <div className="flex space-x-4">
              <button
                onClick={handleFilterClick}
                className="text-white text-lg p-2 border-2 border-gray-800 rounded-full hover:bg-gray-700"
              >
                <FaFilter />
              </button>
              <button
                onClick={() => alert("Add Question functionality will be implemented later.")}
                className="text-white text-lg p-2 border-2 border-gray-800 rounded-full hover:bg-gray-700"
              >
                <FaPlus />
              </button>
              <button
                onClick={() => alert("Delete functionality will be implemented later.")}
                className="text-white text-lg p-2 border-2 border-gray-800 rounded-full hover:bg-gray-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>

          {/* Filter Pop-up (Glass effect Dialog) */}
          {filterVisible && (
           <div className="fixed inset-0 bg-transpernt flex items-center justify-center z-50">
           <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 max-w-xs w-full">
             <h3 className="text-xl font-semibold text-center text-blue-500 mb-4">Select Category</h3>
             {["Java", "Python", "C", "SQL", "JavaScript", "Algorithm"].map((category) => (
               <button
                 key={category}
                 onClick={() => handleCategorySelect(category)}
                 className="w-full text-left text-white p-3 mb-2 rounded-lg bg-black hover:bg-blue-700 transition"
               >
                 {category}
               </button>
             ))}
           </div>
         </div>
         
          )}

          {/* Display Questions */}
          {questions.map((question) => (
            <div key={question.id} className="relative bg-gray-950 rounded-2xl shadow-lg p-6 mb-6 border border-gray-700">
              <span
                className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                  question.difficultylevel === "easy"
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
