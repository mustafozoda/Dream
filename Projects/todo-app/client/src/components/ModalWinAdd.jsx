import { useState } from "react";
import addTodoImg from "../assets/todoImgAdd.jpg";
import DoneAllTwoToneIcon from "@mui/icons-material/DoneAllTwoTone";

import { createTodo } from "../api/TodoApi.jsx";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      ...newTaskState,
    };
    setAddModalState(false);

    try {
      const createdTask = await createTodo(newTask);
      setData((prevData) => [...prevData, createdTask]);
      setAddModalState(false);
      console.log("Task successfully added to the database");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div
      onClick={() => setAddModalState(false)}
      className="modal-win-add absolute left-0 top-[0px] z-[100] flex h-full w-[100%] items-start justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-[70px] h-[500px] w-[90%] rounded-[20px] bg-white p-[20px] laptop:w-[75%] laptop:px-[60px] laptop:py-[40px]"
      >
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col items-start justify-between border border-red-700 p-[15px] text-[14px] tablet:flex-row laptop:p-[25px]"
        >
          <div className="w-full tablet:w-[60%]">
            <div className="flex flex-col">
              <label>Title:</label>
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
              <label>Description:</label>
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
              <label>Due Date:</label>
              <input
                type="date"
                name="dueDate"
                value={newTaskState.dueDate}
                onChange={handleInpChange}
                required
                className="w-full rounded-[5px] border p-[5px]"
              />
            </div>
            <div className="my-[10px] items-center gap-[10%] phone:flex">
              <label className="">Priority:</label>
              <div className="flex items-center gap-[10px] pt-[10px] text-[10px] phone:pt-[0px] tablet:gap-4 tablet:text-[16px]">
                <label className="tems-center flex flex-row justify-center text-[#A1A3AB]">
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

                <label className="flex flex-row items-center justify-center text-[#A1A3AB]">
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

                <label className="flex flex-row items-center justify-center text-[#A1A3AB]">
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
              <label>Category:</label>
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
              <label>Notes:</label>
              <textarea
                name="notes"
                placeholder="Start writing here....."
                value={newTaskState.notes}
                onChange={handleInpChange}
                className="max-h-[80px] min-h-[60px] w-[100%] rounded-[5px] border p-[5px] text-[12px] placeholder:text-[12px]"
              />
            </div>
          </div>
          <div className="flex h-full w-full flex-row items-end justify-between tablet:w-[40%] tablet:flex-col tablet:gap-0">
            <div>
              <img className="hidden tablet:block" src={addTodoImg} alt="" />
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
