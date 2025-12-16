import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F16322",
};

export const metadata: Metadata = {
  title: "Extra Integer - Digital Agency Portfolio 2024",
  description:
    "Extra Integer adalah agensi digital Indonesia yang berkomitmen untuk menggabungkan kreativitas dengan teknologi guna memberikan solusi yang luar biasa.",
  keywords: [
    "web development",
    "graphic design",
    "content creation",
    "digital agency",
    "Indonesia",
  ],
  authors: [{ name: "Extra Integer" }],
  creator: "Extra Integer",
  publisher: "Extra Integer",
  metadataBase: new URL("https://extrainteger.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon-exi.png", type: "image/png" }],
    apple: [{ url: "/favicon-exi.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Extra Integer - Digital Agency Portfolio 2024",
    description: "Transforming ideas into digital reality",
    type: "website",
    locale: "id_ID",
    url: "https://extrainteger.com",
    siteName: "Extra Integer",
    images: [
      {
        url: "/images/puzzle.webp",
        width: 1200,
        height: 630,
        alt: "Extra Integer - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extra Integer - Digital Agency Portfolio 2024",
    description: "Transforming ideas into digital reality",
    images: ["/images/puzzle.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Extra Integer",
  description:
    "Extra Integer adalah agensi digital Indonesia yang berkomitmen untuk menggabungkan kreativitas dengan teknologi guna memberikan solusi yang luar biasa.",
  url: "https://extrainteger.com",
  logo: "https://extrainteger.com/icons/logo.svg",
  sameAs: ["https://instagram.com/extrainteger"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
