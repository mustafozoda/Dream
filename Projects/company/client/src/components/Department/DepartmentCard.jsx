import React from "react";

const DepartmentCard = ({ department, onDelete }) => {
  return (
    <div className="border p-4 m-2">
      <h1>{department.departmentName}</h1>
      {/* <button
        onClick={() => onDelete(department.departmentId)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button> */}
    </div>
  );
};

export default DepartmentCard;
