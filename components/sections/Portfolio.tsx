"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    number: "01",
    title: "MUAQ",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://matteverse.muaq.id/",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "02",
    title: "MUAQ",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://muaq.id/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "PRODIGMA",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://prodigma.id/",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "BOTBRIGADE",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://botbrigade.id/",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "05",
    title: "BIMBIT",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://bimbit.id/",
    color: "from-indigo-500 to-purple-500",
  },
  {
    number: "06",
    title: "KITIRAN FOUNDATION",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://kitiran.foundation/",
    color: "from-teal-500 to-green-500",
  },
  {
    number: "07",
    title: "KALZLAB",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://kalzlab.id/",
    color: "from-rose-500 to-pink-500",
  },
  {
    number: "08",
    title: "PAKETKONSER.COM",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://paketkonser.com/",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "09",
    title: "SOUNDRHYTHM",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://soundrhythm.id/",
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "10",
    title: "SATSET.AI",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "https://satset.ai/",
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "11",
    title: "ALBASILICA",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "#",
    color: "from-slate-500 to-gray-500",
  },
  {
    number: "12",
    title: "WAKTOE INSTITUT",
    category: "WEB DEVELOPMENT",
    tech: "WORDPRESS",
    url: "#",
    color: "from-stone-500 to-neutral-500",
  },
];

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      id="works"
      ref={ref}
      className="py-16 sm:py-24 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "mb-12 sm:mb-16 text-center",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">OUR</span>
            <br />
            <span className="gradient-text">WORKS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <a
              key={`${project.title}-${project.number}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative bg-[#2A2A2A] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500",
                isVisible ? "animate-fade-in-up" : "opacity-0"
              )}
              style={{
                animationDelay: isVisible ? `${(index % 8) * 50}ms` : "0ms",
              }}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  project.color
                )}
              />

              {/* Content */}
              <div className="relative p-5 sm:p-6 h-full flex flex-col min-h-[180px]">
                {/* Number */}
                <span className="text-[#828282] text-xs font-mono mb-2 group-hover:text-white/60 transition-colors">
                  WORK #{project.number}
                </span>

                {/* Category */}
                <span className="text-[#F16322] text-xs font-medium mb-2 group-hover:text-white/80 transition-colors">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Tech */}
                <span className="text-[#828282] text-xs group-hover:text-white/60 transition-colors">
                  {project.tech}
                </span>

                {/* Arrow */}
                <div className="mt-auto pt-4 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[#3A3A3A] group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight
                      size={20}
                      className="text-white group-hover:text-[#1A1A1A] transition-colors"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
