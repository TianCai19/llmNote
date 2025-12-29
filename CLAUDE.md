# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LLM Note is an educational website built with Astro, featuring interactive visualizations of AI architectures (Transformer, ViT, VLM) with mathematical formulas.

## Development Commands

```bash
npm run dev       # Start development server (default port 4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

## Tech Stack

- **Framework**: Astro 5.16
- **Styling**: Tailwind CSS 4
- **Math**: MathJax 3.2.2
- **Font**: Noto Sans SC

## Architecture

```
src/
├── components/      # SVG diagram components (architecture visualizations)
├── layouts/         # BaseLayout with MathJax config and global styles
├── pages/           # Route pages (index.astro, notes/*.astro)
└── styles/          # Global CSS
```

## Important: Astro Template Syntax Conflicts

**Critical**: Astro's `$...$` expression syntax conflicts with MathJax inline math.

**Solution**: When writing mathematical expressions in Astro files, avoid using `$` delimiters. Use plain HTML entities or Unicode symbols instead:
- Use `&#8730;d` or `√d` instead of `$\sqrt{d}$`
- Use `(d)` instead of `$d$`
- Or use MathJax's `\(...\)` delimiters carefully (still risky with `{}` braces)

**Example of what breaks**:
```astro
<!-- This will error - Astro tries to evaluate 'd' as a variable -->
<p>当维度 $d$ 很大时...</p>
```

**Example of what works**:
```astro
<!-- Use HTML entities or Unicode -->
<p>当维度 (d) 很大时，除以 &#8730;d 可以稳定训练</p>
```

## Design System

**Cards** (`.card` class):
- White background, rounded-2xl corners
- `p-8 mb-8` padding and spacing
- `border border-slate-100` subtle border
- `hover:shadow-md` transition on hover

**Typography**:
- Headings use gradient text: `.gradient-text` (blue → violet gradient)
- Body: `text-slate-600` with `leading-loose`
- h2: `text-2xl font-bold mb-6` with left border accent

**Colors**:
- Primary: Blue to Violet gradient
- Background: `bg-slate-50`
- Text: `text-slate-800/600/400`
- Highlights: `bg-sky-100 text-sky-700`

## Content Patterns

**Note pages** follow this structure:
1. Header with title/description (styled via global `main > header` selector)
2. Multiple `.card` sections
3. SVG components wrapped in `.svg-container`
4. Tables with `.min-w-full divide-y`

**Homepage** uses:
- Large numbered cards (01, 02...)
- Vertical card layout
- Hover effects with arrow fade-in
- Tags + read time metadata

## SVG Components

All diagram components (CnnVsVitDiagram, SelfAttention, TransformerArchitecture, VLMArchitecture, ViTArchitecture) are pure Astro/SVG files with no external dependencies.

**Pattern**: Wrap in `<div class="svg-container">` for proper spacing and background.
