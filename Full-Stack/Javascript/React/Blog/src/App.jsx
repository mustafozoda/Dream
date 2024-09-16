import React from "react";
import "./App.css";
import Login from "./Login.jsx";
import Box from "./Box.jsx";
import logo from "./assets/Logo.svg";
import logo2 from "./assets/logo@2.svg";
import zn1 from "./assets/a.svg";
import zn2 from "./assets/b.svg";
import zn3 from "./assets/c.svg";
import zn4 from "./assets/d.svg";
import main from "./assets/main.svg";
import laptop from "./assets/laptop.svg";
import laptop1 from "./assets/laptop1.svg";
import laptop2 from "./assets/laptop2.svg";
import underpic from "./assets/underPic.svg";
import line from "./assets/Line.svg";
import loop from "./assets/loop.svg";
import r1 from "./assets/r1.svg";
import r2 from "./assets/r2.svg";
import r3 from "./assets/r3.svg";
import r4 from "./assets/r4.svg";
import r5 from "./assets/r5.svg";

import p1 from "./assets/price.svg";

const formatDate = (date) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options); // Example: '03 Aug 2002'
};

const categoriess = [
  {
    idx: new Date().getTime(),
    key: "Crafts",
    value: 2,
  },
  {
    idx: new Date().getTime(),
    key: "Design",
    value: 21,
  },
  {
    idx: new Date().getTime(),
    key: "Handmade",
    value: 22,
  },
  {
    idx: new Date().getTime(),
    key: "Interior",
    value: 214,
  },
  {
    idx: new Date().getTime(),
    key: "Wood",
    value: 214,
  },
];
const recPost = [
  {
    idx: new Date().getTime(),
    img: r1,
    topic: "Going all-in with millennial design",
    date: formatDate(new Date()),
  },
  {
    idx: new Date().getTime(),
    img: r2,
    topic: "Exploring new ways of decorating",
    date: formatDate(new Date()),
  },
  {
    idx: new Date().getTime(),
    img: r3,
    topic: "Handmade pieces that took time to make",
    date: formatDate(new Date()),
  },
  {
    idx: new Date().getTime(),
    img: r4,
    topic: "Modern home in Milan",
    date: formatDate(new Date()),
  },
  {
    idx: new Date().getTime(),
    img: r5,
    topic: "Colorful office redesign",
    date: formatDate(new Date()),
  },
];

const array = [
  {
    idx: new Date().getTime(),
    img: p1,
    title: "High Quality",
    about: "crafted from top materials",
  },
  {
    idx: new Date().getTime(),
    img: p1,
    title: "Warranty Protection",
    about: "crafted from top materials",
  },
  {
    idx: new Date().getTime(),
    img: p1,
    title: "Free Shipping",
    about: "crafted from top materials",
  },
  {
    idx: new Date().getTime(),
    img: p1,
    title: "24 / 7 Support",
    about: "crafted from top materials",
  },
];

const App = () => {
  return (
    <div>
      <header className=" ">
        <nav className="ctr bg-[#3c3c3c22]">
          <div className="flex h-[80px] justify-between items-center w-[90%] m-[0_auto]">
            <div>
              <img className="cursor-pointer" src={logo} alt="Logo" />
            </div>
            <div className="flex text-[16px] poppins-font gap-[45px]">
              <a className="hover:underline" href="">
                Home
              </a>
              <a className="hover:underline" href="">
                Shop
              </a>
              <a className="hover:underline" href="">
                About
              </a>
              <a className="hover:underline" href="">
                Contact
              </a>
            </div>
            <div className="flex gap-[35px]">
              {/* <img className="cursor-pointer" src={zn4} alt="" /> */}
              <Login />
              <img className="cursor-pointer" src={zn1} alt="" />
              <img className="cursor-pointer" src={zn3} alt="" />
              <img className="cursor-pointer " src={zn2} alt="" />
            </div>
          </div>
        </nav>
      </header>
      <section className="">
        <div className="inSec1 ctr">
          <div
            className=" flex items-center justify-center w-full h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${main})` }}
          >
            <div className=" poppins-font leading-[5px] flex flex-col">
              <img src={logo2} alt="Logo" />
              <h1 className=" text-[48px]">Blog</h1>
              <h2 className="pt-[45px] text-[16px]">
                <span className="font-bold hover:underline cursor-pointer">
                  Home {" > "}{" "}
                </span>{" "}
                Blog
              </h2>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="ctr bg-[#3c3c3c22]">
          <div className="flex justify-center p-[70px] h-full items-start w-full">
            <div className="right-Side flex flex-col justify-center w-[65%] h-full ">
              <Box
                img={laptop}
                img2={underpic}
                headerWord="Going all-in with millennial design"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
                readMore="Read More"
                line={line}
              />
              <Box
                img={laptop1}
                img2={underpic}
                headerWord="Exploring new ways of decorating"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
                readMore="Read More"
                line={line}
              />
              <Box
                img={laptop2}
                img2={underpic}
                headerWord="Handmade pieces that took time to make"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
                readMore="Read More"
                line={line}
              />
            </div>
            <div className="left-Side p-[40px] flex flex-col gap-[60px] justify-start items-center w-[35%] h-full ">
              <div className="m-[0px] flex  w-full">
                <input
                  className=" h-[60px] w-full rounded-r-none rounded-[10px]"
                  type="search"
                  name="search"
                  id="#1"
                />
                <button className=" bg-white flex items-center justify-center  w-[20%]  h-[60px] rounded-[10px] rounded-l-none">
                  <img className="w-[28px]" src={loop} alt="" />
                </button>
              </div>
              <div className="w-[90%] ">
                <h1 className="text-[24px]   poppins-font">Categories</h1>
                {categoriess.map((el, idx) => (
                  <div
                    key={el.idx}
                    className="flex box-card mt-[15px] p-[10px] justify-between poppins-font-h3 text-[18px] text-[#9F9F9F]"
                  >
                    <h1 className="">{el.key}</h1>
                    <span key={idx}>{el.value}</span>
                  </div>
                ))}
              </div>
              <div className="w-[90%] ">
                <h1 className="text-[24px] poppins-font">Recent Posts</h1>
                {recPost.map((el, idx) => (
                  <div
                    key={el.idx}
                    className=" card-box-2 flex  items-center gap-[15px] mt-[15px] p-[10px]"
                  >
                    <img src={el.img} alt="img" />
                    <div className="w-[55%]">
                      <h1 className="poppins-font text-[14px]">{el.topic}</h1>
                      <h3 className=" pt-[5px] text-[#9F9F9F]">{el.date}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="ctr bg-[#eedec9] ">
          <div className="flex p-[110px] items-center justify-between">
            {array.map((el, idx) => (
              <div key={el.idx} className="flex ">
                <img src={el.img} alt="img" />
                <div>
                  <h1 className="text-[20px] poppins-font">{el.title}</h1>
                  <h3 className="text-[#898989] text-[16px] poppins-font-h3">
                    {el.about}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#3a3434] h-[4000px]"></div>
    </div>
  );
};

export default App;
