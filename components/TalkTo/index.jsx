/* eslint-disable react/jsx-key */
import React from "react";
import { Button } from "../Button";

const CardData = [
  {
    name: "Call Us",
    shortdiscrption: "346-703-0051",
    dicription:
      "Non adipiscing nibh pretium aliquam accumsan tellus laoreet elementum. Dictum fermentum ac.",
    buttonText: "Call Now",
  },
  {
    name: "Resource",
    shortdiscrption: "Provider Application",
    dicription:
      "Eu, vitae mauris nec, eget. Diam proin erat neque venenatis. Malesuada malesuada risus non, amet. Tellus amet sed.",
    buttonText: "Apply Now",
  },
];
const TalkTo = () => {
  return (
    <>
      <div className="bg-talktoBackground bg-cover bg-no-repeat bg-center w-full lg:h-screen xxs:h-full xxs:py-6">
        <div className="xxs:w-11/12 lg:w-4/5  mx-auto h-full flex justify-center items-start flex-col">
          <h3 className="text-black font-extrabold	text-4xl">
            Talk to someone one-on-one!
          </h3>
          <p className="text-black font-normal text-lg md:w-1/2 xxs:w-full xxs:py-2">
            You’ll be connected to a trained mental health navigator who can
            offer support and information about mental health services and
            resources in your area. (Open Monday - Friday 9 am. to 5 pm.)
          </p>
          <div className="flex xxs:flex-col lg:flex-row">
            {CardData.map((data, index) => {
              return (
                <div
                  className={`flex items-center justify-center xxs:w-full md:w-96 h-80 bg-white rounded-xl shadow-md flex-col + ${
                    index == 0 ? "ml-0" : "lg:ml-4 lg:mt-0 xxs:mt-4"
                  }`}
                >
                  <h2 className="text-black font-extrabold	text-2xl">
                    {data.name}
                  </h2>
                  <h2 className="text-black font-extrabold	text-2xl">
                    {data.shortdiscrption}
                  </h2>
                  <p className="m-0 w-4/5 mx-auto text-center">
                    {data.dicription}
                  </p>
                  <div className="py-4">
                    <Button ButtonText={data.buttonText} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TalkTo;
