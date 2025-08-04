"use client";
import Hero from "@/pages/Hero";
import Plan from "@/pages/Plan";
import React from "react";
import { JourneyVisualization } from "./../pages/JourneyVisualization";
import { CTASection } from "./../pages/CTASection";
import { Footer } from "@/pages/Footer";

const Page = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Hero />
      <Plan />
      <JourneyVisualization />
      <div className="absolute -z-10 w-full inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20 animate-gradient-bg"></div>
      <div className="absolute  -z-10 w-full inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Page;
