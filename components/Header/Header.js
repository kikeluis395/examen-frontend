import React, { useEffect, useState } from "react";
import { PATH_IMG } from "../../lib/paths";
import Image from "next/image";

const Header = ({ main }) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const HandleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
  }, [scrollHeight]);
  return (
    <header
      className={`bg-black ${scrollHeight>20?"bg-opacity-100": "bg-opacity-0"} fixed w-full z-10	duration-500`}
      onClick={toTheTop}
    >
      <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto py-4 ">
        <div className="header-wrapper flex items-center justify-between">
          <div className="header-logo">
            <a href="" className="flex justify-center items-center">
              <Image
                className={`${scrollHeight>20?"": "filter invert"}`}
                src={`${PATH_IMG}${main.logo_white}`}
                alt={main.title}
                width={70}
                height={70}
              />
              <h1 className={`${scrollHeight>20?"text-white ": "text-black"} font-semibold ml-2 leading-relaxed`}>
                {main.title}
              </h1>
            </a>
          </div>

          <div className="toggle md:hidden">
            <button></button>
          </div>
        </div>
      </div>
    </header>
    // <header classNameName="bg-primary">
    //   <div classNameName="flex justify-between align-middle w-10/12 p-4 m-auto">
    //     <div classNameName="flex">
    //       <h1 classNameName="text-white text-lg font-semibold">
    //         {main.title}
    //       </h1>
    //       <Image src={`${PATH_IMG}${main.logo_white}`} alt="" width={100} height={100}/>
    //     </div>
    //     <nav >
    //       <ul classNameName="flex justify-between items-center">
    //         <li classNameName="m-2">Proyectos</li>
    //         <li classNameName="m-2">Conversemos</li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Header;
