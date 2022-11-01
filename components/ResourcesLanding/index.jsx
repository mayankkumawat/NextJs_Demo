/* eslint-disable react/jsx-key */
import React from "react";

const BoxData = [
  {
    name: "Mental Health",
    color: "bg-[#79557E]",
  },
  {
    name: "Addiction",
    color: "bg-[#EDB331]",
  },
  {
    name: "Crisis",
    color: "bg-[#90BA6F]",
  },
  {
    name: "Literature",
    color: "bg-[#39667B]",
  },
  {
    name: "Counselors",
    color: "bg-[#C40006]",
  },
  {
    name: "Eating Disorders",
    color: "bg-[#7FB7D1]",
  },
  {
    name: "First Responders",
    color: "bg-[#59355E]",
  },
  {
    name: "Community Services",
    color: "bg-[#D86D1C]",
  },
];
const ResourcesLanding = () => {
  return (
    <>
      <div className=" flex xxs:flex-wrap lg:flex-nowrap">
        {BoxData.map((data, index) => {
          return (
            <div
              className={`lg:w-full xxs:w-1/2  h-14 flex justify-center items-center + ${data?.color}`}
            >
              <p className="text-md text-white font-medium  m-0">{data.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResourcesLanding;
