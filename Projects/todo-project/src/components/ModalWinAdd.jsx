import { useState } from "react";
import addTodoImg from "../assets/todoImgAdd.jpg";
import DoneAllTwoToneIcon from "@mui/icons-material/DoneAllTwoTone";
import BackButton from "./BackButton";
export default function ModalWinAdd({ setAddModalState, setData }) {
  const [newTaskState, setNewTaskState] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    category: "",
    completed: false,
    notes: "",
  });

  const handleInpChange = (e) => {
    const { name, value } = e.target;
    setNewTaskState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      ...newTaskState,
    };

    setData((prevData) => [newTask, ...prevData]);
    setAddModalState(false);
  };

  return (
    <div
      onClick={() => setAddModalState(false)}
      className="modal-win-add absolute left-0 top-[0px] z-[100] flex h-full w-[100%] items-start justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-[70px] w-[75%] rounded-[20px] bg-white px-[60px] py-[40px]"
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-start justify-between border border-red-700 p-[25px]"
        >
          <div className="w-[60%]">
            <div className="flex flex-col">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={newTaskState.title}
                onChange={handleInpChange}
                required
                className="w-full rounded-[5px] border p-[5px]"
              />
            </div>
            <div className="flex flex-col">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={newTaskState.description}
                onChange={handleInpChange}
                required
                className="w-full rounded-[5px] border p-[5px]"
              />
            </div>
            <div className="flex flex-col">
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={newTaskState.dueDate}
                onChange={handleInpChange}
                required
                className="w-full rounded-[5px] border p-[5px]"
              />
            </div>
            <div className="my-[10px] flex items-center gap-[10%]">
              <label>Priority:</label>
              <div className="flex items-center gap-4">
                <label className="tems-center flex flex-row justify-center text-[15px] text-[#A1A3AB]">
                  <input
                    type="checkbox"
                    name="priority"
                    value="low"
                    checked={newTaskState.priority === "low"}
                    onChange={handleInpChange}
                    className="mr-1"
                  />
                  Low
                </label>

                <label className="flex flex-row items-center justify-center text-[15px] text-[#A1A3AB]">
                  <input
                    type="checkbox"
                    name="priority"
                    value="medium"
                    checked={newTaskState.priority === "medium"}
                    onChange={handleInpChange}
                    className="mr-1"
                  />
                  Medium
                </label>

                <label className="flex flex-row items-center justify-center text-[15px] text-[#A1A3AB]">
                  <input
                    type="checkbox"
                    name="priority"
                    value="high"
                    checked={newTaskState.priority === "high"}
                    onChange={handleInpChange}
                    className="mr-1"
                  />
                  High
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={newTaskState.category}
                onChange={handleInpChange}
                required
                className="w-full rounded-[5px] border p-[5px]"
              />
            </div>
            <div className="flex flex-col">
              <label>Notes</label>
              <textarea
                name="notes"
                placeholder="Start writing here....."
                value={newTaskState.notes}
                onChange={handleInpChange}
                className="max-h-[80px] min-h-[60px] w-[100%] rounded-[5px] border p-[5px] text-[12px] placeholder:text-[12px]"
              />
            </div>
          </div>
          <div className="flex w-[40%] flex-col items-end justify-between gap-[63px]">
            <div>
              <img className="" src={addTodoImg} alt="" />
            </div>
            <div className="">
              {/* <BackButton onClick={() => setAddModalState(false)} /> */}
              <button className="flex h-[40px] w-[100px] items-center justify-between rounded-[6px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white">
                <DoneAllTwoToneIcon />
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
