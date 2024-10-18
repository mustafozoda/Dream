import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/projects";

export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProject = async (project) => {
  const response = await axios.post(API_URL, project);
  return response.data;
};

export const deleteProject = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
