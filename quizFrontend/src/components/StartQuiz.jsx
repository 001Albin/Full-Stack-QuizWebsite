import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz App!</h1>
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate("/choose")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
