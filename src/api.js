import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8001", // your backend URL
});

export const createShortUrl = (originalUrl) =>
  API.post("/api/url/shorten", { originalUrl });
