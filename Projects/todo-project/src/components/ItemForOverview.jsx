import completed from "../assets/completed.png";
import incompleted from "../assets/incompleted.png";

export default function ItemForOverview({ el, setModal, data, setData }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#ff0000";
      case "medium":
        return "#0000ff";
      case "low":
        return "#00ff00";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <div className="item-card relative flex h-[170px] cursor-pointer items-start justify-between rounded-[5px] border-[2px] bg-[#ffffffbd] p-[17px] hover:border-[2px] hover:border-red-700">
      <div className="w-[30%]">
        <img
          className="w-full object-contain"
          src={el.completed ? completed : incompleted}
          alt="img"
        />
      </div>
      <div className="w-[65%]">
        <h1 className="overflow-hidden truncate text-ellipsis whitespace-nowrap text-[20px] text-red-900">
          {el.title}
        </h1>
        <h3>
          Priority:{" "}
          <span style={{ color: getPriorityColor(el.priority) }}>
            {el.priority}
          </span>
        </h3>
        <h3>Category: {el.category}</h3>
        <h3>Due Date: {el.dueDate}</h3>
      </div>
      <div className="absolute right-[10px] top-[10px]"></div>
    </div>
  );
}
