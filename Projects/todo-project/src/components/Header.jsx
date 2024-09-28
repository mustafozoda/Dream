import DateDisplay from "./DateDisplay";
import Search from "./Search";
import Logo from "./Logo";
export default function Header({ data, setData, todo }) {
  return (
    <div className="flex items-center gap-[30px] bg-[#f2f2f2] px-[10px] py-[8px] tablet:px-[20px]">
      <div className="">
        <Logo />
      </div>
      <div className="w-full">
        <Search data={data} setData={setData} todo={todo} />
      </div>
      <div className="hidden laptop:block">
        <DateDisplay />
      </div>
    </div>
  );
}
