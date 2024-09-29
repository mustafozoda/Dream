import React from "react";
import TaskTable from "../components/TaskTable";

{
  /*
    const countTasks = function (data, predicate) {
      return data.filter(predicate).length;
    };

    const countTasks = (data, predicate) => {
      const newData = data.filter(predicate).length;
      return newData;
    };

    function matchesPriority(el, priority) {
    return el.priority.toLowerCase() === priority.toLowerCase();
  }

  const priorityCounts = ["High", "Medium", "Low"].map((priority) => ({
    label: priority,
    count: countTasks(data, (el) => matchesPriority(el, priority)),
  }));

  */
}

export default function TasksOverview({ data, setModal, setData }) {
  const countTasks = (data, predicate) => data.filter(predicate).length;

  const priorityCounts = ["High", "Medium", "Low"].map((priority) => ({
    label: priority,
    count: countTasks(
      data,
      (el) => el.priority.toLowerCase() === priority.toLowerCase(),
    ),
  }));

  const statusCounts = ["Completed", "Incomplete"].map((status) => ({
    label: status,
    count: countTasks(data, (el) =>
      status === "Completed" ? el.completed : !el.completed,
    ),
  }));

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="tablet:text-[20px] laptop:text-[30px]">
          Tasks <span className="text-red-700">Overview</span>
        </h1>
      </div>
      <div className="border border-x-[0px] border-y-red-700 p-[10px]">
        <div className="grid-container gap-[10px]">
          <div className="box1">
            <TaskTable header="Task Priority" rows={priorityCounts} />
          </div>
          <div className="box2">
            <TaskTable header="Task Status" rows={statusCounts} />
          </div>
        </div>
      </div>
    </div>
  );
}
