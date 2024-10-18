import React from "react";

const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="font-bold">{project.projectName}</h2>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate || "Ongoing"}</p>
      <button
        onClick={() => onDelete(project.projectId)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default ProjectCard;
