import { axiosInstance } from "../axios/axiosInstence";

async function getPosts() {
    const response = await axiosInstance.get("/blogs");
   const data=await response.data
   return data
  }
  export default getPosts;