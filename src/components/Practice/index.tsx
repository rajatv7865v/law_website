import React from "react";
import Image from "next/image";
import Card1 from "@/assets/images/card-1.jpg";
import Card2 from "@/assets/images/card-2.jpg";
import Card3 from "@/assets/images/card-3.png";
import Card4 from "@/assets/images/card-4.png";
import Card5 from "@/assets/images/card-5.png";
import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const router=useRouter()
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center flex flex-col ">
        <h1 className="font-bold text-[30px] my-2">Our Areas of Practice</h1>
        <p className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto  py-2">
          GST Registration Process in India is completely online. It requires no
          manual intervention or no physical paper submissions. A very simple
          procedure has been prescribed for GST Registration
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className=" shadow-lg flex flex-col justify-end">
          <Image src={Card1} alt="card" className="p-7" />
          <h1 className="text-center font-bold text-[18px]  ">
            Marriage Registration
          </h1>
          <p className="text-center py-2 px-5">
            Court Marriage Court marriage, also known as ci
          </p>
          <Link href="" className="text-center mb-10 text-blue-700 underline">
            Read More
          </Link>
        </div>
        <div className=" shadow-lg flex flex-col justify-end">
          <Image src={Card2} alt="card" className="p-7" />
          <h1 className="text-center font-bold text-[18px]  ">MSME</h1>
          <p className="text-center py-2 px-5">
            Proprietorship Partnership One Person Company L
          </p>
          <Link href="" className="text-center mb-10 text-blue-700 underline">
            Read More
          </Link>
        </div>
        <div className=" shadow-lg flex flex-col justify-end">
          <Image src={Card3} alt="card" className="p-7" />
          <h1 className="text-center font-bold text-[18px]  ">
            Accounting Services
          </h1>
          <p className="text-center py-2 px-5">
            ITR Return Filing IT return filing refers to the proc
          </p>
          <Link href="" className="text-center mb-10 text-blue-700 underline">
            Read More
          </Link>
        </div>
        <div className=" shadow-lg flex flex-col justify-end">
          <Image src={Card4} alt="card" className="p-7" />
          <h1 className="text-center font-bold text-[18px]  ">
            Trademark Services
          </h1>
          <p className="text-center py-2 px-5">
            Trademark Registration Trademark registration refers
          </p>
          <Link href="" className="text-center mb-10 text-blue-700 underline">
            Read More
          </Link>
        </div>
        <div className=" shadow-lg flex flex-col justify-end">
          <Image src={Card5} alt="card" className="p-7" />
          <h1 className="text-center font-bold text-[18px]  ">
            GST Consultant
          </h1>
          <p className="text-center py-2 px-5">
            GST Audit GST audit refers to the examination and ver
          </p>
          <Link href="" className="text-center mb-10 text-blue-700 underline">
            Read More
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between ">
      <button onClick={()=>router.push('/OurServices')} className="px-6 py-2 rounded bg-[#BB2D3B] text-white mx-auto  my-8">All Service</button>

      </div>
    </div>
  );
};

export default index;
