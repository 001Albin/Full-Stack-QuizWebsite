import { useLocation } from "react-router-dom";

const Quiz = () => {
  const { state } = useLocation();
  const questions = state?.questions || [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Quiz Time!</h2>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{index + 1}. {q.questionTitle}</p>
          <ul className="list-disc ml-6">
            <li>{q.option1}</li>
            <li>{q.option2}</li>
            <li>{q.option3}</li>
            <li>{q.option4}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
