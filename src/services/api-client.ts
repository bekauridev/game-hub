import axios from "axios";
export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
console.log(import.meta.env.VITE_BASE_URL, import.meta.env.VITE_API_KEY);
