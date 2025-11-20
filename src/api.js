import axios from "axios";

const API = axios.create({
  baseURL: "https://tinyurl-backend-yu79.onrender.com/", // your backend URL
});

export const createShortUrl = (originalUrl) =>
  API.post("/api/url/shorten", { originalUrl });
