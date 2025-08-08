"use client";

import React from "react";
import { motion } from "motion/react";
import TitleCapsule from "@/components/TitleCapsule";
import { IoRocketSharp } from "react-icons/io5";
import CurvedLoop from "@/components/CurvedLoop";
const LandingAbout = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen flex flex-col justify-center  text-white">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full filter blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full filter blur-2xl z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className=" mx-auto px-6 relative mt-12 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-8 py-12 shadow-2xl"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <TitleCapsule
              text={"Your Tech Journey Starts Here"}
              icon={<IoRocketSharp />}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl md:text-7xl mb-2 font-neue">
                <span className="text-white">We Are</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  EvryTec
                </span>
              </h1>

              <p className="text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are a passionate team of innovators, developers, and
                visionaries dedicated to transforming ideas into powerful
                digital solutions that shape the future.
              </p>
            </motion.div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
              whileTap={{ scale: 0.95 }}
            >
              Let’s Talk
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-white/20 hover:border-white text-white font-semibold py-3 px-6 rounded-xl transition duration-300 backdrop-blur-sm"
              whileTap={{ scale: 0.95 }}
            >
              See More
            </motion.a>
          </div>
        </motion.div>
      </div>
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ Our ✦ Team ✦"
        speed={3}
        curveAmount={0}
        direction="right"
        interactive={true}
        className=""
      />
    </div>
  );
};

export default LandingAbout;
