import axiosInstanceCreator from 'axios';

export const axios = axiosInstanceCreator.create({
  baseURL: 'http://localhost:3001/', // Replace with your base URL
  timeout: 5000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed
  },
});

export const removeFileExtension = (fileName: string) => {
    const extensionIndex = fileName.lastIndexOf('.')
    const correctedExtensionIndex = extensionIndex != -1 ? extensionIndex : fileName.length
    const nameOnly: string = fileName.slice(0, correctedExtensionIndex);
    return nameOnly
}