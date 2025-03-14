import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.2.243:8000/api/v1",
  withCredentials: true,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
