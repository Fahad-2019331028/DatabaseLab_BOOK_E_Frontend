import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers['x-auth-token'] = token; // Set the x-auth-token header
    return req;
  },
  (error) => Promise.reject(error)
);
