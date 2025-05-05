const API_KEY = wx1p12jjpm7wa8q33
const BASE_URL = "https://techhk.aoscdn.com/"
export const enhanceImageAPI = async (file) => {
    // code to call api and get enhance image url

    try{
        const taskId = await uploadImage(file);
    }
    catch(error){
        console.log("Error enhancing image", error.message);
    }
};

const uploadImage = async (file) => {
       // code to upload image
        // "/api/tasks/visual/scale"---post
        return taskId;

}

const fatchEnhancedImage = async (taskId) => {
     // fetch enhanced image
        // "/api/tasks/visual/scale/{task_id}"---get

}
