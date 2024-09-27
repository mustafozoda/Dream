import DeleteIcon from "@mui/icons-material/Delete";
export default function Delete({
  filteredEl,
  data,
  setData,
  modalState,
  setModalState,
}) {
  const deleteItem = (idx) => {
    const newData = data.filter((el) => el.id !== idx);
    setData(newData);
  };
  return (
    <>
      <button
        className="flex h-[40px] w-[45px] items-center justify-between rounded-[6px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white"
        onClick={() => {
          if (filteredEl) {
            deleteItem(filteredEl.id);
            modalState && setModalState(false);
          } else {
            console.warn("filteredEl is undefined or null");
          }
        }}
      >
        <DeleteIcon />
      </button>
    </>
  );
}
