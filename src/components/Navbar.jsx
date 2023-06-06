import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [humberger, setHumberger] = useState(false);
  const toggleHumberger = (e) => {
    e.preventDefault();
    setHumberger(!humberger);
  };
  return (
    <div className="absolute left-0 right-0 w-full ">
      <section className="flex items-center justify-between w-full navbar-bg px-5 py-4">
        <ul className="md:flex items-center justify-center gap-6 ml-10 text-white list text-[14px] hidden ">
          <li className="list-li_navbar uppercase font-light">
            <a href="#home">Home</a>
          </li>
          <li className="list-li_navbar uppercase font-light">Work</li>
          <li className="list-li_navbar uppercase font-light">
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <div className=" text-white uppercase heading md:ml-[-60px] lg:ml-[-100px] ">
          <h1 className="py-2 px-2 rounded-md font-medium text-[35px] lg:text-[40px] text-center cursor-default ">
            Larana <br /> Creatives
          </h1>
        </div>
        <div className="md:flex py-4 px-4 shadow-sm rounded-md border hover:scale-95 duration-150 ease-in active:scale-75 hidden">
          <h1 className="list-li_navbar uppercase font-light text-white">
            contact
          </h1>
        </div>
        {!humberger ? (
          ""
        ) : (
          <div className="absolute top-[70px] right-24 md:hidden py-6 px-4 bg-[#544541] shadow-md border rounded-lg z-10">
            <ul className=" flex flex-col items-center justify-center text-white list text-[14px]  ">
              <li className="list-li_navbar uppercase font-light">Home</li>
              <li className="list-li_navbar uppercase font-light">Work</li>
              <li className="list-li_navbar uppercase font-light">Blog</li>
            </ul>
          </div>
        )}
        <button onClick={toggleHumberger} className="md:hidden">
          {!humberger ? (
            <CiMenuBurger className="w-[80px] h-[50px] text-stone-800" />
          ) : (
            <GiHamburgerMenu className="w-[80px] h-[50px] text-stone-800" />
          )}
        </button>
      </section>
    </div>
  );
};

export default Navbar;
