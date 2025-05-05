import React from "react";
import { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";

const Home = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = (file) => {
    setuploadImage(URL.createObjectURL(file));
    setloading(true);
    // and now call the api enhance the image
    
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
