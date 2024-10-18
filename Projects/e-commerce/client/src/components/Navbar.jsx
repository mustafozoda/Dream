import React, { useState, useEffect } from "react";
import { mainImg } from "../assets/index.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [fontColor, setFontColor] = useState("text-black");
  const [currentImage, setCurrentImage] = useState(0);
  const imagesArray = Object.values(mainImg);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor("bg-[#073137]");
        setFontColor("text-[#f8f8f8]");
      } else {
        setBgColor("bg-transparent");
        setFontColor("text-black");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesArray.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imagesArray.length]);

  return (
    <section
      className="bg-menu relative h-[85vh] w-full"
      style={{
        backgroundImage: `url(${imagesArray[currentImage]})`,
      }}
    >
      <nav
        className={`container fixed flex h-[7vh] items-center justify-between px-[30px] transition-colors duration-300 ${fontColor} ${bgColor} z-20`}
      >
        <div className="">
          <h1 style={{ fontWeight: 500 }} className="text-[25px]">
            Gesu-Shop
          </h1>
        </div>
        <div className="flex gap-5">
          <NavLink to="/">
            <p className="hover:text-gray-300">HOME</p>
            <hr className="hidden" />
          </NavLink>
          <NavLink to="/about">
            <p className="hover:text-gray-300">ABOUT</p>
            <hr className="hidden" />
          </NavLink>
          <NavLink to="/login">
            <p className="hover:text-gray-300">LOGIN</p>
            <hr className="hidden" />
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

{
  /* <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
        <h1 className="text-4xl font-bold ">Welcome to Our Shop</h1>
      </div> */
}

{
  /* <div className="group relative cursor-pointer">
              <p className="log">Login</p>
              <div className="absolute right-[39.2px] hidden h-[100px] w-[100px] group-hover:block">
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </div>
            </div> */
}
