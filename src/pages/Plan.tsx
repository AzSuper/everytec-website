import { Card } from "../components/ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import "../components/styles/wide.css";
import { useRef } from "react";
import {
  Lightbulb,
  PenTool,
  Code,
  Rocket,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your vision, understanding every detail to craft the perfect roadmap for success.",
    step: "01",
    color: "from-yellow-400 to-orange-500",
    features: ["Market Research", "User Personas", "Technical Planning"],
    delay: 0,
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description:
      "Beautiful interfaces that users love, tested and refined before a single line of code is written.",
    step: "02",
    color: "from-pink-400 to-purple-500",
    features: ["UI/UX Design", "Interactive Prototypes", "Design Systems"],
    delay: 0.1,
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Clean, scalable code built with modern technologies and industry best practices.",
    step: "03",
    color: "from-blue-400 to-indigo-500",
    features: ["Frontend & Backend", "API Integration", "Database Design"],
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Testing & Quality",
    description:
      "Rigorous testing ensures your software is bulletproof and ready for real-world use.",
    step: "04",
    color: "from-green-400 to-teal-500",
    features: ["QA Testing", "Performance Optimization", "Security Audits"],
    delay: 0.3,
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description:
      "Seamless deployment with monitoring and optimization for peak performance.",
    step: "05",
    color: "from-red-400 to-pink-500",
    features: ["Cloud Deployment", "CI/CD Pipeline", "Monitoring Setup"],
    delay: 0.4,
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Growth",
    description:
      "Ongoing support and enhancements as your business evolves and grows.",
    step: "06",
    color: "from-purple-400 to-blue-500",
    features: ["24/7 Support", "Feature Updates", "Scaling Solutions"],
    delay: 0.5,
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-20 lg:py-18 relative overflow-hidden"
    >
      {/* Enhanced Background decoration */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-morphing"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-morphing"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl animate-rotate-slow"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-primary/10 glass-effect text-primary px-6 py-3 rounded-full mb-8 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={16} />
            <span className="font-neue">What We Provide</span>
            <ArrowRight size={20} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-neue"
          >
            Every step
            <span className="font-neue text-gradient block">
              {" "}
              perfectly planned
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We don't just build software – we guide you through every phase of
            your digital transformation with precision and care.
          </motion.p>
        </motion.div>

        {/* Enhanced Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="relative p-8 h-full hover:shadow-intense transition-all duration-500 card-3d-intense glass-effect border-primary/20 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} animate-gradient`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-intense transition-all duration-500`}
                        >
                          <Icon size={28} className="text-white" />
                        </div>
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: service.delay + featureIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.5,
                            }}
                          />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Interactive Element */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Zap size={14} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/0 rounded-lg"
                    whileHover={{ borderColor: "rgba(106, 81, 229, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to experience this journey firsthand?
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
              className="inline-flex items-center gap-3 bg-primary/10 glass-effect text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 magnetic"
              whileHover={{
                boxShadow: "0 0 30px rgba(106, 81, 229, 0.5)",
                y: -2,
              }}
            >
              <Rocket size={20} />
              <span>Let's Start Your Journey</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
