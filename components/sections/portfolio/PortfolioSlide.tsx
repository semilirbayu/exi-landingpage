"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "./types";

interface PortfolioSlideProps {
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

export function PortfolioSlide({ project, isActive }: PortfolioSlideProps) {
    const prefersReducedMotion = useReducedMotion();

    const activeContentVariants = prefersReducedMotion
        ? undefined
        : contentVariants;
    const activeItemVariants = prefersReducedMotion ? undefined : itemVariants;

    return (
        <div className="min-w-full h-full bg-light py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
                {/* Header */}
                <motion.div
                    variants={activeContentVariants}
                    initial={prefersReducedMotion ? { opacity: 0 } : "hidden"}
                    animate={isActive ? (prefersReducedMotion ? { opacity: 1 } : "visible") : "hidden"}
                    className="flex items-center gap-3 mb-6 lg:mb-8"
                >
                    <motion.span
                        variants={activeItemVariants}
                        className="text-dark text-sm font-mono"
                    >
                        WORK #{project.number}
                    </motion.span>
                    <motion.span variants={activeItemVariants} className="text-dark">
                        |
                    </motion.span>
                    <motion.span
                        variants={activeItemVariants}
                        className="text-dark text-sm font-semibold tracking-wide"
                    >
                        {project.category}
                    </motion.span>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    variants={activeContentVariants}
                    initial={prefersReducedMotion ? { opacity: 0 } : "hidden"}
                    animate={isActive ? (prefersReducedMotion ? { opacity: 1 } : "visible") : "hidden"}
                    className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8"
                >
                    {/* Left: Main Screenshot (large) */}
                    <motion.div
                        variants={activeItemVariants}
                        className="w-full lg:flex-1 relative h-[50vh] lg:h-auto lg:aspect-auto rounded-2xl overflow-hidden shadow-2xl bg-neutral-100"
                    >
                        <Image
                            src={project.standard}
                            alt={`${project.title} - ${project.category} project screenshot`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-top"
                            priority={isActive}
                        />
                    </motion.div>

                    {/* Right: Full Page Preview (vertical scroll view) */}
                    <motion.div
                        variants={activeItemVariants}
                        className="hidden lg:block w-80 relative rounded-xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src={project.fullPage}
                            alt={`${project.title} full page preview`}
                            fill
                            sizes="320px"
                            loading="lazy"
                            className="object-cover object-top"
                        />
                    </motion.div>
                </motion.div>

                {/* Footer - Information Section */}
                <motion.div
                    variants={activeContentVariants}
                    initial={prefersReducedMotion ? { opacity: 0 } : "hidden"}
                    animate={isActive ? (prefersReducedMotion ? { opacity: 1 } : "visible") : "hidden"}
                    className="mt-2 lg:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <motion.div
                        variants={activeItemVariants}
                        className="flex items-center gap-4 w-full sm:w-auto"
                    >
                        {project.icon && (
                            <div className="w-12 h-12 relative flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                <Image
                                    src={project.icon}
                                    alt=""
                                    fill
                                    className="object-contain p-3"
                                />
                            </div>
                        )}
                        <div className="flex flex-col">
                            <h3 className="font-[family-name:var(--font-inter)] text-lg lg:text-xl font-bold text-dark uppercase leading-tight">
                                {project.title}
                            </h3>
                            <span className="text-dark text-xs font-medium uppercase tracking-wider">
                                {project.tech}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div variants={activeItemVariants} className="w-full sm:w-auto text-center sm:text-right">
                        {project.url !== "#" ? (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark hover:opacity-70 transition-colors text-sm underline decoration-dark underline-offset-4 break-all italic"
                            >
                                {project.url}
                            </a>
                        ) : (
                            <span className="text-dark text-sm italic">Coming soon</span>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
