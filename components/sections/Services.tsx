"use client";

import { useRef } from "react";
import {
  Globe,
  PaintBrush,
  PencilLine,
} from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    tags: ["WEBSITE DEVELOPMENT", "WEBSITE DESIGN", "WORDPRESS", "ELEMENTOR", "PROTOTYPE"],
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: PaintBrush,
    title: "Graphic Design",
    tags: ["BRAND IDENTITY", "MOTION GRAPHIC", "MARKETING MATERIAL", "PACKAGING", "MERCHANDISE", "ICON"],
    description: "Creative visual solutions that strengthen your brand and capture audience attention.",
  },
  {
    icon: PencilLine,
    title: "Content Creation",
    tags: ["CONTENT WRITING"],
    description: "Engaging content that tells your story and connects with your target audience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            WHAT
            <br />
            <span className="text-[#828282]">WE</span>
            <br />
            <span className="gradient-text">OFFER</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 gradient-bg rounded-2xl flex items-center justify-center"
                  >
                    <Icon size={28} weight="bold" className="text-white sm:w-8 sm:h-8" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#F16322] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-[#F5F5F5] text-[#828282] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[#828282] text-sm sm:text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
