# Extra Integer - Digital Agency Portfolio 2024

A modern landing page for Extra Integer, an Indonesian digital agency showcasing their portfolio and services.

## Tech Stack

- **Runtime:** [Bun](https://bun.sh)
- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
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
│   ├── About.tsx       # Company info & stats
│   ├── Services.tsx    # What We Offer
│   ├── Contact.tsx     # Let's Talk CTA
│   └── portfolio/
│       ├── index.ts          # Barrel exports
│       ├── types.ts          # Project type definitions
│       ├── PortfolioGrid.tsx # Mosaic grid layout
│       ├── PortfolioSlider.tsx # Full-page slider
│       └── PortfolioSlide.tsx  # Individual slide

data/
└── projects.ts         # Portfolio project data

lib/
└── utils.ts            # Utility functions
```

## Features

- Scroll-triggered animations with Framer Motion
- Interactive hover and tap effects
- Mouse-follow parallax on hero section
- Responsive design (mobile-first)
- Optimized fonts with next/font

## License

All rights reserved - Extra Integer Technology
