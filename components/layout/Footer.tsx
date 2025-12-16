"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer ref={footerRef} className="bg-dark text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* TERIMA KASIH */}
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#828282] text-sm tracking-widest mb-4"
            >
              EXTRAINTEGER PORTOFOLIO 2024
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-[family-name:var(--font-inter)] text-4xl sm:text-6xl md:text-7xl font-bold"
            >
              <span className="text-white">TERIMA</span>
              <br />
              <span className="gradient-text">KASIH</span>
            </motion.h2>
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 mt-8 mb-6"
          >
            <Image
              src="/icons/logo.svg"
              alt="Extra Integer"
              width={100}
              height={28}
              className="h-6 sm:h-7 w-auto"
            />
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[#828282] text-sm"
          >
            &copy; {new Date().getFullYear()} Extra Integer. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
