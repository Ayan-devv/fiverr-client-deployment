import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});
newRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // this is where the token is stored
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // send token to backend
  }
  return config;
});

export default newRequest;
