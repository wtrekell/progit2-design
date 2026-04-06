# SketchSpark — Project Plan

## What This Is

SketchSpark is a working web application. A designer uploads a rough sketch, the app sends it through an AI vision model, and returns up to 5 distinct high-fidelity UI design options rendered as live previews. The designer compares, selects, refines, and exports.

This is a real application, not a collection of design documents. We are building software.

**Team**: Two people. You direct, review, and make product decisions. I design, code, and implement.

**Location**: All project files live in `00-notes/01-app/`.

---

## Technical Architecture

```
00-notes/01-app/
├── packages/
│   ├── client/          React + TypeScript + Vite + Tailwind
│   └── server/          Node.js + Express + TypeScript
├── design-tokens.json   Shared token definitions
├── package.json         Workspace root
└── ...
```

### Frontend — `packages/client`
- **React + TypeScript** via Vite
- **Tailwind CSS** driven by design tokens
- **Zustand** for state management
- **Live preview renderer** that takes structured JSON layout trees and renders them as interactive UI previews in-browser

### Backend — `packages/server`
- **Node.js + Express + TypeScript**
- **Anthropic Claude API** for both sketch analysis (Opus) and option generation (Sonnet)
- **Local filesystem** storage for sketches and generated results
- **No auth** for MVP — single-user local app

### AI Pipeline
1. Designer uploads a sketch image
2. Claude Opus analyzes the sketch: identifies elements, hierarchy, grouping, intent patterns
3. The analysis feeds into 5 parallel Claude Sonnet calls, each with a different layout strategy prompt
4. Each call returns a structured JSON layout tree
5. The client renders each layout tree as a live preview

### Layout Schema
The AI returns structured JSON, not raw HTML. The client owns rendering. Each layout tree contains:
- Nested containers with layout properties (flex, grid, spacing)
- UI elements (text, images, buttons, inputs, cards, navigation)
- Style properties referencing design tokens
- Accessibility metadata (labels, roles, focus order)

---

## Milestones

### v0.5-alpha — MVP
**Goal**: One sketch in, five rendered options out.

- Upload sketch image (drag-and-drop, file picker)
- AI sketch analysis
- 5 parallel option generation with different strategies
- Side-by-side comparison view with live previews
- Full-screen view of any single option
- Strategy labels and confidence scores

### v0.8-beta
- Freehand drawing canvas (HTML5 Canvas)
- Design token configuration UI
- Export to PNG and HTML/CSS
- Generation progress with per-strategy status
- History of past generations

### v1.0
- Refinement editor (select an option, adjust, regenerate)
- Export to SVG and React components
- Multi-platform generation (web, iOS, Android)
- Onboarding flow
- Accessibility audit overlay

---

## Build Phases (v0.5-alpha)

### Phase 1: Project Scaffolding
Set up the monorepo, tooling, and dev environment so both packages build and run.

- npm workspaces with `packages/client` and `packages/server`
- Vite + React + TypeScript + Tailwind for client
- Express + TypeScript for server
- Shared TypeScript types in a common location
- `design-tokens.json` at the root, consumed by Tailwind config
- Dev script that runs both client and server concurrently
- ESLint + Prettier

### Phase 2: Sketch Upload
The input side — get an image from the user to the server.

- Drag-and-drop upload zone with image preview
- `POST /api/sketches` endpoint — validates, stores, returns sketch ID
- File type validation (JPEG, PNG), size limits
- Client displays the uploaded sketch and a "Generate" button

### Phase 3: AI Sketch Analysis
Send the uploaded sketch to Claude and get back a structured understanding of it.

- Anthropic SDK integration on the server
- System prompt for sketch interpretation (elements, hierarchy, grouping, intent)
- `POST /api/sketches/:id/analyze` — sends image to Claude Opus, returns structured analysis JSON
- Analysis result stored alongside the sketch
- Client displays analysis summary (element count, detected patterns)

### Phase 4: Option Generation
The core — five parallel AI calls producing five layout trees.

- 5 layout strategy definitions (Faithful, Grid, Editorial, Minimal, Dense)
- Per-strategy prompt templates
- `POST /api/sketches/:id/generate` — fires 5 parallel Sonnet calls
- Each returns a structured JSON layout tree conforming to the layout schema
- SSE endpoint for real-time progress (which strategies have completed)
- Results stored per sketch

### Phase 5: Preview Renderer
The component that turns a JSON layout tree into a live, interactive UI preview.

- React component that recursively renders the layout tree
- Maps layout nodes to styled HTML elements
- Applies design tokens for colors, typography, spacing, radii
- Renders inside a contained frame (iframe or CSS containment) at target resolution
- Handles all element types: containers, text, images, buttons, inputs, cards, nav

### Phase 6: Results Comparison UI
The output side — showing all 5 options and letting the designer compare them.

- 5-up grid layout with thumbnail previews
- Click any option to view full-screen with the preview renderer
- Strategy label and confidence score on each card
- Key interpretation annotations per option
- Works on desktop (side-by-side) and tablet (scroll)

---

## Decisions Log

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | Monorepo with `packages/client` + `packages/server` | Clean separation, shared types, single dev command |
| 2 | Claude Opus for sketch analysis, Sonnet for generation | Opus for accuracy on the hard part, Sonnet for speed on the parallel part |
| 3 | Structured JSON layout trees, rendered in-app | App owns rendering — consistent previews, not raw HTML comparison |
| 4 | Code lives in `00-notes/01-app/` | Per project conventions |
