"use client";

import {
  Globe,
  PaintBrush,
  PencilLine,
} from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    tags: ["WEBSITE DEVELOPMENT", "WEBSITE DESIGN", "WORDPRESS", "ELEMENTOR", "PROTOTYPE"],
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: PaintBrush,
    title: "Graphic Design",
    tags: ["BRAND IDENTITY", "MOTION GRAPHIC", "MARKETING MATERIAL", "PACKAGING", "MERCHANDISE", "ICON"],
    description: "Creative visual solutions that strengthen your brand and capture audience attention.",
  },
  {
    icon: PencilLine,
    title: "Content Creation",
    tags: ["CONTENT WRITING"],
    description: "Engaging content that tells your story and connects with your target audience.",
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "mb-12 sm:mb-16",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            WHAT
            <br />
            <span className="text-[#828282]">WE</span>
            <br />
            <span className="gradient-text">OFFER</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={cn(
                  "group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                  isVisible
                    ? `animate-fade-in-up delay-${(index + 1) * 100}`
                    : "opacity-0"
                )}
                style={{
                  animationDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 gradient-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} weight="bold" className="text-white sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#F16322] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-[#F5F5F5] text-[#828282] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[#828282] text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
