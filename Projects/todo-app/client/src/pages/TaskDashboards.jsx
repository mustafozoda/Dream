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
      <div className="flex w-full items-center justify-between">
        <div className="hidden tablet:block tablet:text-[20px] laptop:text-[30px]">
          <h1>
            Task <span className="text-red-700">Dashboards</span>
          </h1>
        </div>
        <div className="flex w-full justify-center tablet:w-fit tablet:gap-[20px]">
          <SelectStatus status={status} setStatus={setStatus} />
          <SelectCategory
            data={data}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>
      <div>
        <div className="item-box grid max-h-[92vh] grid-cols-1 gap-[20px] overflow-auto border border-x-[0px] border-y-red-700 p-[10px] tablet:grid-cols-2 laptop:grid-cols-3">
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
