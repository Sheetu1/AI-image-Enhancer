import React from "react";

const ImageUpload = ({ UploadImageHandler }) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      UploadImageHandler(file);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
      <label
        htmlFor="fileInput"
        className="block cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:border-blue-500 transition-all duration-300"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <span className="text-xl font-medium text-gray-600">
          📁 Click or drag an image to upload
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
