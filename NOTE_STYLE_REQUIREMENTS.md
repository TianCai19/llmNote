This document captures the reusable requirements for paper-based notes in this repository.

Scope
- Applies to new paper notes added under `src/pages/notes/`.
- Intended for long-form, paper-like writeups with figures and citations.

Content requirements
- Structure must follow the paper flow: Introduction -> Background/Motivation -> Method/System -> Experiments/Evaluation -> Discussion -> Conclusion.
- Paragraphs should be long-form and complete (no short/summary-only blocks).
- Use a simpler angle to explain concepts while keeping professional tone and technical detail.
- Add original-paper quotes with source links in key sections (Abstract/Intro/Results or other relevant spots).
- Include all original figures from the paper and embed them at the matching sections.
- Keep a final “Original Figures” gallery at the end for quick scanning.
- “Additions only”: prefer adding content over removing existing paragraphs when iterating.

Media requirements
- Download figures into `public/notes/<slug>/` and reference locally in the note.
- Use descriptive captions; keep figure numbering consistent with the paper.

Index requirements
- Add the note entry to `src/pages/index.astro` with title, description, tags, date, and read time.

Iteration workflow
- If requirements evolve, append new bullets rather than rewriting prior ones.
