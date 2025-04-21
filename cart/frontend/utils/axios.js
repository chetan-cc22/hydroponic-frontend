// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const API = axios.create({ baseURL: BASE_URL, withCredentials: true });

// export default API;


// frontend/src/utils/axios.js
import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:2060",  // your backend
  withCredentials: true
});