import React from "react";

const ProjectDetails = ({ project }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="font-bold">Project: {project.projectName}</h2>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate || "Ongoing"}</p>

      <h3 className="font-semibold mt-4">Assigned Employee:</h3>
      <p>Name: {project.employee.name}</p>
      <p>Position: {project.employee.position}</p>
      <p>Age: {project.employee.age}</p>
      <p>Salary: ${project.employee.salary}</p>

      <h4 className="font-semibold mt-4">Department:</h4>
      <p>Department Name: {project.employee.department.departmentName}</p>
    </div>
  );
};

export default ProjectDetails;
