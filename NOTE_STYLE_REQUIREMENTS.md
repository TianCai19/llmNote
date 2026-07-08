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

Terminology and prerequisite requirements
- Before drafting, identify terms, acronyms, methods, metrics, datasets, and decoding/training variants that a reader may not know unless they have read adjacent papers.
- For each important term, read enough primary or high-quality adjacent sources to explain it accurately in context; do not assume the target reader already knows local shorthand such as AO, AR, RLVR, GRPO, Pass@k, remasking, block diffusion, or similar paper-specific vocabulary.
- The first meaningful use of an acronym must expand it and explain why it matters to the paper's argument. If the term is central, add a small glossary, prerequisite section, or comparison table near the beginning.
- When a paper builds on a research thread, add a brief "related-paper context" explanation that names the representative prior works and clarifies what each source contributes to understanding the current paper.
- Distinguish paper-local terminology from field-wide terminology. If a paper uses a term in a narrower way than the broader literature, state that boundary explicitly.
- Avoid unexplained abbreviations in captions, tables, and conclusions; these are often scanned out of order.
- During content self-check, read the note from the perspective of someone who has not read the adjacent papers. If any key paragraph depends on an unexplained acronym or prior method, add the missing explanation before submitting.

Media requirements
- Download figures into `public/notes/<slug>/` and reference locally in the note.
- Use descriptive captions; keep figure numbering consistent with the paper.

Index requirements
- Add the note entry to `src/pages/index.astro` with title, description, tags, date, and read time.

Iteration workflow
- If requirements evolve, append new bullets rather than rewriting prior ones.
- If a reviewer or reader says a term or acronym is hard to follow, treat that as a reusable note-authoring requirement: add source-grounded explanations to the current note and append the general lesson here instead of fixing only the local paragraph.
