import React, { createContext, useState, useEffect } from "react";
import {
  getProjects,
  createProject,
  deleteProject,
} from "../services/projectService";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const addProject = async (project) => {
    try {
      const newProject = await createProject(project);
      setProjects((prev) => [...prev, newProject]);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeProject = async (id) => {
    setProjects((prev) => prev.filter((project) => project.projectId !== id));
    try {
      await deleteProject(id);
    } catch (err) {
      setError(err.message);
      setProjects((prev) => [
        ...prev,
        projects.find((p) => p.projectId === id),
      ]);
    }
  };

  return (
    <ProjectContext.Provider
      value={{ projects, loading, error, addProject, removeProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
