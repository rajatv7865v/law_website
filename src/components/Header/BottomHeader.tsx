import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const BottomHeader = () => {
  const [navBar, setNavBar] = useState<Boolean>(false);

  return (
    <main>
      <nav className="p-4 g-whiten shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[28px] font-[700] text-[#4154F1]">
            {/* <Image className="h-10 mx-4 inline " width={90} src={Logo} alt="logo" /> */}
            Logo
          </span>
          <span
            className="text-3xl cursor-pointer md:hidden  block mx-2 "
            onClick={() => setNavBar(!navBar)}
          >
            {navBar ? <IoMdClose /> : <IoMdMenu />}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500  ${
            navBar ? "top-[80px] opacity-100" : ""
          }`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              href="/"
              className="text-xl font-[500] hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              href="/AboutUs"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              About
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              href="/OurServices"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Our Services
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              href="/ContactUs"
              className="text-xl font-[500]  hover:text-[#4154F1] duration-500 text-[#012970]"
            >
              Contact Us
            </Link>
          </li>
        
          
          <button className="bg-[#D67900] text-white duration-500 px-6 py-2 mx-4  rounded">
            Helpline No: +91-8527852095
          </button>
        </ul>
      </nav>
    </main>
  );
};

export default BottomHeader;
