import { useState } from "react";
import ModalWindows from "../components/ModalWindows";
import Navbar from "../components/Navbar";
import Pages from "./Pages";
import ModalWinAdd from "../components/ModalWinAdd";
import ModalWinEdit from "../components/ModalWinEdit";

export default function Main({ data, setData }) {
  const [idx, setIdx] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const filteredEl = data.find((el) => el.id === idx);

  return (
    <div className="flex h-full w-full">
      <section className="h-full w-[20%] bg-red-800">
        <Navbar />
      </section>
      <section className="relative w-[80%] bg-white">
        <Pages
          data={data}
          setIdx={setIdx}
          setModalState={setModalState}
          setAddModalState={setAddModalState}
          setData={setData}
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
      </section>
    </div>
  );
}
