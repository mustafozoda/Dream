import React from "react";
import MyTask from "./MyTask";
import { Routes, Route } from "react-router-dom";
import TasksOverview from "./TasksOverview";
import TaskDashboards from "./TaskDashboards";

export default function Pages({
  data,
  setData,
  setModalState,
  setAddModalState,
  setIdx,
}) {
  return (
    <div className="p-[40px]">
      <Routes>
        <Route
          path="/"
          element={
            <MyTask
              setModalState={setModalState}
              setAddModalState={setAddModalState}
              data={data}
              setData={setData}
              setIdx={setIdx}
            />
          }
        />
        <Route
          path="/taskdashboards"
          element={
            <TaskDashboards
              setModalState={setModalState}
              setAddModalState={setAddModalState}
              data={data}
              setData={setData}
              setIdx={setIdx}
            />
          }
        />
        <Route
          path="/tasksoverview"
          element={<TasksOverview data={data} setData={setData} />}
        />
      </Routes>
    </div>
  );
}
