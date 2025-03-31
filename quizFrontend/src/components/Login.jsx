import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userLogin, setUserLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log("User Login:", { username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="w-full max-w-md z-10">
        <div className="p-8 bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700">
          <div>
            <h2 className="text-center text-3xl font-semibold text-blue-300 mb-2">
              {userLogin ? "Profile Access" : "Welcome to Your Portal"}
            </h2>
            <p className="text-center text-sm text-gray-400 mb-6">
              {userLogin
                ? "Securely access your profile with your credentials."
                : "Select the portal that aligns with your role to proceed."}
            </p>
            {!userLogin && (
              <p className="text-center text-xs text-gray-500 mb-4">
                Choose the right path and embark on your journey.
              </p>
            )}
          </div>

          {!userLogin ? (
            <div className="space-y-4">
              <button
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 font-medium shadow-md"
                onClick={() => setUserLogin(true)}
              >
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  User Profile
                </span>
              </button>
              <button
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 font-medium shadow-md"
                onClick={() => navigate("/auth")}
              >
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Administrator Panel
                </span>
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleUserLogin}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-400 text-white bg-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 font-medium shadow-md"
                >
                  Access Profile
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 font-medium"
                  onClick={() => setUserLogin(false)}
                >
                  Back to Selection
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}