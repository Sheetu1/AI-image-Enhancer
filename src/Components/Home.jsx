import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { enhanceImageAPI } from "../Utils/enhanceImageAPI";

const Home = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setuploadImage(URL.createObjectURL(file));
    setloading(true);
    try {
      const enhancedURL = await enhanceImageAPI(file);
      setenhancedImage(enhancedURL);
      setloading(false);
      console.log(enhancedURL?.image);
    } catch (error) {
      console.log(error);
      alert("Error while Enhancing the image. Please try again later.");
      setloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        ✨ AI Image Enhancer
      </h1>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </div>
  );
};

export default Home;
