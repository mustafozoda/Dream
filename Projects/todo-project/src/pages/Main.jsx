import { useState } from "react";
import ModalWindows from "../components/ModalWindows";
import Navbar from "../components/Navbar";
import Pages from "./Pages";
import ModalWinAdd from "../components/ModalWinAdd";
import ModalWinEdit from "../components/ModalWinEdit";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

export default function Main({ data, setData }) {
  const [idx, setIdx] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const filteredEl = data.find((el) => el.id === idx);
  const [modal, setModal] = useState(false);

  return (
    <div className="flex h-full w-full">
      <section className="w-[20%] bg-red-800">
        <Navbar />
      </section>
      <section className="w-[80%] bg-white laptop:relative">
        <Pages
          data={data}
          setIdx={setIdx}
          setModalState={setModalState}
          setAddModalState={setAddModalState}
          setData={setData}
          setModal={setModal}
        />
        {modalState && (
          <ModalWindows
            setData={setData}
            data={data}
            idx={idx}
            filteredEl={filteredEl}
            modalState={modalState}
            setModalState={setModalState}
            setEditModalState={setEditModalState}
            setModal={setModal}
          />
        )}
        {addModalState && (
          <ModalWinAdd setAddModalState={setAddModalState} setData={setData} />
        )}
        {editModalState && (
          <ModalWinEdit
            setData={setData}
            idx={idx}
            setIdx={setIdx}
            setEditModalState={setEditModalState}
            setModalState={setModalState}
            data={data}
          />
        )}
        {modal && (
          <ConfirmDeleteModal
            filteredEl={filteredEl}
            modal={modal}
            setData={setData}
            data={data}
            idx={idx}
            setModal={setModal}
            setModalState={setModalState}
          />
        )}
      </section>
    </div>
  );
}
