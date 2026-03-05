import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3000", 
  baseURL: "https://task-management-q4kj.onrender.com"
});

export default api;
