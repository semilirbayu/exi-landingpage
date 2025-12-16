"use client";

import { useRef, memo } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Project } from "./types";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
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

const ProjectCard = memo(function ProjectCard({
    project,
    prefersReducedMotion,
}: {
    project: Project;
    prefersReducedMotion: boolean | null;
}) {
    return (
        <motion.div
            variants={imageVariants}
            className={cn(
                "relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300",
                project.className,
                "group"
            )}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, zIndex: 10 }}
        >
            <Image
                src={project.thumbnail}
                alt={`${project.title} - ${project.category}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
        </motion.div>
    );
});

export function PortfolioGrid({ projects }: PortfolioGridProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const prefersReducedMotion = useReducedMotion();

    return (
        <div
            ref={sectionRef}
            className="relative w-full max-w-[1400px] mx-auto min-h-[500px] lg:min-h-[700px] bg-light overflow-hidden px-2 md:px-6 py-12 md:py-16 flex flex-col justify-center"
        >
            {/* Mosaic Grid Layout (12 Columns) - Responsive */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-12 auto-rows-[12px] md:auto-rows-[45px] gap-1 md:gap-3 w-full"
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                        prefersReducedMotion={prefersReducedMotion}
                    />
                ))}
            </motion.div>

            {/* Central Circle - Positioned Absolutely */}
            <motion.div
                variants={circleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-light rounded-full shadow-2xl flex items-center justify-center z-50 pointer-events-none"
            >
                <div className="text-center">
                    <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
                        OUR
                        <br />
                        WORKS
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
