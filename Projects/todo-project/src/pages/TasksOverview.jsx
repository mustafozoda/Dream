import React from "react";
import TaskTable from "../components/TaskTable";
import SwiperTask from "../components/SwiperTask";
import all from "../assets/all.png";

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

export default function TasksOverview({ data, setData }) {
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
    <div className="w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-[35px]">
          Tasks <span className="text-red-700">Overview</span>
        </h1>
      </div>
      <div className="flex flex-col gap-[10px] border border-x-[0px] border-y-red-700 p-[10px]">
        <div className="flex w-full items-center">
          <div className="m-[5px] w-[50%]">
            <TaskTable header="Task Priority" rows={priorityCounts} />
          </div>
          <div className="m-[5px] flex h-full w-[50%] items-center justify-center">
            {data.length > 0 ? (
              <SwiperTask data={data} setData={setData} />
            ) : (
              <img className="h-[160px]" src={all} alt="all" />
            )}
          </div>
        </div>
        <div className="pt-[10px]">
          <TaskTable header="Task Status" rows={statusCounts} />
        </div>
      </div>
    </div>
  );
}
