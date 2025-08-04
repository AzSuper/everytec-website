import React from "react";
import TitleCapsule from "./TitleCapsule";
import { IoSparklesOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { LuRocket } from "react-icons/lu";
import { GiMagicLamp } from "react-icons/gi";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa";

const LeftHeroSide = () => {
  return (
    <div className="w-full md:w-full lg:w-[70%] h-fit mb-16 md:h-screen lg:h-screen mr-4 px-3">
      <TitleCapsule
        text={"Your Tech Journey Starts Here"}
        icon={<IoSparklesOutline className="text-purple-600" />}
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-neue text-6xl">We're With You</h1>
        <h1 className="font-neue text-purple-600 text-6xl">Every Step</h1>
        <h1 className="font-neue text-6xl">of The Way</h1>
      </div>
      <p className="mt-3 max-w-140 font-extralight text-md">
        From concept to code, from idea to impact. Transform your vision into
        powerful software solutions with a team that never leaves your side.
      </p>
      <div className="flex flex-row gap-3 items-center mt-10">
        <Button className="bg-gradient-to-r from-[#7153e9] via-[#8d5ff6] to-[#93b1f0] font-neue relative reflect overflow-hidden cursor-pointer">
          <LuRocket />
          start building today
          <IoMdArrowRoundForward />
        </Button>
        {/* ////////////////////////////////////////// */}
        <Button className="bg-[#363257] font-neue relative reflect-2 overflow-hidden cursor-pointer">
          <GiMagicLamp />
          See Our Magic
        </Button>
      </div>
      <div className="line w-[100%] md:w-[80%] lg:w-[85%] h-[0.8px] bg-[#efefef56] rounded-full mt-12" />
      <div className="flex flex-row gap-22 mt-8">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 text-md md:text-xl lg:text-xl">
            🚀
            <span className="font-neue text-sm md:text-md lg:text-md flex flex-row items-center text-purple-700">
              100
              <FaPlus className="w-3" />
            </span>
          </div>
          <h3 className="text-[12px] pt-1">Project's Delivered</h3>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 text-xl items-center">
            ⭐
            <span className="font-neue text-sm md:text-md lg:text-md flex flex-row items-center text-purple-700">
              5
              <FaPlus className="w-3" />
            </span>
          </div>
          <h3 className="text-[12px] pt-1">Years Experience</h3>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 text-xl">
            💪
            <span className="font-neue text-sm md:text-md lg:text-md flex flex-row items-center text-purple-700">
              24/7
            </span>
          </div>
          <h3 className="text-[12px] pt-1">Actual Support</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftHeroSide;
