import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/departments";

export const getDepartments = async () => {
  const respose = await axios.get(API_URL);
  return respose.data;
};

export const createDepartment = async (department) => {
  const response = await axios.post(API_URL, department);
  return response.data;
};
export const deleteDepartment = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
