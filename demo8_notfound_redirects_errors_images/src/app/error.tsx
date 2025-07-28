"use client";
import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-red-700 flex flex-col items-center justify-center text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 via-black to-black opacity-20 blur-2xl animate-ping-slow"></div>

      <div className="z-10 text-center animate-shake">
        <h1 className="text-5xl font-extrabold text-red-500 drop-shadow-2xl animate-pulse">
          ❌ Oops!
        </h1>
        <p className="mt-4 text-2xl font-semibold text-white">
          Something went wrong...
        </p>
        <p className="text-lg text-red-200 mt-2">We’re working on it 💥</p>
        <a
          href="/"
          className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-xl transition duration-300 transform hover:scale-110"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
