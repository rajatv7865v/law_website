import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const index = () => {
  return (
    <div className="max-w-[1536px] bg-[#082032]">
      <div className="w-[70%] mx-auto grid grid-cols-3 text-white">
        <div className="py-8">
          <h2 className="font-bold text-[25px]">
            Laxmi Associates <span className="text-blue-500">Law Firm</span>
          </h2>
          <p className="text-[16px] text-gray-500 py-2">
            Main Dadri Road, Pillar No- 38, Baraula, Sector 49, Noida, Uttar
            Pradesh 201304
          </p>
          <h4 className="py-2 text-bold">+91-8527852095</h4>
          <h4 className="py-2 text-bold">
            Rahul.Chauhan@laxmiassociateslawfirm.in
          </h4>
          <div className="flex gap-8 mx-10 py-2">
            <a href="https://www.facebook.com/laxmiassociate/" target="_blank">
              <FaFacebook size={25} className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/laxmi-associates-law-frim"  target="_blank">
              <FaLinkedin size={25} className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="py-8 pl-20">
          <h2 className="text-[28px] font-bold">Service</h2>
          <ul className="list-disc">
            <li className="py-1 cursor-pointer">Marriage Registration</li>
            <li className="py-1  cursor-pointer">MSME</li>
            <li className="py-1 cursor-pointer">Accounting Services</li>
            <li className="py-1 cursor-pointer">Trademark Services</li>
            <li className="py-1 cursor-pointer">GST Consultant</li>
          </ul>
        </div>
        <div className="py-8  ">
          <h2 className="text-[28px] font-bold">Tax News</h2>
          <h3>
            Income Tax relief for salaried employees: Section 80C to HRA rules
            change expected from Budget 2023{" "}
            <a
              href="https://www.financialexpress.com/money/income-tax-income-tax-relief-for-salaried-employees-section-80c-to-hra-rules-change-expected-from-budget-2023-2918885/"
              className="text-blue-600 font-bold"
              target="_blank"
            >
              Read More
            </a>
          </h3>
          <h3 className="py-2">
            GST Council Meeting Highlights: No tax increase on any item; GST on
            biofuel down from 18% to 5%{" "}
            <a
              href="https://www.moneycontrol.com/news/business/economy/gst-council-meeting-live-updates-fm-sitharaman-at-48th-meeting-decriminalisation-of-offences-on-agenda-9721461.html"
              className="text-blue-600 font-bold"
              target="_blank"
            >
              Read More
            </a>
          </h3>
        </div>
      </div>
      <div className="border-t-[1px] h-12 text white flex items-center justify-center text-gray-500">
        <span>
          Copyright © Laxmi Associates Law Firm 2022-23. All rights Reserved
        </span>
      </div>
    </div>
  );
};

export default index;
