import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-[#3F93A5]">
        <div className="md:w-[70%] xxs:w-11/12  mx-auto flex lg:justify-center flex-col lg:items-center py-8">
          <h3 className="text-white text-5xl font-extrabold xxs:m-0">
            Stay in touch
          </h3>
          <p className="text-white text-lg font-bold lg:py-4 xxs:py-2 ">
            Get the latest blogs, events, and more directly in your inbox.
          </p>
          <div className="flex xxs:flex-col lg:flex-row xxs:w-full lg:justify-center">
            <div className="flex xxs:flex-col lg:flex-row lg:border-y lg:border-r-0 lg:border-l xxs:border-x xxs:border-b-0 xxs:border-t border-white py-1">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="shadow-none py-2 px-4 focus-visible:outline-0 back bg-transparent placeholder-white"
                />
              </div>
              <div className="lg:border-l xxs:border-t lg:border-t-0">
                <input
                  type="text"
                  placeholder="Last name"
                  className="shadow-none py-2 px-4 focus-visible:outline-0 back bg-transparent placeholder-white"
                />
              </div>
              <div className="lg:border-l xxs:border-t lg:border-t-0">
                <input
                  type="email"
                  placeholder="Email address"
                  className="shadow-none py-2 px-4 focus-visible:outline-0 back bg-transparent placeholder-white"
                />
              </div>
            </div>
            <button className="uppercase px-7 py-2 bg-[#EDB331] border-[#EDB331] text-[13px] font-extrabold text-white whitespace-nowrap">
              subscribe to newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
