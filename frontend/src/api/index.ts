import axios from "axios";
import { API_BASE_URL } from "../config";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTasks = () => api.get("/tasks");
export const createTask = (task: { title: string; description: string }) => api.post("/tasks", task);
export const deleteTask = (id: string) => api.delete(`/tasks/${id}`);
export const toggleTask = (id: string) => api.put(`/tasks/${id}/toggle`);
export const getFilteredTasks = (isCompleted: boolean) => api.get(`/tasks/filter?isCompleted=${isCompleted}`);
