import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";
import DepartmentPage from "./pages/DepartmentPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/department" element={<DepartmentPage />} />
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};
export default AppRoutes;
