import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-backend-q76q.onrender.com/api/",
  withCredentials: true,
});

newRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default newRequest;
