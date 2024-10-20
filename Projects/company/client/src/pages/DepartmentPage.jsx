import React, { useContext } from "react";
import { DepartmentContext } from "../context/DepartmentContext";
import DepartmentCard from "../components/Department/DepartmentCard";

const DepartmentPage = () => {
  const { departments, loading, error, removeDepartment } =
    useContext(DepartmentContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Departments</h1>
      <div className="flex flex-wrap">
        {departments.map((department) => (
          // <ProjectDetails key={department.departmentId} department={department} />
          <DepartmentCard
            key={department.departmentId}
            onDelete={removeDepartment}
            department={department}
          />
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
