"use client";

import { PuzzlePiece } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  { value: "5+", label: "YEAR OF EXPERIENCE" },
  { value: "12", label: "PROJECTS DONE" },
  { value: "11", label: "CLIENTS SERVED" },
];

export function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex items-center pt-20 sm:pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={cn(
              "order-2 lg:order-1",
              isVisible ? "animate-fade-in-up" : "opacity-0"
            )}
          >
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-poppins)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="text-[#F16322]">EXTRA</span>
                <br />
                <span className="text-[#FFCC02]">INTEGER</span>
              </h1>
            </div>

            {/* Welcome Text */}
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-[#1A1A1A] font-semibold mb-2">
                Welcome
              </p>
              <p className="text-[#828282] text-sm sm:text-base max-w-md">
                Kami sangat antusias untuk menampilkan perjalanan, pencapaian, dan solusi inovatif yang telah kami ciptakan.
              </p>
            </div>

            {/* Portfolio Badge */}
            <div
              className={cn(
                "inline-block mb-10",
                isVisible ? "animate-fade-in delay-200" : "opacity-0"
              )}
            >
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm font-medium">
                PORTOFOLIO 2024
              </span>
            </div>

            {/* Description */}
            <p
              className={cn(
                "text-[#828282] text-sm sm:text-base max-w-lg mb-10",
                isVisible ? "animate-fade-in delay-300" : "opacity-0"
              )}
            >
              Extra Integer adalah agensi digital Indonesia yang berkomitmen untuk menggabungkan kreativitas dengan teknologi guna memberikan solusi yang luar biasa. Kami telah menjadi mitra terpercaya bagi klien yang mencari pengalaman digital inovatif dan berdampak di seluruh Indonesia.
            </p>

            {/* Stats */}
            <div
              className={cn(
                "flex flex-wrap gap-8 sm:gap-12",
                isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
              )}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="font-[family-name:var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                    {stat.value}
                  </p>
                  <p className="text-[#828282] text-xs sm:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={cn(
              "order-1 lg:order-2 flex justify-center lg:justify-end",
              isVisible ? "animate-scale-in delay-200" : "opacity-0"
            )}
          >
            <div className="relative">
              {/* 3D Puzzle Visual Placeholder */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative animate-float">
                {/* Background gradient blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F16322]/20 to-[#FFCC02]/20 rounded-full blur-3xl" />

                {/* Main puzzle piece */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer glow */}
                    <div className="absolute -inset-8 bg-gradient-to-br from-[#F16322] to-[#FFCC02] rounded-3xl opacity-20 blur-2xl" />

                    {/* Main puzzle container */}
                    <div className="relative bg-gradient-to-br from-[#F16322] to-[#FFCC02] p-8 sm:p-12 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                      <PuzzlePiece
                        size={120}
                        weight="fill"
                        className="text-white drop-shadow-lg sm:w-40 sm:h-40"
                      />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFCC02] rounded-full opacity-60" />
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#F16322] rounded-full opacity-40" />
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#F16322] rounded-full opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
