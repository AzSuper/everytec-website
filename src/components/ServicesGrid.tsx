import React from "react";
import ServiceCard from "./../components/ServiceCard";
import {
  Search,
  Palette,
  Code,
  Shield,
  Rocket,
  Headphones,
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Discovery & Strategy",
      description:
        "We dive deep into your vision, understanding every detail to craft the perfect roadmap for success.",
      features: ["Market Research", "User Personas", "Technical Planning"],
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Design & Prototyping",
      description:
        "Beautiful interfaces that users love, tested and refined before a single line of code is written.",
      features: ["UI/UX Design", "Interactive Prototypes", "Design Systems"],
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Development",
      description:
        "Clean, scalable code built with modern technologies and industry best practices.",
      features: ["Frontend & Backend", "API Integration", "Database Design"],
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Testing & Quality",
      description:
        "Rigorous testing ensures your software is bulletproof and ready for real-world use.",
      features: ["QA Testing", "Performance Optimization", "Security Audits"],
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Launch & Deploy",
      description:
        "Seamless deployment with monitoring and optimization for peak performance.",
      features: ["Cloud Deployment", "CI/CD Pipeline", "Monitoring Setup"],
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Support & Growth",
      description:
        "Ongoing support and enhancements as your business evolves and grows.",
      features: ["24/7 Support", "Feature Updates", "Scaling Solutions"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} delay={index * 10000} />
      ))}
    </div>
  );
};

export default ServicesGrid;
