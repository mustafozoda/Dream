import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
export default function Edit({ setEditModalState }) {
  return (
    <>
      <button
        onClick={() => setEditModalState(true)}
        className="flex h-[40px] w-[45px] items-center justify-between rounded-[6px] border border-red-700 px-[10px] text-red-700 hover:bg-red-700 hover:text-white"
      >
        <EditTwoToneIcon />
      </button>
    </>
  );
}
