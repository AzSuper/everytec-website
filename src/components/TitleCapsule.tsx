import React from "react";
import { motion } from "motion/react";

const TitleCapsule = ({ text, icon }) => {
  return (
    <div className="mb-12 flex flex-row items-center gap-3 p-3 rounded-full w-fit bg-gradient-to-r from-[#463d8344] to-[#563a8259] ">
      {icon}
      <h3 className="font-neue text-sm">{text}</h3>
    </div>
  );
};

export default TitleCapsule;
