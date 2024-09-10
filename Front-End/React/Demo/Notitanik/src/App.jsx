import React from "react";
import "./App.css";
import logo from "./assets/icons/logo.svg";
import useScrollDirection from "./useScrollDirection";
import man from "./assets/icons/man.svg";

const App = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div>
      <header
        className={`fixed top-0 w-full transition-all duration-500 ${
          scrollDirection === "down"
            ? "transform -translate-y-full"
            : "transform translate-y-0"
        } bg-[#040303] `}
      >
        <div className="ctr">
          <div className="inheader flex place-content-center gap-[200px] items-center w-[85%] m-[0_auto] h-[70px]">
            <div>
              <img className="" src={logo} alt="Logo" />
            </div>
            <div className="flex flex-1 text-white justify-between">
              <h1>Home</h1>
              <h1>About me</h1>
              <h1>Portfolio</h1>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </header>
      <main className=" mt-[70px] bg-[#2C2C2C]">
        <div className="ctr">
          <div className=" flex items-center relative w-[85%] m-[0_auto] h-[430px]">
            <div>
              <h1>Hello I'm Mustafoda</h1>
            </div>
            <img
              className="w-[520px]  absolute left-[460px]"
              src={man}
              alt=""
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
