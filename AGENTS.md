# Repository Guidelines

## Project Structure & Module Organization
This is an Astro site using Tailwind CSS. Source code lives in `src/`, with route pages in `src/pages/` (e.g., `index.astro`, `notes/vit.astro`), shared layouts in `src/layouts/`, and reusable UI/diagram components in `src/components/`. Global styling and theme tokens live in `src/styles/global.css`, and static assets belong in `public/`. Tooling/configuration is in `astro.config.mjs` and `tsconfig.json`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Astro dev server (default `http://localhost:4321`) with hot reload.
- `npm run build` generates a production build in `dist/`.
- `npm run preview` serves the production build locally for verification.

## Coding Style & Naming Conventions
- Keep indentation consistent with existing files: 4 spaces in `.astro` templates and 2 spaces in `.css`.
- Component filenames use PascalCase (e.g., `ViTArchitecture.astro`).
- Route files follow path-based naming under `src/pages/` (e.g., `notes/transformer.astro`).
- Prefer Tailwind utility classes in markup; add shared patterns and theme variables in `src/styles/global.css`.
- Keep markup semantic and avoid excessive wrapper divs unless needed for layout.

## Testing Guidelines
There are no automated tests configured in this repository. If you add tests, update `package.json` with a test script and document the chosen runner (e.g., Vitest). Use clear naming such as `ComponentName.test.ts`.

## Commit & Pull Request Guidelines
No Git history is available in this workspace (no `.git`), so there is no established commit convention to reference. If you initialize Git, use short, imperative commit subjects (e.g., `Add hero layout`) and include scope where helpful.

For pull requests, include:
- A concise summary of changes.
- Screenshots for UI updates (before/after if possible).
- Links to related issues or tasks.
