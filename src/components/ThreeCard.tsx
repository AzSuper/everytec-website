"use client";
import React, { useRef, useEffect, useState } from "react";
import { IoCodeSlash } from "react-icons/io5";

const ThreeCard = () => {
  const cardRef = useRef(null);
  const [terminalLines, setTerminalLines] = useState([
    "sys.Create(ClientDreamProject)",
  ]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateY = (x / width - 0.5) * 20;
    const rotateX = (0.5 - y / height) * 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  useEffect(() => {
    const sequence = [
      "sys.Build.Transpile()",
      "sys.Build.BundleAssets()",
      "sys.Build.Optimize()",
      "sys.Deploy.UploadToCDN()",
      "sys.Deploy.Complete ✓",
    ];
    let index = 0;
    const interval = setInterval(() => {
      if (index < sequence.length - 1) {
        setTerminalLines((prev) => [...prev, sequence[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[400px] perspective-[1000px] "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="transition-transform duration-300 ease-out w-full h-full rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-pink-400/10 relative flex flex-col p-4 shadow-xl"
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10 blur-2xl opacity-30 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-2xl"></div>

        {/* Header */}
        <div className="flex gap-3 items-center mb-4">
          <div className="p-4 bg-purple-700 rounded-xl text-white">
            <IoCodeSlash size={24} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Your Project Dashboard
            </h3>
            <h4 className="text-xs text-zinc-300">
              Real-time magic happens here
            </h4>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="w-full bg-zinc-900/60 rounded-xl overflow-hidden shadow-inner border border-[#3f3f461a] window">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-800/20 rounded-t-xl">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2">live-coding.tsx</span>
          </div>

          <div className="p-4 text-xs text-green-400 font-mono min-h-[100px] space-y-1">
            {terminalLines.map((line, idx) => (
              <p
                key={idx}
                className="relative transition-opacity duration-300 ease-in-out animate-fadein"
              >
                ✨ {line}
                <span className="absolute -top-1 right-1 text-yellow-300 animate-sparkle">
                  ✸
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Stages Section */}
        <div className="mt-6 text-xs text-white space-y-3">
          <Stage
            title="💡 Discovery & Planning"
            progress={100}
            color="bg-green-400"
          />
          <Stage
            title="⚡ Design & Prototyping"
            progress={70}
            color="bg-purple-400"
          />
          <Stage title="⌛ Development" progress={40} color="bg-zinc-300" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadein {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-sparkle {
          animation: sparkle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const Stage = ({ title, progress, color }) => {
  return (
    <div>
      <div className="mb-1 flex justify-between items-center">
        <span>{title}</span>
        {progress === 100 && <span className="text-green-300 text-sm">✓</span>}
      </div>
      <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ThreeCard;
