import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-red-600 flex flex-col justify-center items-center text-white p-6 animate-pulse">
      <h1 className="text-6xl font-extrabold drop-shadow-lg animate-bounce">
        404
      </h1>
      <p className="text-2xl mt-4 bg-white text-pink-700 px-6 py-3 rounded-full shadow-xl animate-fade-in">
        Page Not Found, error 😵‍💫
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-spin-slow"
        >
          Go Home
        </a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        <div className="w-[150vw] h-[150vw] bg-white opacity-10 rounded-full blur-3xl absolute animate-ping-slow -top-1/2 -left-1/2" />
      </div>
    </div>
  );
};

export default NotFound;
