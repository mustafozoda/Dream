import React from "react";
import { ProjectProvider } from "./context/ProjectContext";
import AppRoutes from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <ProjectProvider>
      <Header />
      <AppRoutes />
    </ProjectProvider>
  );
};

export default App;
