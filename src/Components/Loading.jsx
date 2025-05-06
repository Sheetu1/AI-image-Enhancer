import React from "react";

const Loading = () => {
  return (
    <div className="h-96 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-blue-400 animate-spin border-t-transparent" />
    </div>
  );
};

export default Loading;
