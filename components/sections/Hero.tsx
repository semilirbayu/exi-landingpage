"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse follow
  const springConfig = { damping: 25, stiffness: 150 };
  const puzzleX = useSpring(
    useTransform(mouseX, [-1, 1], [-25, 25]),
    springConfig
  );
  const puzzleY = useSpring(
    useTransform(mouseY, [-1, 1], [-15, 15]),
    springConfig
  );

  // Throttled mouse handler for better performance
  const lastCallRef = useRef(0);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;
      const now = Date.now();
      if (now - lastCallRef.current < 16) return; // ~60fps throttle
      lastCallRef.current = now;

      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / (rect.width / 2));
      mouseY.set((e.clientY - centerY) / (rect.height / 2));
    },
    [mouseX, mouseY, prefersReducedMotion]
  );

  // Animation variants respecting reduced motion
  const fadeUp = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };
  const initialFadeUp = prefersReducedMotion
    ? { opacity: 0, y: 0 }
    : { opacity: 0, y: 60 };

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-light flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative">
          {/* Title with Puzzle */}
          <div className="relative">
            <h1 className="font-[family-name:var(--font-inter)] text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold leading-[0.85] tracking-tight">
              <motion.span
                initial={initialFadeUp}
                animate={isInView ? fadeUp : {}}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  ease: "easeOut",
                }}
                className="text-primary block cursor-default"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        textShadow: "0 0 40px rgba(241, 99, 34, 0.4)",
                        transition: { duration: 0.3 },
                      }
                }
              >
                EXTRA
              </motion.span>
              <motion.span
                initial={initialFadeUp}
                animate={isInView ? fadeUp : {}}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.8,
                  delay: prefersReducedMotion ? 0 : 0.15,
                  ease: "easeOut",
                }}
                className="text-secondary block cursor-default"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        textShadow: "0 0 40px rgba(255, 204, 2, 0.5)",
                        transition: { duration: 0.3 },
                      }
                }
              >
                INTEGER
              </motion.span>
            </h1>

            {/* Puzzle Image - Floating & Mouse-follow */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 0, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.8,
                delay: prefersReducedMotion ? 0 : 0.3,
                ease: "easeOut",
              }}
              style={prefersReducedMotion ? {} : { x: puzzleX, y: puzzleY }}
              className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
                transition={
                  prefersReducedMotion
                    ? {}
                    : {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      }
                }
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/puzzle.webp"
                    alt="Extra Integer 3D puzzle representing creative digital solutions"
                    width={420}
                    height={420}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 420px"
                    className="w-full h-full object-contain drop-shadow-2xl cursor-pointer"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Welcome Text */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 30 }
            }
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.6,
              ease: "easeOut",
            }}
            className="mt-12 sm:mt-16 max-w-md"
          >
            <p className="text-xs sm:text-sm font-semibold text-dark tracking-widest uppercase mb-3">
              Welcome
            </p>
            <p className="text-dark text-sm sm:text-base leading-relaxed uppercase tracking-wide">
              Kami sangat antusias untuk menampilkan perjalanan, pencapaian, dan solusi inovatif yang telah kami ciptakan.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
