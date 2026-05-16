# Cross-Chapter Conventions

This document ensures consistency across the entire book. All walkthroughs and prose must adhere to these facts.

## The SketchSpark Team
- **Nora:** UX Lead (CLI user)
- **Sam:** UI Designer (VS Code user)
- **Priya:** Illustrator (GitHub Desktop user)
- **Kai:** Frontend/ML Engineer (JetBrains user)
- **Marcus:** Community Contributor (fork-and-PR workflow)

## Repository Structure
The repo name is always `sketchspark`.
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
├── docs/
├── CONTRIBUTING.md
├── CHANGELOG.md
├── .gitignore
└── .gitattributes
```

## Milestone Tags
- `v0.1-concept`: Concept approved, wireframes in place.
- `v0.5-alpha`: End-to-end pipeline working (web).
- `v0.8-beta`: Multi-platform, design token integration.
- `v1.0`: Public launch, refinement editor.

## Standard Branch Names
- `main`: The stable version of the truth.
- `option/<name>`: Design explorations (e.g., `option/card-layout`).
- `feature/<name>`: Approved work (e.g., `feature/onboarding-illustrations`).
- `fix/<name>`: Corrections (e.g., `fix/contrast-audit`).
- `research/<name>`: Discovery work.

## Commit Message Format
The team uses a `[Phase: Component]` prefix:
- `[Design: Results Screen] Add overlay diff comparison mode`
- `[Research: Persona] Update early-adopter goals`
- `[Pipeline: Prompts] Improve mobile layout generation`
- `[Fix: Onboarding] Correct tablet breakpoint`

## Key File Ownership
- `product-brief.md`, `research/`: Owned by Nora.
- `screens/`, `design-tokens.json`: Owned by Sam.
- `illustrations/`, `icons/`: Owned by Priya.
- `pipeline/`: Owned by Kai.
- `prompts/`: Edited by Kai and Marcus.
