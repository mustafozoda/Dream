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
      <div className="flex items-center justify-center px-[10px] py-[10px] tablet:justify-between">
        <div className="hidden tablet:block tablet:text-[20px] laptop:text-[30px]">
          <h1>
            Welcome back, <span className="text-red-700">Mustaffozoda</span>
          </h1>
        </div>
        <div className="items-center justify-center tablet:flex tablet:w-fit">
          <button
            onClick={() => setAddModalState(true)}
            className="flex h-[35px] w-[270px] items-center justify-between rounded-[10px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white tablet:w-[160px]"
          >
            Add New Task
            <AddTaskIcon />
          </button>
        </div>
      </div>
      <div className=" ">
        <div className="item-box grid max-h-[92vh] grid-cols-1 gap-[20px] overflow-auto border border-x-[0px] border-y-red-700 p-[10px] tablet:grid-cols-2 laptop:grid-cols-3">
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
