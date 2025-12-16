"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function Quote() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quote Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              <Image
                src="/images/quote.png"
                alt="Quote illustration"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Quote Text */}
          <div className="text-center lg:text-left">
            <motion.blockquote
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Quote marks */}
              <span className="absolute -top-8 left-0 text-8xl text-primary/10 font-serif">
                &ldquo;
              </span>

              <p className="font-[family-name:var(--font-inter)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                The best digital solutions arise from{" "}
                <span className="gradient-text">simplicity</span> and{" "}
                <span className="gradient-text">clarity</span>.
              </p>

              <span className="absolute -bottom-8 right-0 text-8xl text-primary/10 font-serif">
                &rdquo;
              </span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-12"
            >
              <p className="text-dark text-sm sm:text-base max-w-xl">
                Siap mengembangkan kehadiran digital Anda? Mari berkolaborasi dan ciptakan sesuatu yang luar biasa bersama.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
