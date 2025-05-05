import React from "react";

const ImageUpload = () => {
  return (
    <div className="max-w-2xl w-full bg-white  shadow-lg rounded-2xl p-6">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 text-center transition-all "
      >
        <input type="file" id="fileInput" className="hidden" />
        <span className="text-lg font-medium text-gray-600 "> Click and drag to upload your image </span>
      </label>
    </div>
  );
};

export default ImageUpload;
