import React from "react";

const ServiceCard = ({ icon, title, description, features, delay = 0 }) => {
  return (
    <div
      className="group relative rounded-3xl p-8 border border-slate-700/40 transition-all duration-700 hover:border-purple-400/50 cursor-pointer overflow-hidden w-full max-w-md mx-auto shadow-md hover:shadow-purple-500/10 backdrop-blur-xl"
      style={{
        animationDelay: `${delay}ms`,
        transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
        transition: "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "perspective(1200px) rotateX(-4deg) rotateY(6deg) translateY(12px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-lg rounded-2xl p-6 h-full border border-slate-700/30">
        <div className="relative mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
            {icon}
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-400 text-base mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 group/feature"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover/feature:scale-125 transition-transform duration-200"></div>
              <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle glow gradient around the card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
    </div>
  );
};

export default ServiceCard;
