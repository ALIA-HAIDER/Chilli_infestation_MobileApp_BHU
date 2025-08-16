import axios from "axios";
import { Platform } from "react-native";

// Get the correct base URL based on platform
const getBaseURL = () => {
  if (Platform.OS === 'web') {
    return "http://127.0.0.1:5000";
  } else {
    // For mobile devices, use your computer's IP address
    return "http://10.175.182.250:5000"; // Your computer's IP address
  }
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 30000, // Increased timeout for mobile networks
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Making API request to:', `${config.baseURL || ''}${config.url || ''}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('API response received:', response.status);
    return response;
  },
  (error) => {
    console.error('API response error:', error.message);
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('Network error - no response received');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
    
