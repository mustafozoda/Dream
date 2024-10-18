// src/pages/ProjectPage.jsx

import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProjectDetails from "../components/ProjectDetails";

const ProjectPage = () => {
  const { projects, loading, error } = useContext(ProjectContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          // <ProjectDetails key={project.projectId} project={project} />
          <ProjectPage key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
