import axios from "axios";

const API_KEY = "wx1p12jjpm7wa8q33";
const BASE_URL = "https://techhk.aoscdn.com";

// ✅ Main function to enhance the image
export const enhanceImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded successfully, Task ID:", taskId);


    // polling for the task status

    const enhanceImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhanceImageData);
    console.log(enhanceImageData);
    return enhanceImageData;
  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  console.log("Upload response data:", data);

  // ✅ Fix: throw error ONLY if task_id is missing
  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  // fetch enhanced image
 
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if(!data?.data){
    throw new Error("Failed to fetch enhance image ! Image not found.");
  }

  return data.data;
};

const pollForEnhancedImage = async (taskId, retries  = 0) =>{
    const result = await fetchEnhancedImage(taskId);
    if(result.state === 4){
        console.log("Processing...");
        if(retries >=20){
            throw new Error("Max retries reached . please try again later");
        }
        // wait for two second
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return pollForEnhancedImage(taskId, retries + 1);   
    }
    console.log("Enhanced Image URL:", result);
    return result;
} 



