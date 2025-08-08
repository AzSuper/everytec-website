import React from "react";
import LandingAbout from "@/pages/LandingAbout";
import Beams from "@/components/Beams";

const page = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div
        style={{
          width: "100%",
          height: "1000px",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={20}
        />
      </div>
      <LandingAbout />
    </section>
  );
};

export default page;
