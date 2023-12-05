import Image from "next/image";
import React from "react";
import Carousal1 from "@/assets/images/TAX-scaled-e1682070582114.jpg";
import Carousal2 from "@/assets/images/accounting.png";
import Link from "next/link";

const index = () => {
  return (
    <div className="relative">
      <div className=" ">
        <Image src={Carousal1} alt="img" className="h-[85vh]" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-6xl font-bold">LAXMI ASSOCIATES AND LAW FIRM</p>
          <div className="p-5 flex  items-center justify-center gap-8">
            <Link href='/AboutUs' className="bg-[#225E8A] hover:bg-red-700 text-white font-bold py-3 px-6 mt-4 rounded " >
              About Us
            </Link>
            <Link href='/our-services' className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-4 rounded border-2">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
