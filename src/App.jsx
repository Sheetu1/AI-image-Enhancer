import React from "react";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Upload your image and let AI Enhance it in seconds!
        </p>
      </div>
      <Home />
      <p className="text-sm text-gray-400 mt-10">Powered by @sheryians.</p>
    </div>
  );
};

export default App;
