import React from "react";
import Loading from "../Components/Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
      {/* Original Image Card */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-3">
          📷 Original Image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Original"
            className="w-full h-96 object-contain bg-gray-50"
          />
        ) : (
          <div className="flex items-center justify-center h-96 bg-gray-100 text-gray-500 text-lg">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image Card */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-3">
          🚀 Enhanced Image
        </h2>
        {props.loading ? (
          <Loading />
        ) : props.enhanced ? (
          <img
            src={props.enhanced}
            alt="Enhanced"
            className="w-full h-96 object-contain bg-gray-50"
          />
        ) : (
          <div className="flex items-center justify-center h-96 bg-gray-100 text-gray-500 text-lg">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
