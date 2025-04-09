import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(5);

  const handleStart = async () => {
    if (!category || count <= 0) {
      alert("Please select a valid category and question count.");
      return;
    }

    // Capitalize only the first letter, rest lowercase (e.g., "JavaScript" -> "Javascript" ❌)
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    const title = `${formattedCategory}Quiz`;

    console.log("Formatted category:", formattedCategory);
    console.log("Number of questions:", count);

    try {
      const response = await fetch(
        `http://localhost:8080/quiz/create?category=${formattedCategory}&numQ=${count}&title=${title}`,
        { method: "POST" }
      );

      if (!response.ok) {
        throw new Error("Failed to create quiz");
      }

      const data = await response.json();
      const quizId = data.quizId;
      console.log("Quiz created with ID:", quizId); // ✅ Log here

      setShowModal(false);
      navigate("/quiz", { state: { quizId: quizId } }); // ✅ Use `id` key (match your quiz page)
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to start quiz. Try again later.");
    }
  };

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-center tracking-wide">
        🚀 Welcome to the Quiz App!
      </h1>
      <p className="text-lg text-gray-400 mb-10 text-center max-w-md">
        Ready to challenge your knowledge? Pick a category and test your coding skills with fun interactive quizzes.
      </p>
      <button
        onClick={() => setShowModal(true)}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-500/50 transition duration-300 ease-in-out"
      >
        Start Quiz
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-transparent text-white rounded-2xl p-8 w-full max-w-md shadow-2xl border border-gray-600">
            <h2 className="text-3xl font-bold mb-6 text-center">🧠 Quiz Preferences</h2>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-bold">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 rounded-lg bg-white border border-green-600 text-black"
              >
                <option value="">--Choose Category--</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="sql">SQL</option>
                <option value="algorithm">Algorithm</option> {/* Make sure to use lowercase */}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold">Number of Questions</label>
              <input
                type="number"
                value={count}
                min={1}
                onChange={(e) => setCount(parseInt(e.target.value))}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800"
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-amber-900 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleStart}
                disabled={!category || count <= 0}
                className={`px-6 py-2 rounded-lg font-medium shadow-md transition ${
                  !category || count <= 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartQuiz;
