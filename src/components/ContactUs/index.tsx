import Image from "next/image";
import React from "react";
import CONTACTLOGO from '@/assets/images/contact_logo.jpg'

const index = () => {
  return (
    <div className="flex justify-center my-6 ">
      <div className="w-[90%] my-5 mx-auto flex flex-col items-center md:flex-row ">
        <div className="border w-[70%] md:w-[60%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full">
          <Image
            src={CONTACTLOGO}
            alt=""
            className="h-40 w-[90%]"
          />
          <h1 className="font-bold text-[20px]">Adv. Rahul Chauhan</h1>
          <p className="text-black text-justify">
            That's great to know! Mr. Rahul Chauhan sounds like a highly
            experienced professional in the field of tax and GST consulting.
            Having an extensive background in tax law and GST-related litigation
            can be beneficial for clients seeking expert advice and assistance
            in navigating the complexities of GST regulations. It's commendable
            that NCR-based tax and legal law firm specializes in GST-related
            matters and offers comprehensive GST consultation services. This
            indicates a deep understanding of the GST framework and an ability
            to provide clients with the necessary guidance to ensure compliance
            and optimize their tax strategies. The firm's involvement in GST at
            every step, from initial GST registration and migration to the
            finalization of returns, showcases a commitment to providing
            end-to-end solutions for clients' GST requirements. This
            comprehensive approach can be valuable in ensuring accurate and
            timely GST compliance for businesses. Additionally, the organization
            of GST seminars highlights Mr. Chauhan's commitment to knowledge
            sharing and keeping clients informed about the latest developments
            and changes in the GST landscape. By conducting seminars, he can
            help businesses stay updated and adapt their strategies accordingly
            https://www.linkedin.com/in/adv-rahul-chauhan-271328132/
          </p>
        </div>
        <div className="border w-[40%] h-full bg-[#225E89] text-white p-10">
          {" "}
          <span>
            <h1 className="text-3xl font-semibold text-center mb-4 text-yellow-300">
              Contact Us
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
  );
};

export default index;
