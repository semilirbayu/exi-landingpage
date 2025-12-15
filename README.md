# Extra Integer - Digital Agency Portfolio 2024

A modern landing page for Extra Integer, an Indonesian digital agency showcasing their portfolio and services.

## Tech Stack

- **Runtime:** [Bun](https://bun.sh)
- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [@phosphor-icons/react](https://phosphoricons.com)
- **Fonts:** Inter & Poppins (via next/font)

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
bun run build
```

### Start Production Server

```bash
bun run start
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts
├── page.tsx            # Main landing page
├── globals.css         # Global styles + animations

components/
├── layout/
│   ├── Header.tsx      # Navigation + mobile menu
│   └── Footer.tsx      # Footer with branding
├── sections/
│   ├── Hero.tsx        # Welcome section
│   ├── Services.tsx    # What We Offer
│   ├── Portfolio.tsx   # Our Works
│   ├── Quote.tsx       # Inspirational quote
│   └── Contact.tsx     # Let's Talk CTA

hooks/
└── useScrollAnimation.ts   # Intersection Observer hook

lib/
└── utils.ts            # Utility functions
```

## Features

- Scroll-triggered animations
- Responsive design (mobile-first)
- CSS-only animations (no external animation libraries)
- Optimized fonts with next/font

## License

All rights reserved - Extra Integer Technology
