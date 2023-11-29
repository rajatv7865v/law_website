import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdCall, IoMdMail } from "react-icons/io";

const TopHeader = () => {
  return (
    <main className="  ">
      <div className="max-w-[1560px] h-18 lg:h-10 md:h-14 bg-[#225E89]  text-white flex flex-col  lg:flex-row items-center justify-around">
        <div className="flex flex-col md:flex-row items-center lg:gap-5">
          <div className="flex items-center gap-1 ">
            <span>
              <IoMdCall />
            </span>
            +91-8527852095
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoMdMail />
            </span>
            Rahul.Chauhan@laxmiassociateslawfirm.in
          </div>
        </div>
        <div className="flex  gap-5">
          <FaFacebook size={22} />
          <AiFillTwitterCircle size={25} />
        </div>
      </div>
    </main>
  );
};

export default TopHeader;
