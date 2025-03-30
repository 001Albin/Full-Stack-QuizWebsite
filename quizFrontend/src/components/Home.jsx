import React from 'react';
import computerImage from '../assets/home.png';

const Home = () => {
    
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-3 overflow-hidden">
            {/* Introduction Sentence */}
            <h1 className="text-4xl font-bold text-center w-full mb-15 px-4">Welcome to the Ultimate Programming Quiz Platform!</h1>
            
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center">
                {/* Left Side: Computer Image */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:mr-4 flex justify-center">
                    <img
                        src={computerImage}
                        alt="Computer with Program"
                        className="w-full max-w-md object-contain"
                    />
                </div>

                {/* Right Side: Quiz Card */}
                <div className="md:w-1/2 p-8 bg-gray-900 rounded-lg shadow-lg overflow-hidden mr-5">
                    <h2 className="text-3xl font-bold mb-4">Test Your Programming Skills!</h2>
                    <p className="mb-6">
                        Learn and test your programming knowledge with our diverse quizzes. Master languages, algorithms, and coding challenges!
                        Improve your coding skills! Our quizzes cover languages, algorithms, and problem-solving, from beginner to expert.
                        Join our community! Test your coding knowledge, compete with friends, and learn with fun quizzes on languages and algorithms.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                        Start Learning
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
