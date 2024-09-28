import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export const handleDelete = (filteredEl, data, setData, setModalState) => {
  if (filteredEl) {
    const newData = data.filter((el) => el.id !== filteredEl.id);
    setData(newData);
    setModalState(false);
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
