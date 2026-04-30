import axios from "axios";

const normalizeApiBaseUrl = (rawUrl) => {
  if (!rawUrl) return "http://localhost:5000/api";

  let url = rawUrl.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  url = url.replace(/\/+$/, "");
  if (!/\/api$/i.test(url)) {
    url = `${url}/api`;
  }

  return url;
};

const API = axios.create({
  baseURL: normalizeApiBaseUrl(import.meta.env.VITE_API_URL),
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;