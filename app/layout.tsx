import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Extra Integer - Digital Agency Portfolio 2024",
  description: "Extra Integer adalah agensi digital Indonesia yang berkomitmen untuk menggabungkan kreativitas dengan teknologi guna memberikan solusi yang luar biasa.",
  keywords: ["web development", "graphic design", "content creation", "digital agency", "Indonesia"],
  authors: [{ name: "Extra Integer" }],
  openGraph: {
    title: "Extra Integer - Digital Agency Portfolio 2024",
    description: "Transforming ideas into digital reality",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
