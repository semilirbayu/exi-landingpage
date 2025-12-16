"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Project } from "./types";
import { cn } from "@/lib/utils";

interface MosaicHeroProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6,
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
    },
  },
};

export function MosaicHero({ projects }: MosaicHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-[1400px] mx-auto min-h-[700px] lg:min-h-[850px] bg-light overflow-hidden px-4 md:px-6 py-12 md:py-24 flex flex-col justify-center"
    >
      {/* Desktop: Spreadsheet Grid Layout (12 Columns) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:grid grid-cols-12 auto-rows-[45px] gap-3 w-full"
      >
        {projects.map((project) => (
          <motion.div
            key={project.number}
            variants={imageVariants}
            className={cn(
              "relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300",
              project.className,
              "group"
            )}
            whileHover={{ scale: 1.02, zIndex: 10 }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Central Circle - Positioned Absolutely */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] bg-light rounded-full shadow-2xl items-center justify-center z-50 pointer-events-none"
      >
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
            OUR
            <br />
            WORKS
          </h2>
        </div>
      </motion.div>

      {/* Mobile: 2-column Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="md:hidden px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold text-dark">
            OUR WORKS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {projects.slice(0, 8).map((project) => (
            <motion.div
              key={project.number}
              variants={imageVariants}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
