# CLAUDE.md — SketchSpark

## What This Is

SketchSpark is a working web application being built in `00-notes/01-app/`. Not a design document collection. Not a book artifact. A real app.

## What SketchSpark Does

A designer uploads a rough sketch. The app analyzes it with Claude Opus, then generates 5 different UI layout interpretations in parallel using Claude Sonnet. Each option is rendered as a live in-app preview. The designer compares, selects, and refines.

## Project Structure

```
00-notes/01-app/
├── packages/
│   ├── client/              React + TypeScript + Vite + Tailwind
│   └── server/              Node.js + Express + TypeScript
├── design-tokens.json       Shared color/type/spacing/radius tokens
├── project-plan.md          Full plan with phases and decisions
├── toy/                     Earlier draft artifacts (ignore)
├── CLAUDE.md                This file
└── package.json             Workspace root
```

## Tech Stack

- **Client**: React, TypeScript, Vite, Tailwind CSS, Zustand
- **Server**: Node.js, Express, TypeScript, Anthropic SDK
- **AI**: Claude Opus (sketch analysis), Claude Sonnet (option generation)
- **Output**: Structured JSON layout trees rendered by a client-side preview component

## Key Architecture Decisions

1. **Monorepo** with npm workspaces: `packages/client` + `packages/server`
2. **AI returns structured JSON, not HTML.** The client owns rendering via a preview component.
3. **5 parallel generation calls**, one per layout strategy (Faithful, Grid, Editorial, Minimal, Dense)
4. **Design tokens** live in `design-tokens.json` at the project root and are consumed by both Tailwind config and AI prompts

## Current Milestone

**v0.5-alpha (MVP)**: Upload a sketch → get 5 rendered options → compare side-by-side.

## Build Phases (MVP)

Each phase follows: **UX design → review/approval → development.** No code for a screen or interaction until design is done and approved.

1. Project scaffolding (monorepo, tooling, dev environment — no design needed)
2. UX design — core flows (user flows, wireframes, interaction specs, responsive behavior)
3. Sketch upload (design first, then build: upload UI + server endpoint)
4. AI pipeline (sketch analysis + option generation — backend, no UI)
5. Preview renderer (JSON layout tree → live rendered UI component)
6. Results comparison UI (design first, then build: 5-up grid, full-screen, progress)

## How We Work

- Two-person team. The user is a UX designer who owns direction, design, review, and product decisions. Claude codes and implements.
- Design comes before dev. No building screens without UX design work (flows, wireframes, interaction specs) reviewed and approved first. Dev without design = crap.
- Build each phase end-to-end before moving to the next.
- Do not ask unnecessary questions. Build what the plan says.
- Do not create documentation files, READMEs, or planning artifacts unless asked.
- All code goes in `00-notes/01-app/`. Respect the parent repo's CLAUDE.md for anything outside this directory.

## Commands

```bash
# From 00-notes/01-app/
npm install                  # Install all workspace dependencies
npm run dev                  # Run client + server concurrently
npm run build                # Build both packages
npm run lint                 # Lint both packages
```

## What Not to Do

- Do not treat this as a design artifact project or book example
- Do not create placeholder files, READMEs for empty directories, or spec documents
- Do not ask for decisions that have already been made (check the Decisions Log in project-plan.md)
- Do not propose alternatives to resolved decisions
- Do not add features beyond the current milestone scope
