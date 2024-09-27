import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function BackButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex h-[40px] w-[80px] items-center justify-between rounded-[6px] border border-red-700 px-[7px] text-red-700 hover:bg-red-700 hover:text-white"
      >
        <ArrowLeftIcon />
        Back
      </button>
    </>
  );
}
