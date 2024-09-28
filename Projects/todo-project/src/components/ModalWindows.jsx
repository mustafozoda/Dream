import todoImg from "../assets/todoImg.png";
import BackButton from "./BackButton";
import Complete from "./Complete";
import Delete from "./Delete";
import Edit from "./Edit";

export default function ModalWindows({
  data,
  setData,
  modalState,
  setModalState,
  filteredEl,
  setEditModalState,
  setModal,
}) {
  return (
    <div
      onClick={() => setModalState(false)}
      className="modal-win absolute left-0 top-0 z-[100] flex h-full w-[100%] items-start justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-full w-[500px] bg-white"
      >
        {filteredEl ? (
          <div className="flex flex-col justify-center gap-8 p-[20px]">
            <div className="flex items-start gap-[10px]">
              <div>
                <img
                  className={`${filteredEl.completed ? "border-green-600" : "border-red-700"} w-[150px] rounded-[25px] border-[3px]`}
                  src={todoImg}
                  alt="img"
                />
              </div>
              <div className="truncate">
                <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-[25px] text-red-700">
                  {filteredEl.title}
                </h1>
                <h1>Priority: {filteredEl.priority}</h1>
                <h1>Category: {filteredEl.category}</h1>
                <h1 className="pt-[15px] text-[10px] text-[#A1A3AB]">
                  DueDate: {filteredEl.dueDate}
                </h1>
                <hr className="border-red-700" />
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-[25px] text-red-700">Description</h1>
                <p>{filteredEl.description}</p>
                <h1 className="pt-[20px] text-[25px] text-red-700">Notes</h1>
                <p>{filteredEl.notes}</p>
              </div>
              <div className="flex items-center justify-between pt-[40px]">
                <div>
                  <BackButton onClick={() => setModalState(false)} />
                </div>
                <div className="flex gap-[10px]">
                  <Delete
                    setModalState={setModalState}
                    modalState={modalState}
                    filteredEl={filteredEl}
                    setData={setData}
                    data={data}
                    setModal={setModal}
                  />
                  <Edit
                    setEditModalState={setEditModalState}
                    setData={setData}
                    data={data}
                  />
                  <Complete
                    filteredEl={filteredEl}
                    setData={setData}
                    data={data}
                  />
                </div>
              </div>
            </div>
            <hr className="border-dashed border-red-700" />
          </div>
        ) : (
          <h1>Item not found</h1>
        )}
      </div>
    </div>
  );
}
