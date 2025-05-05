import React from "react";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-4 bg-gray-100 ">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 ">AI Image Enhancer {" "}</h1>
        <p className="text-lg text-gray-500 mt-6 ">Powered by @sheryians</p>
      </div>
      <Home />
      <div className="text-lg text-gray-500 ">Upload your Image and let AI Enhance to in seconds!</div>
    </div>
  );
};

export default App;
