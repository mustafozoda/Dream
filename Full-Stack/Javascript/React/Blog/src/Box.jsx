import React from "react";

function Box(props) {
  return (
    <div className="m-[40px]">
      <img
        className="border rounded-[20px]"
        src={props.img}
        alt={props.imgAlt || "First Image"}
      />

      <img
        className="pt-[20px] cursor-pointer"
        src={props.img2}
        alt={props.img2Alt || "Second Image"}
      />

      <h1 className="poppins-font leading-[70px] text-[30px]">
        {props.headerWord}
      </h1>

      <h3 className="poppins-font-h3 text-[18px] text-justify text-[#9F9F9F]">
        {props.paragraph}
      </h3>

      <div className="pt-[40px]">
        <h1 className="text-[16px] poppins-font">{props.readMore}</h1>

        {props.line && (
          <img className="pt-[8px]" src={props.line} alt="Line Divider" />
        )}
      </div>
    </div>
  );
}

Box.defaultProps = {
  img: null,
  img2: null,
  imgAlt: "Placeholder image",
  img2Alt: "Placeholder image",
  headerWord: "Nothing",
  paragraph: "Nothing",
  readMore: "Please not Read",
  line: "Nothing",
};

export default Box;
