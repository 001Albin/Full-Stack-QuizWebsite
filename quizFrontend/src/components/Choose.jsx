import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  const handleStart = async () => {
    const response = await fetch(`http://localhost:8080/quiz?category=${category}&count=${count}`);
    const questions = await response.json();
    navigate("/quiz", { state: { questions } });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4 font-semibold">Select Quiz Preferences</h2>

      <div className="mb-3">
        <label className="block mb-1">Select Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 w-full">
          <option value="">--Choose--</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="block mb-1">Number of Questions</label>
        <input type="number" value={count} onChange={e => setCount(e.target.value)} className="border p-2 w-full" />
      </div>

      <button onClick={handleStart} className="bg-green-600 text-white px-4 py-2 rounded">Start</button>
    </div>
  );
};

export default Choose;
