import DateDisplay from "./DateDisplay";
import Search from "./Search";
import Logo from "./Logo";
export default function Header({ data, setData, todo }) {
  return (
    <div className="flex items-center justify-between bg-[#f2f2f2] px-[55px] py-[8px]">
      <div className="">
        <Logo />
      </div>
      <div className="w-[60%]">
        <Search data={data} setData={setData} todo={todo} />
      </div>
      <div className="">
        <DateDisplay />
      </div>
    </div>
  );
}
