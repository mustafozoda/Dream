import { handleDelete } from "../components/Delete";

export default function ConfirmDeleteModal({
  setModal,
  modal,
  filteredEl,
  data,
  setData,
  setModalState,
}) {
  console.log(filteredEl);
  console.log(typeof setModal);
  console.log(data);

  return (
    <>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="modal-confirm-delete fixed left-0 top-0 z-[1000] flex h-full w-full items-start justify-center bg-gray-700 bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-[200px] flex h-[180px] w-[450px] flex-col items-center justify-center bg-white p-4 text-center shadow-lg"
          >
            <h2 className="text-[30px]">Are you sure?</h2>
            <h5 className="mb-[10px]">
              Are you sure you want to delete this item? You can't undo this
            </h5>
            <div className="flex w-full items-center justify-between px-[15px]">
              <button
                onClick={() => {
                  handleDelete(filteredEl, data, setData, setModalState);
                  setModal(false);
                }}
                className="rounded bg-red-700 px-4 py-2 text-white hover:bg-red-800"
              >
                Absolutely
              </button>
              <button
                onClick={() => setModal(false)}
                className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
              >
                Nope :(
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
