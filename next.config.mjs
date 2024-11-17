/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
  },
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"], // 외부 이미지 도메인 추가
  },
};

export default nextConfig;
