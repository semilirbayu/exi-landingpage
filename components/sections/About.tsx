"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "5+", label: "YEAR OF EXPERIENCE" },
  { value: "12", label: "PROJECTS DONE" },
  { value: "11", label: "CLIENTS SERVED" },
];

const clientLogos = [
  { name: "Sound Rhythm", src: "/icons/soundrhythm.svg" },
  { name: "Muaq", src: "/icons/muaq.svg" },
  { name: "Prodigma", src: "/icons/prodigma.svg" },
  { name: "Kitiran", src: "/icons/kitiran.svg" },
  { name: "Kalz", src: "/icons/kalz.svg" },
  { name: "Satset AI", src: "/icons/satset.svg" },
  { name: "Paket Konser", src: "/icons/paketkonser.svg" },
  { name: "Bimbit", src: "/icons/bimbit.svg" },
  { name: "Bot Brigade", src: "/icons/botbrigade.svg" },
  { name: "Waktoe Institut", src: "/icons/waktoeinstitut.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 max-w-5xl"
        >
          Extra Integer adalah agensi digital Indonesia yang berkomitmen untuk
          menggabungkan kreativitas dengan teknologi guna memberikan solusi yang
          luar biasa. Kami telah menjadi mitra terpercaya bagi klien yang mencari
          pengalaman digital inovatif dan berdampak di seluruh Indonesia.
        </motion.p>

        {/* Image and Stats Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Rocket Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[420px] flex-shrink-0"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/rocket.jpg"
                alt="3D Rocket Illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-row lg:flex-row items-end lg:items-end justify-between lg:justify-start gap-8 sm:gap-12 lg:gap-16 flex-grow lg:self-end lg:pb-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-left"
              >
                <span className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white block">
                  {stat.value}
                </span>
                <span className="text-[#828282] text-xs sm:text-sm tracking-wider mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12"
        >
          {clientLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300 max-h-10 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
