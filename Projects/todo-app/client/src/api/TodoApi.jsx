import { useEffect } from "react";
import axios from "axios";

const URL = "https://todo-app-olfy.onrender.com/api/todos";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const createTodo = async (newTodo) => {
  try {
    const response = await axios.post(URL, newTodo);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create task: " + error.message);
  }
};

export const updateTodo = async (updatedTask) => {
  try {
    const response = await axios.put(`${URL}/${updatedTask.id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw new Error("Failed to update task: " + error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
  } catch (error) {
    throw new Error("Failed to delete task from the server: " + error.message);
  }
};

export default function TodoApi() {
  return null;
}
