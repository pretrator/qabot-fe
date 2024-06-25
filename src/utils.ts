import axiosInstanceCreator from 'axios';

export const axios = axiosInstanceCreator.create({
  baseURL: 'http://localhost:3001/', // Replace with your base URL
  timeout: 5000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed
  },
});

