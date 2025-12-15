"use client";

import { Phone, Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "0857 3333 7052",
    href: "tel:+6285733337052",
  },
  {
    icon: Envelope,
    label: "Email",
    value: "semilirbayu@gmail.com",
    href: "mailto:semilirbayu@gmail.com",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "0857 3333 7052",
    href: "https://wa.me/6285733337052",
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-24 bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={cn(
              isVisible ? "animate-slide-in-left" : "opacity-0"
            )}
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              LET&apos;S{" "}
              <span className="gradient-text">TALK!</span>
            </h2>
            <p className="text-[#828282] text-base sm:text-lg max-w-md">
              Hubungi kami, dan mari wujudkan visi Anda menjadi kenyataan.
            </p>
          </div>

          {/* Right Content - Contact Cards */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              isVisible ? "animate-slide-in-right" : "opacity-0"
            )}
          >
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "WhatsApp" ? "_blank" : undefined}
                  rel={contact.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
                  )}
                  style={{
                    animationDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                  }}
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} weight="fill" className="text-white" />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-[#828282] text-sm mb-1">{contact.label}</p>

                  {/* Value */}
                  <p className="font-semibold text-[#1A1A1A] text-sm group-hover:text-[#F16322] transition-colors duration-300">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
