"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Web Development",
    tags: ["WEBSITE DEVELOPMENT", "WEBSITE DESIGN", "WORDPRESS", "ELEMENTOR", "PROTOTYPE"],
  },
  {
    title: "Graphic Design",
    tags: ["BRAND IDENTITY", "MOTION GRAPHIC", "MARKETING MATERIAL", "PACKAGING", "MERCHANDISE", "ICON"],
  },
  {
    title: "Content Creation",
    tags: ["CONTENT WRITING"],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
      className="py-16 sm:py-24 bg-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Section Header - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
              WHAT
              <br />
              <span className="text-[#828282]">WE</span>
              <br />
              OFFER
            </h2>
          </motion.div>

          {/* Services List - Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
              >
                {/* Service Title */}
                <h3 className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4">
                  {service.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm px-4 py-2 bg-[#E8E8E8] text-[#666666] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider - not on last item */}
                {index < services.length - 1 && (
                  <hr className="border-t border-[#D0D0D0] mb-8" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
