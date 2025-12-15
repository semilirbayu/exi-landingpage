"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function Quote() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote
          className={cn(
            "relative",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          {/* Quote marks */}
          <span className="absolute -top-8 left-0 text-8xl text-[#F16322]/10 font-serif">
            &ldquo;
          </span>

          <p className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            The best digital solutions arise from{" "}
            <span className="gradient-text">simplicity</span> and{" "}
            <span className="gradient-text">clarity</span>.
          </p>

          <span className="absolute -bottom-8 right-0 text-8xl text-[#F16322]/10 font-serif">
            &rdquo;
          </span>
        </blockquote>

        <div
          className={cn(
            "mt-12",
            isVisible ? "animate-fade-in delay-300" : "opacity-0"
          )}
        >
          <p className="text-[#828282] text-sm sm:text-base max-w-xl mx-auto">
            Siap mengembangkan kehadiran digital Anda? Mari berkolaborasi dan ciptakan sesuatu yang luar biasa bersama.
          </p>
        </div>
      </div>
    </section>
  );
}
