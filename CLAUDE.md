# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- `components/sections/` - Page sections (Hero, Services, Portfolio, Quote, Contact)
- `hooks/` - Custom React hooks
- `lib/utils.ts` - Utility functions including `cn()` for className merging

**Styling:**
- Uses Tailwind CSS v4 with `@import "tailwindcss"` syntax
- CSS variables defined in `globals.css` for colors: `--color-primary` (#F16322), `--color-secondary` (#FFCC02)
- Custom animation classes: `.animate-fade-in-up`, `.animate-slide-in-left`, `.gradient-text`, `.gradient-bg`
- Fonts loaded via `next/font`: Inter (body) and Poppins (headings)

**Animations:**
- CSS-only animations (no external libraries)
- `useScrollAnimation` hook provides Intersection Observer for scroll-triggered animations
- Animation delays use `.delay-100` through `.delay-600` classes

**Font Usage:**
- Headings: `font-[family-name:var(--font-poppins)]`
- Body: Uses Inter as default via CSS variable
