import Image from "next/image";
import React from "react";
import CONTACTLOGO from "@/assets/images/contactUs_logo.jpg";

const index = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-[28px] mt-10">Get In Touch</h1>
      <div className="flex justify-center my-6 ">
        <div className="w-[90%] my-5 mx-auto flex flex-col items-center md:flex-row ">
          <div className="border w-[25%] md:w-[60%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full">
            <Image src={CONTACTLOGO} alt="" className="h-40 w-[90%]" />
          </div>
          <div className="border w-[75%] h-full bg-[#225E89] text-white p-10">
            {" "}
            <span>
              <h1 className="text-3xl font-semibold text-center mb-4 text-yellow-300">
                Get In Touch
              </h1>
              <p className="text-xs font-normal mt-2 text-center">
                Contact us by filling this contact form.{" "}
              </p>
            </span>
            <div className="mt-6 leading-7 text-center">
              {" "}
              <input
                type="text"
                name=""
                placeholder="Full Name"
                id=""
                className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-[#225E89] focus:outline-none"
              ></input>
              <input
                type="email"
                name=""
                placeholder="Email Address"
                id=""
                className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-[#225E89] focus:outline-none"
              ></input>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                id="phone"
                className="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-[#225E89] focus:outline-none"
              ></input>
              <textarea
                id="message"
                name="message"
                placeholder="Write us a message"
                className="w-[80%] bg-[#225E89] border-2 border-white h-44 text-sm outline-none placeholder:text-white placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"
              ></textarea>
              <button className="block m-auto w-[60%] md:w-[50%] text-center border bg-blue-900 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-yellow-400">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
