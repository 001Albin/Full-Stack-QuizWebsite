import { useState } from "react";
export default function About() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 mt-8">
        <div className="max-w-3xl bg-gray-950 p-10 rounded-2xl shadow-lg border border-gray-800">
          <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">About Our Quiz for Programmers</h1>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Welcome to the <span className="text-blue-400 font-semibold">Programmers' Quiz</span> – a fun and challenging platform designed to test and enhance your coding knowledge!
          </p>
  
          <div className="mt-8 space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-400">🧠 Improve Your Skills</h2>
              <p className="text-gray-400 mt-2">
                Solve questions on various topics like **Data Structures, Algorithms, Databases, OOP, and Web Development**.
              </p>
            </div>
  
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-yellow-400">🚀 Multiple Difficulty Levels</h2>
              <p className="text-gray-400 mt-2">
                Questions are categorized into **Easy, Medium, and Hard** levels to help you progress step by step.
              </p>
            </div>
  
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-400">🎯 Stay Competitive</h2>
              <p className="text-gray-400 mt-2">
                Challenge yourself and track your improvement over time. Perfect for **interview prep** and **competitive coding**!
              </p>
            </div>
          </div>
  
          <div className="mt-10 text-center">
            <p className="text-gray-400">Ready to test your skills?</p>
            <a href="/" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Start the Quiz
            </a>
          </div>
        </div>
      </div>
    );
  }
  