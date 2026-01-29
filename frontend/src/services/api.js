import axios from "axios";

const API = axios.create({
  baseURL: "https://landing-backend-49k6.onrender.com/api",
});

export default API;
