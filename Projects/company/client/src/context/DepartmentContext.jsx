import React, { createContext, useState, useEffect } from "react";
import {
  getDepartments,
  createDepartment,
  deleteDepartment,
} from "../services/DepartmentService";

export const DepartmentContext = createContext();
export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  const addDepartment = async (department) => {
    try {
      const newDepartment = await createDepartment(department);
      setDepartments((prev) => [...prev, newDepartment]);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeDepartment = async (id) => {
    setDepartments((prev) => prev.filter((el) => el.departmentId !== id));
    try {
      await deleteDepartment(id);
    } catch (err) {
      setError(err.message);
      setDepartments((prev) => [
        ...prev,
        departments.find((el) => el.departmentId === id),
      ]);
    }
  };
  return (
    <DepartmentContext.Provider
      value={{ departments, loading, error, addDepartment, removeDepartment }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
