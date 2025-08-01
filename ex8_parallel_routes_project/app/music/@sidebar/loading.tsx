"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="mb-6 animate-pulse">
        {/* Musical note icon as a cool loading spinner */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-2v13"
          />
          <circle
            cx="6"
            cy="17"
            r="3"
            stroke="currentColor"
            strokeWidth={1.5}
          />
          <circle
            cx="18"
            cy="15"
            r="3"
            stroke="currentColor"
            strokeWidth={1.5}
          />
        </svg>
      </div>
      <h1 className="text-3xl font-extrabold tracking-widest mb-2">
        Loading Beats...
      </h1>
      <p className="text-indigo-300 max-w-xs text-center">
        Hold tight! We're tuning the vibes just for you.
      </p>
      <div className="mt-8 flex space-x-2">
        {/* Animated equalizer bars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-8 bg-indigo-400 rounded animate-[equalizer_1.2s_ease-in-out_infinite]`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Equalizer animation keyframes */}
      <style jsx>{`
        @keyframes equalizer {
          0%,
          100% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
