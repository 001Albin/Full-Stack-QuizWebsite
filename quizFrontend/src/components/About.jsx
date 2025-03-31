import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 mt-5">
      <div className="max-w-7xl w-full bg-gray-950 p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-4">About Our Quiz for Programmers</h1>
        <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
          Welcome to the <span className="text-blue-400 font-semibold">Programmers' Quiz</span> – a dynamic platform designed to challenge, educate, and inspire coders of all levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-400">🎯 Our Aim</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Our aim is to provide a platform that not only tests your coding knowledge but also fosters a community of continuous learning and improvement. We strive to make learning engaging and accessible for everyone passionate about programming.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-400">🧠 Improve Your Skills</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Dive into diverse topics like <strong>Data Structures, Algorithms, Databases, OOP, and Web Development</strong>, and sharpen your problem-solving abilities.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-yellow-400">🚀 Multiple Difficulty Levels</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Progress at your own pace with questions ranging from <strong>Easy to Hard</strong>, ensuring a gradual and effective learning curve.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-400">🎯 Stay Competitive</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Challenge yourself, track your progress, and prepare for <strong>interviews and competitive coding</strong> with our carefully curated questions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-orange-400">🌐 Community and Learning</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Join a community of like-minded programmers, share your experiences, and learn from each other. Our platform is more than just a quiz; it's a stepping stone to becoming a better coder.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-cyan-400">💡 Instant Feedback</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Receive instant feedback on your answers to understand where you excelled and where you can improve, enhancing your learning experience.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Ready to test your skills and join our community?</p>
          <a href="/" className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
            Start the Quiz
          </a>
        </div>
      </div>
    </div>
  );
}