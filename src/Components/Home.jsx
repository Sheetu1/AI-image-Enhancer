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
      console.error(error);
      alert("Error while enhancing the image. please try again later.");
      setloading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
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
