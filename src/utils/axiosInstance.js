// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 10000, // 10 seconds timeout
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
