import AddTaskIcon from "@mui/icons-material/AddTask";
import Item from "../components/Item";
export default function Dashboard({
  data,
  setData,
  setIdx,
  setModalState,
  setAddModalState,
}) {
  return (
    <div className="">
      <div className="phone:justify-end flex items-center justify-between px-[10px]">
        <div className="phone:hidden">
          <h1 className="text-[35px]">
            Welcome back, <span className="text-red-700">Mustaffozoda</span>
          </h1>
        </div>
        <div className="flex h-[64px] items-center justify-center">
          <button
            onClick={() => setAddModalState(true)}
            className="flex h-[40px] w-[160px] items-center justify-between rounded-[10px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white"
          >
            Add New Task
            <AddTaskIcon />
          </button>
        </div>
      </div>
      <div className=" ">
        <div className="item-box phone:grid-cols-1 grid max-h-[92vh] grid-cols-3 gap-[20px] overflow-auto border border-x-[0px] border-y-red-700 p-[10px]">
          {data.map((el) => (
            <Item
              setIdx={setIdx}
              el={el}
              key={el.id}
              setModalState={setModalState}
              data={data}
              setData={setData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
