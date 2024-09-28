import MoreVertIcon from "@mui/icons-material/MoreVert";
import completed from "../assets/completed.png";
import incompleted from "../assets/incompleted.png";

import { red } from "@mui/material/colors";
export default function Item({ el, data, setData, setModalState, setIdx }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#ff0000";
      case "medium":
        return "#00000";
      case "low":
        return "#00ff00";
      default:
        return "#FFFFFF";
    }
  };
  return (
    <div className="item-card relative flex cursor-pointer flex-col items-center justify-between border-[2px] bg-[#ffffffbd] p-[12px] hover:border-[2px] hover:border-red-700 laptop:rounded-[5px] desktop:h-[150px] desktop:p-[17px]">
      <button
        className="absolute right-[-2px] top-[2px] cursor-pointer"
        onClick={(e) => {
          setModalState(true);
          setIdx(el.id);
        }}
      >
        <MoreVertIcon sx={{ color: red[700], fontSize: 25 }} />
      </button>
      <div className="flex w-full items-center justify-between laptop:items-start">
        <div className="w-[30%]">
          <img
            className="w-[100px] object-contain"
            src={el.completed ? completed : incompleted}
            alt="img"
          />
        </div>
        <div className="w-[65%]">
          <h1 className="overflow-hidden truncate text-ellipsis whitespace-nowrap text-red-900 desktop:text-[20px]">
            {el.title}
          </h1>
          <h2 className="overflow-hidden truncate text-ellipsis whitespace-nowrap text-[10px] text-[#747474] desktop:text-[15px]">
            {el.description}
          </h2>
        </div>
      </div>
      <div className="hidden w-full justify-between text-[10px] desktop:flex">
        <h3>
          Priority:{" "}
          <span style={{ color: getPriorityColor(el.priority) }}>
            {el.priority}
          </span>
        </h3>
        <h3>Category: {el.category}</h3>
        <h3>DueDate: {el.dueDate}</h3>
      </div>
    </div>
  );
}
