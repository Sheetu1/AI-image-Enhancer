import React from "react";
import Loading from "../Components/Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      {/* Original Image */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {props.uploaded ? (
          <div className="w-full h-[400px]">
            <img
              src={props.uploaded}
              alt="Original"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px] bg-gray-200 text-gray-500 text-lg">
            No Image Selected
          </div>
        )}
      </div>

      {/* enhanced image */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
        {props.loading ? (
          <div className="h-[400px] flex items-center justify-center">
            <Loading />
          </div>
        ) : props.enhanced ? (
          <div className="w-full h-[400px]">
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px] bg-gray-200 text-gray-500 text-lg">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
