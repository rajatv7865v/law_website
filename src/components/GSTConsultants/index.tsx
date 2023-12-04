import React from "react";
import Image from "next/image";
import GST from "@/assets/images/GSTconsultants.jpeg";
import { useRouter } from "next/router";


const index = () => {
  const router=useRouter()

  return (
    <div className="max-w-[1110px] mx-auto flex m-10">
      <div className="basis-[40%]">
        <Image src={GST} alt="GST"  className="w-[90%]"/>
      </div>
      <div className="basis-[60%] ">
        <h2 className="font-bold text-[20px]">GST Consultants</h2>
        <p className="text-gray-900 py-1">
          GSTIN (Goods and Services Tax Identification Number) registration
          refers to the process of obtaining a unique identification number for
          businesses under the GST regime. GSTIN is a 15-digit alphanumeric code
          that serves as a recognition of a business entity as a registered
          taxpayer. GST Registration Process in India is completely online. It
          requires no manual intervention or no physical paper submissions. A
          very simple procedure has been prescribed for GST Registration. Here
          are some key points to understand about GSTIN registration.
        </p>
        <p className="text-gray-900 py-1 pb-4">
          Businesses engaged in the supply of goods or services with an annual
          turnover above the threshold specified by the tax authorities are
          generally required to register for GST and obtain a GSTIN. The
          threshold limit for GST registration may vary by jurisdiction
        </p>
        <button onClick={()=>router.push('/AboutUs')} className=" px-5 py-2 rounded text-white bg-blue-800 ml-0">Read More</button>
      </div>
    </div>
  );
};

export default index;
