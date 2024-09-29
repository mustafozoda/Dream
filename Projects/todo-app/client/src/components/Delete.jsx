import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export const handleDelete = async (
  filteredEl,
  data,
  setData,
  setModalState,
) => {
  if (filteredEl) {
    const newData = data.filter((el) => el.id !== filteredEl.id);
    setData(newData);
    setModalState(false);

    try {
      const response = await fetch(
        `http://localhost:8080/api/todos/${filteredEl.id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete task from the server");
      }

      setData((prevData) => prevData.filter((task) => task.id !== filteredEl));
      console.log("Task successfully deleted from the database");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  } else {
    console.warn("filteredEl is undefined or null");
  }
};

export default function Delete({ filteredEl, data, modal, setModal }) {
  return (
    <>
      <button
        className="flex h-[40px] w-[45px] items-center justify-between rounded-[6px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white"
        onClick={() => {
          setModal(true);
          console.log(filteredEl.id);
        }}
      >
        <DeleteIcon />
      </button>

      {modal && (
        <ConfirmDeleteModal
          setModal={setModal}
          modal={modal}
          filteredEl={filteredEl}
          data={data}
          setData={setData}
          setModalState={setModalState}
        />
      )}
    </>
  );
}
