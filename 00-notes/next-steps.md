# Next Steps

Recommended work sequence following the completion of the storyline, product spec, and per-chapter outlines. Tasks are ordered within three phases: foundational (do before prose), writing (execute after foundation), and strategic (resolve in parallel).

---

## Foundational

These tasks establish the shared infrastructure that every chapter will reference. Completing them first prevents inconsistencies that would otherwise have to be fixed across many chapters later.

### 1. Build the sample `sketchspark/` repository

Create an actual directory of placeholder files matching the structure described in `storyline.md`:

```
sketchspark/
├── product-brief.md
├── research/
├── concept/
├── screens/
├── illustrations/
├── icons/
├── design-tokens.json
├── pipeline/
│   ├── model-params.yaml
│   └── prompts/
├── docs/
├── CONTRIBUTING.md
├── CHANGELOG.md
├── .gitignore
└── .gitattributes
```

Every chapter's walkthroughs run against this repo. Having it exist as real files means commands, diffs, and outputs can be captured verbatim instead of invented. The placeholders do not need to be production-quality — they need to be diffable, committable, and believable.

### 2. Write a voice and tone guide

A short document capturing how to write for UX designers learning Git. Covers:

- Reading level and assumed background (design fluency, no CLI assumption)
- When to use design analogies vs. plain explanation
- How to introduce commands (always show context before syntax)
- Terminology decisions (e.g., "commit" vs. "save," "branch" vs. "version")
- Character voice — how Nora, Sam, Priya, Kai, and Marcus sound in narration
- Illustration style guidance for the diagrams that will eventually replace `images/`

Target: ~2 pages. Lives at `00-notes/voice-and-tone.md`.

### 3. Define cross-chapter conventions

A single source of truth for facts that must remain consistent across every chapter:

- Branch names used in examples (e.g., `feature/mobile-prompts`, `fix/contrast-audit`)
- Tag names and what milestone each represents (`v0.1-concept`, `v0.5-alpha`, `v0.8-beta`, `v1.0`)
- File paths referenced across chapters
- Commit message format the team uses
- Which character owns which artifact type
- Dates and project timeline anchors

Lives at `00-notes/conventions.md`. Every chapter outline already references these — this document makes them authoritative.

---

## Writing

### 4. Write Chapter 1 as a proof of concept

Chapter 1 is the best candidate for the first prose pass because it sets the voice, establishes Nora as the entry character, and introduces the product. Completing it end-to-end will surface:

- Whether the outline structure actually translates to readable prose
- How much of the original AsciiDoc can be preserved vs. rewritten
- What the walkthrough format looks like in practice
- How figures and screenshots need to be captured

Treat the Chapter 1 draft as a template. Decisions made there will propagate to every subsequent chapter.

### 5. Write Chapters 2, 3, 5, 6 next

After Chapter 1, prioritize the highest-value chapters:

- **Chapter 2** (Git Basics) — the daily workflow; most designers will use only this chapter
- **Chapter 3** (Branching) — the feature that most changes a designer's mental model
- **Chapter 5** (Distributed Git) — the team collaboration story; Marcus enters here
- **Chapter 6** (GitHub) — the PR workflow, which is most designers' real interface with Git

Chapters 4, 7, 8, 9, 10 and the appendices come after these four are stable. Chapter 9 (other SCMs) is the lowest-priority chapter and may not need a full rewrite.

---

## Strategic

These decisions can be resolved in parallel with foundational and writing work, but they constrain downstream choices and should not be deferred indefinitely.

### 6. Decide on build tooling and distribution

Questions to resolve:

- Does the UX designer edition live as a fork of progit2, a long-lived branch, or a parallel variant with its own master `.asc`?
- Does it build with the existing Asciidoctor pipeline or switch to a different toolchain?
- What output formats ship (HTML, PDF, EPUB, web-only)?
- How will illustrations be integrated (replacing `images/` entirely, or additive)?
- Is the title "Pro Git for UX Designers" or something else? Licensing implications of the CC-BY-NC-SA-3.0 inheritance.

This decision affects how Chapter 1 gets drafted — prose written for a fork is different from prose written for a standalone book.

### 7. Plan the illustration replacement

The existing book has ~150 diagrams in `images/` built from `diagram-source/progit.sketch`. Most need to be redrawn for the new audience because they currently show generic branch diagrams, not design workflows.

Plan:

- Inventory the existing 150 diagrams and tag each as "keep," "adapt," or "replace"
- Identify new illustrations the storyline requires (SketchSpark screens, team avatars, repository structure, PR review interface)
- Decide illustration style (hand-drawn, flat vector, screenshot-with-callouts)
- Choose the source tool — Figma (matches the book's subject), Sketch (matches the original), or something else
- Budget: illustration work is typically the longest-lead item in a technical book revision

Lives at `00-notes/illustration-plan.md` once started.

---

## Suggested Order

1. Cross-chapter conventions (fastest — pulls from outlines that already exist)
2. Sample `sketchspark/` repo skeleton (unblocks every walkthrough)
3. Voice and tone guide (unblocks prose)
4. Build tooling decision (unblocks Chapter 1 drafting)
5. Chapter 1 draft
6. Illustration inventory (can run in parallel with Chapter 1)
7. Chapters 2, 3, 5, 6
8. Remaining chapters and appendices
