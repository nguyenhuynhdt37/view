import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NATIVE_PUBLIC_API_BASE_URL + "/api/v1",
  withCredentials: true,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
