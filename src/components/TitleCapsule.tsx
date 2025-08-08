import React from "react";
import { motion } from "motion/react";

const TitleCapsule = ({ text, icon }) => {
  return (
    <div className="mb-10 flex flex-row items-center content-center justify-center gap-3 p-3 rounded-full w-fit bg-gradient-to-r from-[#463d8344] to-[#563a8259]">
      <p className="text-2xl text-purple-600">{icon}</p>
      <h3 className=" text-center text-sm">{text}</h3>
    </div>
  );
};

export default TitleCapsule;
