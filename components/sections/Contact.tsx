"use client";

import { useRef } from "react";
import { Phone, Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
              LET&apos;S{" "}
              <span className="gradient-text">TALK!</span>
            </h2>
            <p className="text-dark text-base sm:text-lg max-w-md">
              Hubungi kami, dan mari wujudkan visi Anda menjadi kenyataan.
            </p>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-4"
          >
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "WhatsApp" ? "_blank" : undefined}
                  rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group flex-1 bg-white rounded-2xl p-6 shadow-sm text-center cursor-pointer"
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center"
                    >
                      <Icon size={28} weight="fill" className="text-white" />
                    </motion.div>
                  </div>

                  {/* Label */}
                  <p className="text-dark text-sm mb-1">{contact.label}</p>

                  {/* Value */}
                  <p className="font-semibold text-dark text-sm group-hover:text-primary transition-colors duration-300">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
