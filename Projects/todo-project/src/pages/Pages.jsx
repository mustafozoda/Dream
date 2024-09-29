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
  setModal,
}) {
  return (
    <div className="h-full p-[10px] laptop:p-[20px]">
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
          element={
            <TasksOverview setModal={setModal} data={data} setData={setData} />
          }
        />
      </Routes>
    </div>
  );
}
