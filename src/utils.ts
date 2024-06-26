import axiosInstanceCreator from 'axios';

export const axios = axiosInstanceCreator.create({
  baseURL: process.env.BACKEND_URL,
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