import React from "react";
import { FaCode, FaJava, FaPython, FaDatabase, FaJs } from 'react-icons/fa';
import { SiC } from 'react-icons/si'; // Import C icon properly
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleStartLearning = () => {
    navigate("/start"); // Navigate to /choose when button is clicked
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 mt-6">
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

      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold mb-3 tracking-tight leading-tight text-green-500">
          Master Coding with Interactive Quizzes
        </h1>
        <p className="text-lg text-gray-300">
          Elevate your programming skills through engaging and challenging quizzes.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6">
        {/* Quiz Info */}
        <div className="w-full lg:w-1/2 bg-black-500 bg-opacity-80 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Advance Your Coding Expertise
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
            Dive into quizzes designed to sharpen your problem-solving skills and enhance your logical thinking.
            Test your knowledge with various challenges that cover algorithms, programming languages, and database management.
            Stay ahead by learning industry-standard concepts and improving your efficiency as a coder.
          </p>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2 text-lg">🚀</span>
              Interactive Learning & Skill Enhancement
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2 text-lg">💡</span>
              In-Depth Conceptual Understanding
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2 text-lg">🏆</span>
              Track Progress & Compete
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 text-lg">🎯</span>
              Customized Challenges
            </li>
          </ul>
          <div className="mt-6 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 text-sm"
              onClick={handleStartLearning}>
              Start Learning Now
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center mb-6">Choose a Coding Category to Begin Your Learning Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black-500 p-6 rounded-3xl shadow-lg border border-gray-700 text-center transform transition-transform hover:scale-105">
                <FaCode className="text-4xl text-black-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Algorithms</h3>
                <p className="text-gray-400 text-sm">Problem-solving skills.</p>
              </div>
            </a>

            <a href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black-500 p-6 rounded-3xl shadow-lg border border-gray-700 text-center transform transition-transform hover:scale-105">
                <FaJava className="text-4xl text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-green-400">Java</h3>
                <p className="text-gray-400 text-sm">Java fundamentals.</p>
              </div>
            </a>

            <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black-500 p-6 rounded-3xl shadow-lg border border-gray-700 text-center transform transition-transform hover:scale-105">
                <FaPython className="text-4xl text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Python</h3>
                <p className="text-gray-400 text-sm">Python versatility.</p>
              </div>
            </a>

            <a href="https://www.learn-c.org/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black-500 p-6 rounded-3xl shadow-lg border border-gray-700 text-center transform transition-transform hover:scale-105">
                <SiC className="text-4xl text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-red-400">C</h3>
                <p className="text-gray-400 text-sm">C programming basics.</p>
              </div>
            </a>

            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black-500 p-6 rounded-3xl shadow-lg border border-gray-700 text-center transform transition-transform hover:scale-105">
                <FaDatabase className="text-4xl text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">SQL</h3>
                <p className="text-gray-400 text-sm">Database management and queries.</p>
              </div>
            </a>

            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer">
              <div className="bg-black-500 p-6 rounded-3xl shadow-lg border border-gray-700 text-center transform transition-transform hover:scale-105">
                <FaJs className="text-4xl text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-orange-400">JavaScript</h3>
                <p className="text-gray-400 text-sm">Web development fundamentals.</p>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
