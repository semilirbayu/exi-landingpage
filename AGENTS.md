# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start development server (http://localhost:3000)
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Run ESLint
```

## Architecture

This is a Next.js 14 landing page using the App Router with Tailwind CSS v4.

### Key Patterns

**Component Organization:**
- `components/layout/` - Header, Footer (persistent across pages)
- `components/sections/` - Page sections (Hero, About, Services, Contact)
- `components/sections/portfolio/` - Portfolio components (PortfolioGrid, PortfolioSlider, PortfolioSlide)
- `data/projects.ts` - Portfolio project data
- `lib/utils.ts` - Utility functions including `cn()` for className merging

**Styling:**
- Uses Tailwind CSS v4 with `@import "tailwindcss"` syntax
- CSS variables defined in `globals.css` for colors: `--color-primary` (#F16322), `--color-secondary` (#FFCC02)
- Utility classes: `.gradient-text`, `.gradient-bg`
- Fonts loaded via `next/font`: Inter (body) and Poppins (headings)

**Animations:**
- Uses Framer Motion for all animations
- `useInView` from Framer Motion for scroll-triggered animations
- Common patterns: `initial`, `animate`, `whileHover`, `whileTap`, `transition`
- Staggered animations use `variants` with `staggerChildren`

**Font Usage:**
- Headings: `font-[family-name:var(--font-poppins)]`
- Body: Uses Inter as default via CSS variable
