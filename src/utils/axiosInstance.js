// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.61:1337/api/',
  timeout: 10000, // 10 seconds timeout
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
