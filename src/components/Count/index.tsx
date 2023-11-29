import React from "react";

const index = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r from-[#225E89] via-[#4586b4] to-[#1a73b3] ">
        <div className="flex-col items-center justify-center text-white">
          <div className="flex">
            <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 justify-around w-full h-auto lg:h-64 items-center ">
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4">
                <div className="flex-col space-y-2 items-center px-0 md:px-6">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">10+</div>
                  <div className="text-sm font-medium text-gray-200">
                    Services
                  </div>
                </div>
              </div>
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                <div className="flex-col space-y-2">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">100+</div>
                  <div className="text-sm font-medium text-gray-200">
                    Happy Customer{" "}
                  </div>
                </div>
              </div>
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                <div className="flex-col space-y-2">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">5+</div>
                  <div className="text-sm font-medium text-gray-200">
                    Team
                  </div>
                </div>
              </div>
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                <div className="flex-col space-y-2">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">24x7</div>
                  <div className="text-sm font-medium text-gray-200">
                    Supports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
