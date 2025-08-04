import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Lightbulb,
  PenTool,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  ChevronRight,
  Check,
  Zap,
  ArrowDown,
} from "lucide-react";

const journeySteps = [
  {
    id: 1,
    title: "Idea Spark",
    subtitle: "Discovery & Strategy",
    description:
      "We ignite your vision with deep research and strategic planning",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-500",
    artifacts: ["📋 Project Brief", "🎯 Goals Map", "📊 Market Research"],
    codeLines: [
      "const discovery = {",
      "  vision: 'Your Dream Project',",
      "  research: analyzeMarket(),",
      "  strategy: createRoadmap()",
      "};",
    ],
  },
  {
    id: 2,
    title: "Design Magic",
    subtitle: "UI/UX & Prototyping",
    description: "Crafting beautiful, user-centric designs that captivate",
    icon: PenTool,
    color: "from-pink-400 to-purple-500",
    artifacts: ["🎨 Wireframes", "🖼️ Mockups", "⚡ Prototype"],
    codeLines: [
      "const design = {",
      "  wireframes: createLayout(),",
      "  mockups: addVisualDesign(),",
      "  prototype: makeInteractive()",
      "};",
    ],
  },
  {
    id: 3,
    title: "Code Craft",
    subtitle: "Development & Build",
    description: "Transforming designs into powerful, scalable applications",
    icon: Code,
    color: "from-blue-400 to-indigo-500",
    artifacts: ["⚙️ Backend API", "🌐 Frontend", "📱 Mobile App"],
    codeLines: [
      "const development = {",
      "  backend: buildAPI(),",
      "  frontend: createUI(),",
      "  mobile: deployApp()",
      "};",
    ],
  },
  {
    id: 4,
    title: "Quality Gate",
    subtitle: "Testing & Optimization",
    description: "Ensuring bulletproof quality through rigorous testing",
    icon: TestTube,
    color: "from-green-400 to-teal-500",
    artifacts: ["🔍 QA Testing", "🚀 Performance", "🔒 Security"],
    codeLines: [
      "const testing = {",
      "  qa: runTests(),",
      "  performance: optimize(),",
      "  security: validateSafety()",
      "};",
    ],
  },
  {
    id: 5,
    title: "Launch Day",
    subtitle: "Deploy & Go Live",
    description: "Seamless deployment with monitoring and optimization",
    icon: Rocket,
    color: "from-red-400 to-pink-500",
    artifacts: ["☁️ Cloud Deploy", "📈 Analytics", "🎉 Go Live"],
    codeLines: [
      "const launch = {",
      "  deploy: pushToProduction(),",
      "  monitor: trackPerformance(),",
      "  celebrate: projectSuccess()",
      "};",
    ],
  },
  {
    id: 6,
    title: "Growth Path",
    subtitle: "Support & Scale",
    description: "Continuous support as your business evolves",
    icon: HeadphonesIcon,
    color: "from-purple-400 to-blue-500",
    artifacts: ["🛠️ Maintenance", "📊 Updates", "🚀 New Features"],
    codeLines: [
      "const growth = {",
      "  support: provide24x7(),",
      "  updates: keepCurrent(),",
      "  scale: expandFeatures()",
      "};",
    ],
  },
];

// Typing animation hook
function useTypingAnimation(lines: string[], isActive: boolean) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isActive) {
      setCurrentLineIndex(0);
      setCurrentText("");
      setIsTypingComplete(false);
      setShowCursor(true);
      return;
    }

    if (currentLineIndex >= lines.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, 20);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentText("");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentLineIndex, lines, isActive]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return {
    typedLines: lines.slice(0, currentLineIndex),
    currentTypedText: currentText,
    showCursor: !isTypingComplete && showCursor,
    isTypingComplete,
  };
}

export function JourneyVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.floor(latest * journeySteps.length);
      setActiveStep(Math.min(stepIndex, journeySteps.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-32 relative left-0 w-full overflow-hidden px-16 mb-12"
    >
      {/* Background Effects */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 glass-effect-strong text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-glow">
            <Zap size={16} className="sm:w-5 sm:h-5" />
            <span className="font-neue text-sm sm:text-base text-white">
              The Journey Unfolds
            </span>
          </div>

          <h2 className="font-neue text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white px-4">
            Your product's
            <span className="text-gradient block"> epic journey</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Watch your vision transform through our proven process - from spark
            to success
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const isActive = activeStep >= index;
              const typingAnimation = useTypingAnimation(
                step.codeLines,
                isActive
              );

              return (
                <div key={step.id} className="relative">
                  {/* Desktop Connection indicator */}
                  <div
                    className={`hidden lg:block absolute top-1/2 ${
                      isEven
                        ? "left-1/2 ml-4 sm:ml-6 lg:ml-8"
                        : "right-1/2 mr-4 sm:mr-6 lg:mr-8"
                    } w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r ${
                      isEven
                        ? "from-primary/50 to-transparent"
                        : "from-transparent to-primary/50"
                    } transform -translate-y-1/2`}
                  />
                  {/* Desktop Journey node indicator */}
                  <motion.div
                    className="hidden lg:block absolute left-1/2 top-1/2 w-4 lg:w-6 h-4 lg:h-6 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    animate={
                      isActive
                        ? {
                            scale: [1, 1.2, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div
                      className={`w-full h-full rounded-full ${
                        isActive ? "bg-primary  " : "bg-gray-600"
                      } border-2 sm:border-4 border-background`}
                    ></div>
                  </motion.div>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Side */}
                    <div
                      className={`${
                        isEven
                          ? "lg:text-right lg:pr-12 xl:pr-24"
                          : "lg:pl-12 xl:pl-24"
                      } ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="relative flex flex-col items-start">
                        {/* Step Header */}
                        <div className="flex flex-col justify-between items-start sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <div className="flex flex-row gap-3">
                            <div
                              className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-intense relative overflow-hidden flex-shrink-0`}
                            >
                              <Icon
                                size={20}
                                className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white relative z-10"
                              />
                              {isActive && (
                                <motion.div
                                  className="absolute inset-0 bg-white/20"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 0.5, 0],
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              )}
                            </div>
                            <div className="flex flex-col items-start justify-center min-w-0">
                              <div className="text-xs sm:text-sm text-gray-400">
                                Step {step.id}
                              </div>
                              <div className="text-sm sm:text-base lg:text-lg text-gradient">
                                {step.subtitle}
                              </div>
                            </div>
                          </div>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="w-6 sm:w-8 h-6 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-glow flex-shrink-0"
                            >
                              <Check
                                size={12}
                                className="sm:w-4 sm:h-4 text-white"
                              />
                            </motion.div>
                          )}
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 font-neue neon-text">
                          {step.title}
                        </h3>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Artifacts */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {step.artifacts.map((artifact, artifactIndex) => (
                            <div
                              key={artifactIndex}
                              className={`inline-flex items-center gap-2 glass-effect-strong px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm   transition-all duration-300`}
                            >
                              <span className="text-white">{artifact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div
                      className={`relative ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative perspective-1000">
                        {/* Main Visual Card */}
                        <div
                          className={`relative glass-effect-strong border border-primary/30 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 ${
                            isActive ? "shadow-intense" : "shadow-primary"
                          } overflow-hidden`}
                        >
                          {/* Active background */}
                          {isActive && (
                            <div className="absolute inset-0 opacity-20">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${step.color}`}
                              ></div>
                            </div>
                          )}

                          {/* Code Editor Header */}
                          <div className="space-y-3 sm:space-y-4 relative z-10">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                              <div className="flex gap-1 sm:gap-2">
                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                              </div>
                              <div className="text-xs sm:text-sm text-gray-400 truncate">
                                {step.subtitle
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}
                                .tsx
                              </div>
                            </div>

                            {/* Enhanced Typing Code Animation */}
                            <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 min-h-[120px] sm:min-h-[140px]">
                              {/* Completed lines */}
                              {typingAnimation.typedLines.map(
                                (line, lineIndex) => (
                                  <div
                                    key={lineIndex}
                                    className="text-blue-400"
                                  >
                                    {line}
                                  </div>
                                )
                              )}

                              {/* Currently typing line */}
                              {typingAnimation.currentTypedText && (
                                <div className="text-blue-400">
                                  {typingAnimation.currentTypedText}
                                  {typingAnimation.showCursor && (
                                    <span className="text-primary animate-pulse">
                                      |
                                    </span>
                                  )}
                                </div>
                              )}

                              {/* Blinking cursor when complete */}
                              {typingAnimation.isTypingComplete &&
                                typingAnimation.showCursor && (
                                  <span className="text-primary">|</span>
                                )}
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 relative z-10">
                            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-2">
                              <span>Progress</span>
                              <span>
                                {Math.round(
                                  ((index + 1) / journeySteps.length) * 100
                                )}
                                %
                              </span>
                            </div>
                            <div className="w-full h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-purple-500"
                                initial={{ width: "0%" }}
                                animate={{
                                  width: isActive
                                    ? `${
                                        ((index + 1) / journeySteps.length) *
                                        100
                                      }%`
                                    : "0%",
                                }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Floating Element */}
                        <div
                          className={`absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br ${step.color} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-glow`}
                        >
                          <span className="text-sm sm:text-base lg:text-2xl">
                            ✨
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Step Connector */}
                  {index < journeySteps.length - 1 && (
                    <div className="flex justify-center mt-8 sm:mt-12 lg:hidden">
                      <ArrowDown
                        size={24}
                        className="sm:w-8 sm:h-8 text-primary"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
