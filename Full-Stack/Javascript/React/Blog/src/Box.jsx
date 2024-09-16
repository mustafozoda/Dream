import React from "react";

function Box({
  img = null,
  img2 = null,
  imgAlt = "Placeholder image",
  img2Alt = "Placeholder image",
  headerWord = "Unknown",
  paragraph = "Unknown",
  readMore = "Please not Read",
  line = "Unknown",
}) {
  return (
    <div className="m-[40px]">
      <img className="border rounded-[20px]" src={img} alt={imgAlt} />

      <img className="pt-[20px] cursor-pointer" src={img2} alt={img2Alt} />

      <h1 className="poppins-font leading-[70px] text-[30px]">{headerWord}</h1>

      <h3 className="poppins-font-h3 text-[18px] text-justify text-[#9F9F9F]">
        {paragraph}
      </h3>

      <div className="pt-[40px]">
        <h1 className="text-[16px] poppins-font">{readMore}</h1>

        {line !== "Nothing" && (
          <img className="pt-[8px]" src={line} alt="Line Divider" />
        )}
      </div>
    </div>
  );
}

export default Box;
