import { BACKEND_URL } from './settings.mjs';

const nextConfig = {
    reactStrictMode: false,
    transpilePackages: [
      "antd",
      "rc-util",
      "@babel/runtime",
      "@ant-design/icons",
      "@ant-design/icons-svg",
      "rc-pagination",
      "rc-picker",
      "rc-tree",
      "rc-table",
    ],
    env: {
         BACKEND_URL,
    },
  };
  
  export default nextConfig;