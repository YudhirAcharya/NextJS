import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="absolute w-[150vw] h-[150vw] bg-white opacity-5 rounded-full blur-3xl animate-ping-slow -top-1/2 -left-1/2 z-0" />

      <div className="z-10 flex flex-col items-center space-y-6">
        <div className="w-24 h-24 border-8 border-white border-t-transparent rounded-full animate-spin shadow-xl"></div>

        <h1 className="text-4xl font-bold tracking-widest animate-pulse text-white drop-shadow-lg">
          Loading...
        </h1>

        <p className="text-lg text-gray-200 animate-fade-in">
          Please wait while we prepare something awesome ✨
        </p>
      </div>
    </div>
  );
};

export default Loading;
