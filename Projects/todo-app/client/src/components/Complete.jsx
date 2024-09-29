import DoneAllTwoToneIcon from "@mui/icons-material/DoneAllTwoTone";
import RemoveDoneTwoToneIcon from "@mui/icons-material/RemoveDoneTwoTone";
export default function Complete({ filteredEl, data, setData }) {
  const handleToggleComplete = () => {
    const updatedTask = data.map((el) =>
      el.id === filteredEl.id ? { ...el, completed: !el.completed } : el,
    );
    setData(updatedTask);
  };
  return (
    <>
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
    </>
  );
}
