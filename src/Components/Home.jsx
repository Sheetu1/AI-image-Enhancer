import React from "react";
import { useState } from "react";
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
    // and now call the api enhance the image
    try{
      const enhancedURL = await enhanceImageAPI(file);
      setenhancedImage(enhancedURL);
      setloading(false);

    }
    catch(error){

    }

    
  };
  return (
    <>
      <ImageUpload  UploadImageHandler={UploadImageHandler}/>
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
