"use client";

import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "MATTEVERSE",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://matteverse.muaq.id/",
    image: "/images/matteverse.png",
  },
  {
    number: "02",
    title: "MUAQ",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://muaq.id/",
    image: "/images/muaq.png",
  },
  {
    number: "03",
    title: "PRODIGMA",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://prodigma.id/",
    image: "/images/prodigma.png",
  },
  {
    number: "04",
    title: "BOTBRIGADE",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://botbrigade.id/",
    image: "/images/botbrigade.png",
  },
  {
    number: "05",
    title: "BIMBIT",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://bimbit.id/",
    image: "/images/bimbit.png",
  },
  {
    number: "06",
    title: "KITIRAN FOUNDATION",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://kitiran.foundation/",
    image: "/images/kitiran.png",
  },
  {
    number: "07",
    title: "KALZLAB",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://kalzlab.id/",
    image: "/images/kalz.png",
  },
  {
    number: "08",
    title: "PAKETKONSER.COM",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://paketkonser.com/",
    image: "/images/paketkonser.png",
  },
  {
    number: "09",
    title: "SOUNDRHYTHM",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://soundrhythm.id/",
    image: "/images/soundrhythm.png",
  },
  {
    number: "10",
    title: "SATSET.AI",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://satset.ai/",
    image: "/images/satset.png",
  },
  {
    number: "11",
    title: "ALBASILICA",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "#",
    image: "/images/albasilica.png",
  },
  {
    number: "12",
    title: "WAKTOE INSTITUT",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "#",
    image: "/images/waktoeinstitut.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      id="works"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">OUR</span>
            <br />
            <span className="gradient-text">WORKS</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={`${project.title}-${project.number}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative bg-[#2A2A2A] rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="relative p-5 sm:p-6 flex flex-col">
                {/* Number */}
                <span className="text-[#828282] text-xs font-mono mb-2 group-hover:text-[#F16322] transition-colors">
                  WORK #{project.number}
                </span>

                {/* Category */}
                <span className="text-[#F16322] text-xs font-medium mb-2">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FFCC02] transition-colors">
                  {project.title}
                </h3>

                {/* Tech */}
                <span className="text-[#828282] text-xs">
                  {project.tech}
                </span>

                {/* Arrow */}
                <div className="mt-4 flex justify-end">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 rounded-full bg-[#3A3A3A] group-hover:bg-gradient-to-r group-hover:from-[#F16322] group-hover:to-[#FFCC02] flex items-center justify-center transition-all duration-300"
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-white transition-colors"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
