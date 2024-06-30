// import type { Config } from "tailwindcss";

// const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
// const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
// const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         "nav-color": "#101828",
//       },
//       spacing: {
//         ...range(1, 100).reduce((acc : any, px : any) => {
//           acc[`${px}pxr`] = pxToRem(px);
//           return acc;
//         }, {}),
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
//import colors from './src/styles/palette';

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const generateBrightnessValues = () => {
  const brightnessValues: Record<string, string> = {};
  for (let i = 0; i <= 200; i += 5) {
    brightnessValues[`${i}`] = `${i / 100}`;
  }
  return brightnessValues;
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/interfaces/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      web: "576px",
    },
    extend: {
      colors: {
        "nav-color": "#101828",
        white: "#F9FAFB",
        "unSelected-color": "#98A2B3",
      },
      fontFamily: {
        pretendard: ["Pretendard", ...fontFamily.sans],
      },
      borderWidth: Array.from({ length: 1000 }, (_, index) => {
        const value = pxToRem(index + 1);
        return { [`${index + 1}pxr`]: value };
      }).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      borderRadius: Array.from({ length: 1000 }, (_, index) => {
        const value = pxToRem(index + 1);
        return { [`${index + 1}pxr`]: value };
      }).reduce((acc, obj) => ({ ...acc, ...obj }), {
        "web-content": "35px",
        "mobile-content": "35px",
        full: "9999px",
      }),
      spacing: Array.from({ length: 2000 }, (_, index) => {
        const value = pxToRem(index + 1);
        return { [`${index + 1}pxr`]: value };
      }).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      fontSize: Array.from({ length: 1000 }, (_, index) => {
        const value = pxToRem(index + 1);
        return { [`${index + 1}pxr`]: value };
      }).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      minWidth: {
        "1280": "1280px",
        "1200": "1200px",
      },
      maxWidth: {
        "1280": "1280px",
        "1200": "1200px",
      },
      brightness: generateBrightnessValues(),
      boxShadow: {
        "reserve-summary-shadow": "0 -4px 6px rgba(0, 0, 0, 0.05)",
        "login-box-shadow":
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        "all-1": "1px 1px 5px rgba(0, 0, 0, 0.1)",
        "all-2": "1px 1px 10px rgba(0, 0, 0, 0.2)",
        "all-3": "1px 1px 15px rgba(0, 0, 0, 0.3)",
        "all-4": "1px 1px 20px rgba(0, 0, 0, 0.4)",
        "all-5": "1px 1px 25px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  //plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
