"use client";

import { memo } from "react";
import Image from "next/image";

export const Header = memo(function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/icons/logo.svg"
              alt="Extra Integer"
              width={140}
              height={40}
              className="h-6 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-center">
            <a
              href="#contact"
              className="gradient-bg text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity duration-300 hover:scale-105 transform"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
});
