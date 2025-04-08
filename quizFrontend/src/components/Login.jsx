import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log("User Login:", { userEmail, userPassword });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("User SignUp:", { userName, userEmail, userPassword });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-black-500 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Description */}
        <div className="hidden md:flex flex-col justify-center p-8 w-1/2 bg-black-500">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Welcome Back!</h2>
          <p className="text-gray-400 text-lg">
            Access your account and continue exploring the world of coding challenges and quizzes. Improve your skills and compete with others!
          </p>
        </div>
        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            {isSignUp ? "Create an Account" : "Sign In"}
          </h2>
          <form onSubmit={isSignUp ? handleSignUp : handleUserLogin} className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
            <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <button className="text-gray-400 hover:underline">Forgot Password?</button>
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-gray-400 hover:underline">
              {isSignUp ? "Already have an account?" : "Don't have an account? Sign Up"}
            </button>
          </div>
          <hr className="my-4 border-gray-700" />
          <p className="text-gray-400 text-sm mb-2">Only authorized administrators can access the admin portal.</p>
          <button
            onClick={() => navigate("/auth")}
            className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold"
          >
            Go to Admin Portal
          </button>
        </div>
      </div>
    </div>
  );
}
