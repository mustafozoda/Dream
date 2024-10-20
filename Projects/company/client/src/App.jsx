import React from "react";
import { ProjectProvider } from "./context/ProjectContext";
import { DepartmentProvider } from "./context/DepartmentContext"; // Add DepartmentProvider
import AppRoutes from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <ProjectProvider>
        <DepartmentProvider>
          <AppRoutes />
        </DepartmentProvider>
      </ProjectProvider>
    </>
  );
};

export default App;
