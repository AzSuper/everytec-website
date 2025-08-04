"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import LeftHeroSide from "./../components/LeftHeroSide";
import RightSection from "./../components/RightSection";
import "../components/styles/stars.css";

const Hero = () => {
  // Scroll progress for the whole page
  const { scrollYProgress } = useScroll();

  // Transform scroll into scale value:
  // from 0 to 0.3 scroll = scale 1 to 0
  const rawScale = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Transform scroll into opacity value:
  // from 0 to 0.25 scroll = opacity 1 to 0 (fades out slightly before fully scaled down)
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Add spring for smooth animation
  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  // Add spring for smooth fade animation
  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="min-h-screen flex flex-col content-center md:flex-row lg:flex-row items-center justify-center relative overflow-hidden pt-16 mx-auto px-4 md:px-28 lg:px-32 mt-9"
    >
      <div id="stars"></div>
      <LeftHeroSide />
      <div id="stars2"></div>
      <RightSection />
      <div id="stars3"></div>
    </motion.div>
  );
};

export default Hero;
