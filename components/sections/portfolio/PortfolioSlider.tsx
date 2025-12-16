"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, useReducedMotion, PanInfo } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Project } from "./types";
import { PortfolioSlide } from "./PortfolioSlide";

interface PortfolioSliderProps {
    projects: Project[];
}

export function PortfolioSlider({ projects }: PortfolioSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const updateSlideWidth = () => {
            if (containerRef.current) {
                setSlideWidth(containerRef.current.offsetWidth);
            }
        };

        updateSlideWidth();
        window.addEventListener("resize", updateSlideWidth);
        return () => window.removeEventListener("resize", updateSlideWidth);
    }, []);

    const goToSlide = useCallback(
        (index: number) => {
            setCurrentSlide(Math.max(0, Math.min(index, projects.length - 1)));
        },
        [projects.length]
    );

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 1);
    }, [currentSlide, goToSlide]);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = slideWidth * 0.15;
        if (info.offset.x < -threshold) {
            nextSlide();
        } else if (info.offset.x > threshold) {
            prevSlide();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-light overflow-hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Portfolio projects"
        >
            {/* Navigation Arrows */}
            <motion.button
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-lg"
                aria-label="Previous project"
            >
                <CaretLeft size={24} className="text-dark" weight="bold" />
            </motion.button>

            <motion.button
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                onClick={nextSlide}
                disabled={currentSlide === projects.length - 1}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-lg"
                aria-label="Next project"
            >
                <CaretRight size={24} className="text-dark" weight="bold" />
            </motion.button>

            {/* Slides Container */}
            <div ref={containerRef} className="overflow-hidden">
                <motion.div
                    drag={prefersReducedMotion ? false : "x"}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    animate={{ x: -currentSlide * slideWidth }}
                    transition={
                        prefersReducedMotion
                            ? { duration: 0.01 }
                            : {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                              }
                    }
                    className="flex cursor-grab active:cursor-grabbing"
                    style={{ touchAction: "pan-y pinch-zoom" }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.number}
                            className="min-w-full min-h-[90vh]"
                        >
                            <PortfolioSlide
                                project={project}
                                isActive={index === currentSlide}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Pagination Dots */}
            <motion.div
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                className="flex justify-center gap-2 py-6"
            >
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "w-8 bg-gradient-to-r from-primary to-secondary"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                        aria-current={index === currentSlide ? "true" : "false"}
                    />
                ))}
            </motion.div>

            {/* Slide Counter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.7 }}
                className="absolute bottom-6 right-4 sm:right-8 text-dark text-sm font-mono"
            >
                <span className="text-dark">{String(currentSlide + 1).padStart(2, "0")}</span>
                <span className="mx-1">/</span>
                <span>{String(projects.length).padStart(2, "0")}</span>
            </motion.div>
        </section>
    );
}
