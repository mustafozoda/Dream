import { useState } from "react";
import Item from "../components/Item";
import SelectStatus from "../components/SelectStatus";
import SelectCategory from "../components/SelectCategory";

export default function TaskDashboards({
  data,
  setData,
  setModalState,
  setIdx,
}) {
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");

  const filteredData = () => {
    const statusFilteredData =
      status === "completed"
        ? data.filter((el) => el.completed === true)
        : status === "incomplete"
          ? data.filter((el) => el.completed === false)
          : data;

    const categoryFilteredData =
      category === "all"
        ? statusFilteredData
        : statusFilteredData.filter((el) => el.category === category);

    return categoryFilteredData;
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[35px]">
            Task <span className="text-red-700">Dashboards</span>
          </h1>
        </div>
        <div className="flex gap-[20px]">
          <SelectStatus status={status} setStatus={setStatus} />
          <SelectCategory
            data={data}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>
      <div>
        <div className="item-box grid max-h-[92vh] gap-[20px] overflow-auto border border-x-[0px] border-y-red-700 p-[10px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filteredData().length > 0 ? (
            filteredData().map((el) => (
              <Item
                setIdx={setIdx}
                el={el}
                key={el.id}
                setModalState={setModalState}
                data={data}
                setData={setData}
              />
            ))
          ) : (
            <p className="w-max bg-red-700 p-[2px] text-white">
              No tasks found for this status :(
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
