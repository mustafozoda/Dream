import React from "react";
import zn4 from "./assets/d.svg";

function Login() {
  let count = 0;
  const handleClick = () => {
    if (count < 3) {
      console.log(`Hello It's me the number ${count}`);
      count += 1;
    } else {
      console.log("Stop clicking me");
    }
  };

  return (
    <img
      className="cursor-pointer"
      onClick={handleClick}
      src={zn4}
      alt="Login"
    />
  );
}
export default Login;
