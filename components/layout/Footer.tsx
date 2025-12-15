"use client";

import { PuzzlePiece } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer ref={ref} className="bg-[#1A1A1A] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col items-center text-center",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          {/* TERIMA KASIH */}
          <div className="mb-8">
            <p className="text-[#828282] text-sm tracking-widest mb-4">
              EXTRAINTEGER PORTOFOLIO 2024
            </p>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-6xl md:text-7xl font-bold">
              <span className="text-white">TERIMA</span>
              <br />
              <span className="gradient-text">KASIH</span>
            </h2>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 mt-8 mb-6">
            <span className="text-[#F16322]">
              <PuzzlePiece size={24} weight="fill" />
            </span>
            <span className="font-[family-name:var(--font-poppins)] font-bold text-sm">
              <span className="text-[#F16322]">EXTRA </span>
              <span className="text-[#FFCC02]">INTEGER</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[#828282] text-sm">
            &copy; {new Date().getFullYear()} Extra Integer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
