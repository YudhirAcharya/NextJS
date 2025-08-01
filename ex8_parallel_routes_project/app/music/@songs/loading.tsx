import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="mb-4 text-2xl font-semibold">Loading...</div>
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
