import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/fetudeen--clone/us-central1/api",
});
export { axiosInstance };
//make it named export instead of default, not to make any confusions
