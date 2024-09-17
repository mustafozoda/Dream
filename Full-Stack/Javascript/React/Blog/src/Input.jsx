import React, { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="poppins-font-h3 flex flex-col gap-5 ">
      <div>
        <input
          className="inp-class"
          type="text"
          onChange={handleName}
          value={name}
          maxLength="12"
          style={{ paddingLeft: "10px" }}
        />
        <h1 className="pt-[20px]">
          Your Name is: &nbsp;
          {name}
        </h1>
      </div>
      <div>
        <input
          className="inp-class"
          type="number"
          onChange={handleAge}
          value={age}
          style={{ paddingLeft: "10px" }}
        />
        <h1 className="pt-[20px]">
          Your Age is: &nbsp;
          <span>{age}</span>
        </h1>
      </div>
    </div>
  );
}
export default Input;
