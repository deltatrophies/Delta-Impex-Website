import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL || "";
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
});

export const submitEnquiry = (payload) => api.post("/enquiries", payload);
