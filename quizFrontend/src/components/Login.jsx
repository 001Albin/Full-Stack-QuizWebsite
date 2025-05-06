import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log("User Login:", { userEmail, userPassword });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("User SignUp:", { userName, userEmail, userPassword });
  };

  const navigateToAdmin = () => {
    console.log("Navigate to admin portal");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Description */}
        <div className="hidden md:flex flex-col justify-center p-10 w-1/2 bg-gradient-to-br from-black to-gray-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-600 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full blur-lg"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              {isSignUp ? "Join Our Community" : "Welcome Back!"}
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              {isSignUp 
                ? "Create an account and start your journey with us. Challenge yourself, improve your skills, and connect with like-minded coders."
                : "Access your account and continue exploring the world of coding challenges and quizzes. Track your progress and compete with others!"}
            </p>
            
            <div className="mt-8 flex space-x-2">
              <div className="h-2 w-16 bg-blue-400 rounded-full"></div>
              <div className="h-2 w-4 bg-blue-300 rounded-full"></div>
              <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-black text-center relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
          
          <h2 className="text-3xl font-bold text-white mb-2">
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>
          <p className="text-gray-400 mb-6">
            {isSignUp ? "Fill in your details to get started" : "Enter your credentials to access your account"}
          </p>
          
          <div className="space-y-5">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-4 pl-4 rounded-lg bg-black border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 transition duration-200"
                />
              </div>
            )}
            
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-4 pl-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 transition duration-200"
              />
            </div>
            
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="w-full p-4 pl-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 transition duration-200"
              />
            </div>
            
            <button 
              onClick={isSignUp ? handleSignUp : handleUserLogin} 
              className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-lg shadow-lg shadow-blue-600/30 transition duration-200 transform hover:translate-y-px"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between mt-6 text-sm gap-4">
            <button className="text-gray-400 hover:text-blue-400 transition duration-200">
              Forgot Password?
            </button>
            <button 
              onClick={() => setIsSignUp(!isSignUp)} 
              className="text-gray-400 hover:text-blue-400 transition duration-200"
            >
              {isSignUp ? "Already have an account?" : "Don't have an account? Sign Up"}
            </button>
          </div>
          
          <div className="relative my-8">
            <hr className="border-gray-700" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-3 text-gray-500 text-sm">
              OR
            </span>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-2">
              Only authorized administrators can access the admin portal.
            </p>
            <button
              onClick={navigateToAdmin}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold shadow-lg shadow-red-600/30 transition duration-200"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}