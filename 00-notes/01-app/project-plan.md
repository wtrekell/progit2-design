# SketchSpark — Project Plan

## What We're Building

A working web application. A designer uploads or draws a rough sketch, SketchSpark sends it through an AI vision model, and returns up to 5 high-fidelity UI design options. The designer compares, selects, refines, and exports.

**Team**: You (direction, review, decisions) and me (design, code, implementation).

---

## Technical Architecture

### Frontend
- **Framework**: React + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS + design tokens
- **Canvas**: HTML5 Canvas API (freehand drawing)
- **State**: Zustand (lightweight, minimal boilerplate)

### Backend
- **Runtime**: Node.js + Express (or Fastify)
- **AI Integration**: Anthropic Claude API (vision model for sketch interpretation, text generation for UI output)
- **Storage**: Local filesystem for MVP, S3-compatible for later
- **Auth**: None for MVP (single-user local app)

### AI Pipeline
- Claude's vision capabilities analyze uploaded sketches
- Structured prompt templates produce UI layout definitions (JSON)
- 5 parallel requests with different strategy parameters generate the options
- Design tokens injected into prompts to constrain output

### Export
- Generated layouts rendered as HTML/CSS
- SVG and PNG export via server-side rendering
- React component export as downloadable code

---

## MVP Scope (v0.5-alpha)

The smallest thing that demonstrates the core value: **one sketch in, five options out.**

### In
- Upload a sketch image (JPEG/PNG drag-and-drop)
- AI analyzes sketch and generates 5 layout interpretations
- Side-by-side comparison view of all 5 options
- Each option rendered as a live HTML/CSS preview
- Select and view any option full-screen

### Out (deferred)
- Freehand drawing canvas
- Import from Figma/Sketch
- Refinement editor
- Export to Figma/SVG/PNG/React
- Design token configuration UI
- History/versioning
- Onboarding flow
- Multi-platform generation (iOS/Android)
- User accounts and collaboration

---

## Phases

### Phase 1: Project Scaffolding

Set up the monorepo, tooling, and dev environment.

| Task | Detail |
|------|--------|
| Initialize monorepo | `packages/client` (React) + `packages/server` (Node) |
| Client scaffolding | Vite + React + TypeScript + Tailwind |
| Server scaffolding | Express/Fastify + TypeScript |
| Design tokens | `design-tokens.json` consumed by Tailwind config |
| Dev tooling | ESLint, Prettier, tsconfig, shared types |
| Scripts | `dev` (both client + server), `build`, `lint` |

### Phase 2: Sketch Upload + AI Analysis

The input half of the pipeline.

| Task | Detail |
|------|--------|
| Upload UI | Drag-and-drop zone, file picker, image preview |
| Upload endpoint | `POST /api/sketch` — accepts image, stores it, returns ID |
| Sketch analysis | Send image to Claude vision API, extract element list, hierarchy, grouping, intent patterns |
| Analysis response | Structured JSON: detected elements, spatial relationships, confidence |
| Error handling | File validation, size limits, API failures |

### Phase 3: Option Generation

The AI core — five parallel interpretations from one analysis.

| Task | Detail |
|------|--------|
| Strategy definitions | 5 strategies: Faithful, Grid, Editorial, Minimal, Dense |
| Prompt templates | Per-strategy prompts that produce structured layout JSON |
| Parallel generation | 5 concurrent Claude API calls, each with different strategy |
| Layout schema | Define the JSON schema for generated layouts (containers, elements, styles) |
| Generation endpoint | `POST /api/generate` — takes sketch analysis, returns 5 layout options |
| Progress feedback | SSE or polling for generation status |

### Phase 4: Results Comparison UI

The output half — displaying and comparing the 5 options.

| Task | Detail |
|------|--------|
| Results grid | 5-up card layout showing all options |
| Live preview | Each option rendered as real HTML/CSS in an iframe or shadow DOM |
| Option metadata | Strategy label, confidence score, key interpretation notes |
| Full-screen view | Click to expand any option to full viewport |
| Responsive | Results page works on desktop (side-by-side) and tablet (scrollable) |

### Phase 5: Design Token Integration

Brand consistency across all generated output.

| Task | Detail |
|------|--------|
| Token format | `design-tokens.json` — colors, typography, spacing, radii |
| Token injection | Tokens included in generation prompts as constraints |
| Token preview | Settings page to view/edit current tokens |
| Default tokens | Ship with sensible defaults (the ones from the spec) |
| Generated CSS | Output layouts reference token values, not hard-coded colors |

### Phase 6: Polish + Hardening

Make it feel like a real product.

| Task | Detail |
|------|--------|
| Loading states | Generation progress with strategy-by-strategy completion |
| Error states | Sketch too simple, generation timeout, API failure |
| Empty states | Dashboard before first sketch |
| Accessibility | Keyboard navigation, screen reader support, contrast |
| Performance | Image optimization, lazy loading, caching |

---

## Decisions Needed

1. **Monorepo or single app?** Monorepo (`packages/client` + `packages/server`) gives clean separation. A single Next.js app is simpler but couples things. My recommendation: monorepo — it's not much more setup and keeps the AI pipeline isolated.

2. **Claude API model?** Claude Sonnet for speed (5 parallel calls need to be fast) or Opus for quality? We could use Sonnet for generation and Opus for the initial sketch analysis.

3. **Layout output format?** The AI needs to produce something we can render. Options:
   - **(a) Structured JSON** — a layout tree we render with a custom React renderer
   - **(b) HTML/CSS directly** — Claude generates the actual markup
   - **(c) Tailwind classes** — Claude generates HTML with Tailwind utilities

   My recommendation: **(c)** — Tailwind classes are token-friendly, Claude knows them well, and we can render them directly without a custom renderer.

4. **Where does this live?** In `00-notes/01-app/` alongside the plan, or in a separate top-level directory? Or a separate repo entirely?

---

## Working Process

1. I build each phase end-to-end (code, not descriptions)
2. You review, test, and direct changes
3. We iterate until it works
4. Move to next phase

Phases 1–4 are the critical path to MVP. Phase 5 enhances quality. Phase 6 is polish. We should be able to demo "upload sketch → see 5 options" after Phase 4.
