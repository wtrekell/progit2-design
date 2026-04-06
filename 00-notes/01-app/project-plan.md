# SketchSpark — Project Plan

## Context

SketchSpark is the design repository that serves as the running example throughout Pro Git, Second Edition. It is **not** a working application — it is a realistic, production-quality collection of design artifacts that a real product team would create. Every file must be believable enough that a reader can follow the book's Git tutorials using real content, not lorem ipsum.

The repository tells a story across the book's 10 chapters and 3 appendices. Files are introduced, modified, branched, merged, conflicted, and tagged at specific points in that storyline. The plan below builds the repository in storyline order so that each phase produces the artifacts the corresponding chapters need.

**Team**: You (direction, review, decisions) and me (research, writing, generation).

---

## Scope

### What we are building
The complete SketchSpark design repository with all artifacts described in the product spec and storyline — research documents, concept work, screen descriptions, illustrations metadata, icons, AI pipeline configuration, design tokens, documentation, and contribution guidelines. Every file has real, internally consistent content.

### What we are not building
- A working frontend application (React/TypeScript)
- A working AI pipeline (Python/PyTorch)
- Actual Figma source files or rasterized screen mockups
- The Git history choreography (commits, branches, tags tied to specific chapters)

The Git history choreography is a separate project. This plan produces the **content** that history will contain.

---

## Phases

### Phase 1: Research & Discovery (Storyline: Ch 1–2)

Nora's solo research before the repository exists. These files are the first things committed.

| Deliverable | File(s) | Format | Notes |
|------------|---------|--------|-------|
| Product brief | `product-brief.md` | Markdown | Vision, problem, solution, milestones |
| Early adopter persona | `research/personas/early-adopter.md` | Markdown | Maya — freelance designer |
| Team lead persona | `research/personas/team-lead.md` | Markdown | David — design team manager |
| Competitive analysis | `research/competitive-analysis.md` | Markdown | Uizard, Galileo, Framer, Figma, Midjourney |
| Interview notes (round 1) | `research/interview-notes/round-1-findings.md` | Markdown | 8 participants, discovery phase |
| Journey map description | `research/journey-maps/sketch-to-prototype.md` | Markdown | Text description (PNG placeholder noted) |
| Changelog | `CHANGELOG.md` | Markdown | Started with v0.1-concept |

**Decision needed from you**: The storyline spec shows `research/personas/` with two files and `research/interview-notes/` with two files (round 1 and round 2). Round 2 comes later (post-alpha). Should we create the directory structure now with only round 1, or stub round 2?

---

### Phase 2: Concept Design (Storyline: Ch 2–3)

Nora creates the repository. She and Sam begin concept work. This is where the information architecture, user flows, and wireframes take shape.

| Deliverable | File(s) | Format | Notes |
|------------|---------|--------|-------|
| Information architecture | `concept/information-architecture.md` | Markdown | Site map, navigation model, data objects |
| User flows | `concept/user-flows.md` | Markdown | 7 core flows with diagrams |
| Wireframe descriptions | `concept/wireframes/sketch-input.md` | Markdown | Text wireframes for key screens |
| Wireframe descriptions | `concept/wireframes/results-comparison.md` | Markdown | The 5-option comparison view |
| Design tokens v1 | `design-tokens.json` | JSON | Initial color, type, spacing, radius tokens |
| Gitignore | `.gitignore` | Text | OS files, editor files, build artifacts |
| Gitattributes | `.gitattributes` | Text | Binary file handling, diff settings |

**Decision needed from you**: Wireframes in the storyline spec are PNGs (binary). We can't generate actual images, so options are: (a) text-based wireframes in markdown, (b) SVG wireframes, or (c) placeholder PNGs with a manifest describing what they depict. Which approach?

---

### Phase 3: Visual Design & Assets (Storyline: Ch 3–5)

Sam and Priya join. Sam creates screen designs. Priya builds illustrations and icons. This is the binary-heavy phase that teaches branching, merging, and conflict resolution.

| Deliverable | File(s) | Format | Notes |
|------------|---------|--------|-------|
| Screen: onboarding welcome | `screens/onboarding/welcome.md` | Markdown | Screen spec with layout, states, interactions |
| Screen: sketch input upload | `screens/sketch-input/upload-flow.md` | Markdown | Upload flow spec |
| Screen: results card layout | `screens/results/card-layout.md` | Markdown | Card-based comparison view |
| Screen: results list layout | `screens/results/list-layout.md` | Markdown | List-based comparison view |
| Screen: results freeform | `screens/results/canvas-freeform.md` | Markdown | Freeform canvas view |
| Onboarding illustrations | `illustrations/onboarding/step-1-upload.md` | Markdown | Art direction specs |
| Onboarding illustrations | `illustrations/onboarding/step-2-generate.md` | Markdown | Art direction specs |
| Onboarding illustrations | `illustrations/onboarding/step-3-refine.md` | Markdown | Art direction specs |
| Marketing hero | `illustrations/marketing/hero-image.md` | Markdown | Art direction spec |
| Navigation icons | `icons/navigation/*.svg` | SVG | home, settings, history |
| Action icons | `icons/actions/*.svg` | SVG | upload, generate, compare |

**Decision needed from you**: The storyline has Sam creating competing screen layouts (card vs. list) on separate branches that get merged. Should we write both versions now with enough difference that a merge conflict is realistic? Or handle that in the Git choreography phase?

---

### Phase 4: AI Pipeline Configuration (Storyline: Ch 5–7)

Kai joins. He builds out the AI pipeline config — model parameters, prompt templates, training data manifest. These are the structured text files that demonstrate hooks, validation, and code review.

| Deliverable | File(s) | Format | Notes |
|------------|---------|--------|-------|
| Model parameters | `pipeline/model-params.yaml` | YAML | Version, inference, generation, quality settings |
| Core prompt | `pipeline/prompts/sketch-to-ui.txt` | Text | Main generation prompt template |
| Mobile prompt | `pipeline/prompts/mobile-layout.txt` | Text | Platform-specific adaptation |
| Accessibility prompt | `pipeline/prompts/accessibility-check.txt` | Text | Post-generation audit prompt |
| Training manifest | `pipeline/training-data-manifest.json` | JSON | Dataset categories, counts, preprocessing |

---

### Phase 5: Public Beta Prep (Storyline: Ch 6–8)

SketchSpark goes public. Marcus contributes. Documentation, contribution guidelines, and the second round of research appear.

| Deliverable | File(s) | Format | Notes |
|------------|---------|--------|-------|
| Contributing guide | `CONTRIBUTING.md` | Markdown | How to contribute to the design repo |
| Setup guide | `docs/setup-guide.md` | Markdown | Getting started for new contributors |
| API reference | `docs/api-reference.md` | Markdown | Pipeline API and token format docs |
| Interview notes (round 2) | `research/interview-notes/round-2-findings.md` | Markdown | Post-alpha validation |
| Updated design tokens | `design-tokens.json` | JSON | Refined values from beta testing |
| Mobile prompt improvement | `pipeline/prompts/mobile-layout.txt` | Text | Marcus's contribution |

---

### Phase 6: Launch Polish (Storyline: Ch 8–10)

Final refinements, accessibility audit, and v1.0 tag. Hooks, attributes, and internals chapters reference these files.

| Deliverable | File(s) | Format | Notes |
|------------|---------|--------|-------|
| Accessibility audit results | `docs/accessibility-audit.md` | Markdown | WCAG AA compliance report |
| Updated model params | `pipeline/model-params.yaml` | YAML | Production-tuned settings |
| Final changelog | `CHANGELOG.md` | Markdown | Full version history through v1.0 |
| Hook scripts (described) | `docs/git-hooks.md` | Markdown | Documents validation hooks for pipeline |

---

## File Inventory Summary

| Category | File Count | Formats |
|----------|-----------|---------|
| Research | 6 | Markdown |
| Concept | 4 | Markdown, JSON |
| Screens | 5 | Markdown |
| Illustrations | 4 | Markdown |
| Icons | 6+ | SVG |
| Pipeline | 5 | YAML, Text, JSON |
| Docs | 5 | Markdown |
| Root config | 5 | Markdown, JSON, Text |
| **Total** | **~40** | |

---

## Working Order

We build in phase order. Within each phase:

1. I draft all files for the phase
2. You review and direct revisions
3. We finalize and commit
4. Move to next phase

Phases 1–2 are the foundation — everything else builds on them. Phases 3–4 can run in parallel since they cover different file sets (design assets vs. pipeline config). Phases 5–6 are sequential since they modify earlier files.

---

## Open Questions

1. **Wireframe format** — Text markdown, SVG, or placeholder binary with manifest?
2. **Round 2 interviews** — Create directory now with only round 1, or wait?
3. **Branch-ready content** — Write competing versions (card vs. list layout) now, or defer to Git choreography?
4. **Screen specs** — How detailed? Brief descriptions, or full interaction specs with every state and edge case?
5. **Storyline fidelity** — The spec references specific filenames (`.fig`, `.psd`, `.png`). Do we create markdown equivalents at those paths, or use our own naming?
