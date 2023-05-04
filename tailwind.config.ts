import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-gray-400" : "#4E5C74",
        "my-blue-50" : "#E6EDFE",
        "my-blue-900" : "#052C8F",
        "cta-hover-dark" : "#6790F9",
        "cta-dark" : "#356CF8",
        "cta-light" : "#094AF1",
        "my-gray-500" : "#7E8FA9",
        "my-gray-200" : "#BCC4D2",
        "text-sec-dark" : "#BEBEBE",
        "text-sec-light" : "#394456",
        "bg-dark" : "#101318",
      }
    },
  },
  plugins: [],
} satisfies Config;
