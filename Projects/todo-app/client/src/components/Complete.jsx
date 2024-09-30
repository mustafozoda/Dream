import DoneAllTwoToneIcon from "@mui/icons-material/DoneAllTwoTone";
import RemoveDoneTwoToneIcon from "@mui/icons-material/RemoveDoneTwoTone";
import { updateTodo } from "../api/TodoApi.jsx";

export default function Complete({ filteredEl, data, setData }) {
  const handleToggleComplete = async () => {
    const updatedTask = {
      ...filteredEl,
      completed: !filteredEl.completed,
    };

    try {
      const updatedTaskFromServer = await updateTodo(updatedTask);

      setData((prevData) =>
        prevData.map((el) =>
          el.id === updatedTaskFromServer.id ? updatedTaskFromServer : el,
        ),
      );

      console.log("Task successfully updated in the database");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <button
      onClick={handleToggleComplete}
      className="flex h-[40px] w-[45px] items-center justify-between rounded-[6px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white"
    >
      {filteredEl.completed ? (
        <DoneAllTwoToneIcon />
      ) : (
        <RemoveDoneTwoToneIcon />
      )}
    </button>
  );
}
