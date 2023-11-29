import React from "react";

const index = () => {
  return (
    <div className="flex justify-center bg-[#225E89] p-4">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-white text-3xl font-medium">
          Our Trusted Clients
        </div>
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center text-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
                    alt="" 
                    className="rounded-full w-[40%]"
                  />
                  <div className="text-stone-600 font-medium m-2">
                    {" "}
                    Excellent work and so cooperative team in this company
                    that’s why wonderful experience i got in this company and I
                    am so satisfied with their work.
                  </div>
                  <div className="font-bold pb-5">Sobhit</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center text-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
                    alt=""
                    className="rounded-full w-[40%]"
                  />
                  <div className="text-stone-600 font-medium m-2">
                    The customer is very important, the customer will be
                    followed by the customer. As the land of the land, the
                    mourning nor the corporal of the land, the pillow of the
                    lion.
                  </div>
                  <div className="font-bold pb-5">Rohit</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center text-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
                    alt=""
                    className="rounded-full w-[40%]"
                  />
                  <div className="text-stone-600 font-medium m-2">
                    Very good service with all the jobs done within the time
                    promised and very helpful staffing
                  </div>
                  <div className="font-bold pb-5">Sachin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
