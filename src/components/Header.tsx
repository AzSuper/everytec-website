import React from "react";
import TitleCapsule from "@/components/TitleCapsule";
import { MdExplore } from "react-icons/md";

const Header = () => {
  return (
    <div className="text-center mb-16 animate-fade-in flex flex-col justify-center items-center">
      <TitleCapsule
        text={"Your Journey With Us"}
        icon={<MdExplore className="text-purple-600" />}
      />
      <h1 className="font-neue text-5xl md:text-6xl font-bold text-white mb-6">
        Every step
        <br />
        <span className="font-neue bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
          perfectly planned
        </span>
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
        We don't just build software - we guide you through every phase of your
        digital transformation with precision and care.
      </p>
    </div>
  );
};
export default Header;
