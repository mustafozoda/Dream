import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const reseter = () => {
    setCount(0);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const getColor = () => {
    if (count > 0) {
      return "green";
    }
    if (count < 0) {
      return "red";
    }
    return "black";
  };

  return (
    <div className="flex poppins-font-h3 gap-[10px] justify-center p-[10px] items-center flex-col">
      <div>
        <span style={{ color: getColor() }} className="cnt text-[65px]">
          {count}
        </span>
      </div>
      <div className="flex w-full gap-[10px] justify-center">
        <button className="btn-for-cnt" onClick={decrement}>
          Decrement
        </button>
        <button className="btn-for-cnt" onClick={reseter}>
          Reset
        </button>
        <button className="btn-for-cnt" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
