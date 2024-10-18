import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};

export default AppRoutes;
