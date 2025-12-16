"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "./types";

interface WorkSlideProps {
  project: Project;
  isActive: boolean;
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function WorkSlide({ project, isActive }: WorkSlideProps) {
  return (
    <div className="min-w-full h-full bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
      {/* Header */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="flex items-center gap-3 mb-6 lg:mb-8"
      >
        <motion.span
          variants={itemVariants}
          className="text-gray-500 text-sm font-mono"
        >
          WORK #{project.number}
        </motion.span>
        <motion.span variants={itemVariants} className="text-gray-400">
          |
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="text-gray-700 text-sm font-semibold tracking-wide"
        >
          {project.category}
        </motion.span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8"
      >
        {/* Left: Main Screenshot (large) */}
        <motion.div
          variants={itemVariants}
          className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority={isActive}
          />
        </motion.div>

        {/* Right: Full Page Preview (vertical scroll view) */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block w-80 relative rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src={project.fullPage}
            alt={`${project.title} full page`}
            fill
            className="object-cover object-top"
          />
        </motion.div>
      </motion.div>

      {/* Footer - Brown/Warm Bar */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="mt-6 lg:mt-8 bg-[#8B7355] rounded-xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3"
        >
          {project.icon && (
            <div className="w-10 h-10 relative flex-shrink-0 bg-white/10 rounded-lg p-1">
              <Image
                src={project.icon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          )}
          <h3 className="font-[family-name:var(--font-poppins)] text-lg lg:text-xl font-bold text-white">
            {project.title}
          </h3>
        </motion.div>

        <motion.span
          variants={itemVariants}
          className="text-white/80 text-sm hidden sm:block"
        >
          {project.tech}
        </motion.span>

        <motion.div variants={itemVariants}>
          {project.url !== "#" ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors text-sm italic"
            >
              {project.url}
            </a>
          ) : (
            <span className="text-white/50 text-sm italic">Coming soon</span>
          )}
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}
