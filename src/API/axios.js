import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/fetudeen--clone/us-central1/api",
  baseURL: "https://amazon-api-deploy-f92p.onrender.com", //deployed backend link from render
});
export { axiosInstance };
//make it named export instead of default, not to make any confusions
