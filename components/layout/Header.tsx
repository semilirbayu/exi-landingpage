"use client";

import { useState, memo } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Header = memo(function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-transparent"
      )}
    >
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#contact"
              className="gradient-bg text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 hover:scale-105 transform"
            >
              Let&apos;s Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark hover:text-primary transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-2">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="gradient-bg text-white text-center py-3 px-4 rounded-full font-semibold mt-2 hover:opacity-90 transition-opacity duration-300"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
});
