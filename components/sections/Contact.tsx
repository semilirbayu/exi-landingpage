"use client";

import { useRef } from "react";
import Image from "next/image";
import { Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const contactLinks = [
  {
    icon: Envelope,
    label: "Email",
    value: "bayu@extrainteger.com",
    href: "mailto:bayu@extrainteger.com",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "0857 3333 7052",
    href: "https://wa.me/6285733337052",
  },
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

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-light overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center"
        >
          {/* Quote Image */}
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={
              prefersReducedMotion
                ? {}
                : { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }
            className="relative w-80 h-80 sm:w-96 sm:h-96 mb-8"
          >
            <Image
              src="/images/quote.webp"
              alt="Quote illustration representing communication and collaboration"
              fill
              sizes="(max-width: 640px) 320px, 384px"
              loading="lazy"
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          <h2 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl font-bold text-dark mb-6">
            LET&apos;S{" "}
            <span className="gradient-text">TALK!</span>
          </h2>
          <p className="text-dark text-base sm:text-lg max-w-xl mx-auto">
            Siap mengembangkan kehadiran digital Anda? Mari berkolaborasi dan ciptakan
            sesuatu yang luar biasa bersama. Hubungi kami, dan mari wujudkan visi Anda
            menjadi kenyataan.
          </p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? { opacity: 0 } : "hidden"}
          animate={isInView ? (prefersReducedMotion ? { opacity: 1 } : "visible") : "hidden"}
          className="flex flex-row gap-6 justify-center items-center"
        >
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "WhatsApp" ? "_blank" : undefined}
                rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                variants={prefersReducedMotion ? undefined : itemVariants}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-bg rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} weight="fill" className="text-white" />
                </div>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold group-hover:text-primary transition-colors">
                  {contact.label === "Email" ? "Email Us" : "Chat Us"}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
