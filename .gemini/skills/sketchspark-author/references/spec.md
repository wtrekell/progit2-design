# SketchSpark — Product Specification

## What Is SketchSpark?

SketchSpark is an AI-powered rapid prototyping application that turns rough sketches into polished UI designs. A designer provides a single input — a napkin wireframe, a whiteboard photo, a tablet drawing, or a simple digital sketch — and SketchSpark generates up to five distinct, high-fidelity UI options in parallel. The designer reviews, compares, selects a direction, and refines it iteratively until the design is ready for development handoff.

---

## The Problem

The gap between idea and testable prototype is the slowest part of the design process. A designer has a concept — maybe sketched on paper during a meeting, maybe roughed out on a tablet on the train home — and turning that into something a team can evaluate takes hours or days. Wireframing tools require manual construction of every element. High-fidelity mockup tools demand pixel-level precision before anything looks real enough to test.

Meanwhile, the best design decisions come from comparing options. Research consistently shows that teams who evaluate multiple directions produce stronger outcomes than teams who refine a single idea. But generating multiple polished directions multiplies the time cost — so in practice, most teams explore one direction and hope it's the right one.

SketchSpark eliminates this tradeoff.

---

## Core Interaction Model

### Input
The designer provides a rough sketch through one of three input methods:

1. **Upload**: Photograph of a hand-drawn sketch (napkin, whiteboard, notebook), uploaded as JPEG or PNG
2. **Draw**: Freehand sketch drawn directly in the SketchSpark canvas using a mouse, trackpad, or stylus
3. **Import**: Existing low-fidelity wireframe imported from Figma, Sketch, or as SVG/PNG

The sketch does not need to be precise. SketchSpark interprets intent: a rectangle becomes a card, a circle becomes an avatar, a squiggle with lines becomes a text block, an arrow becomes navigation. The AI model is trained to read rough spatial relationships and structural patterns, not pixel-perfect drawings.

### Processing
SketchSpark analyzes the sketch and generates up to five UI interpretations simultaneously. Each option:

- Applies a different layout strategy (grid, list, asymmetric, card-based, editorial)
- Respects the spatial relationships in the original sketch
- Uses the project's design tokens (colors, typography, spacing) if configured
- Follows platform conventions (iOS, Android, or web) based on project settings
- Meets WCAG AA accessibility standards by default (contrast, touch targets, font sizes)

Generation takes 15–45 seconds depending on sketch complexity and selected platform.

### Output
The results screen presents all generated options in a side-by-side comparison view. For each option, the designer sees:

- A full-fidelity screen mockup at the target resolution
- A confidence score (how closely the option matches the sketch's intent)
- Layout strategy label (e.g., "Card Grid," "Editorial Stack," "Split Panel")
- Quick annotations highlighting key interpretation decisions

The designer can:

- **Select** an option to use as the starting point for refinement
- **Compare** two options in an overlay diff view (superimposed at 50% opacity)
- **Regenerate** a single option with adjusted parameters (e.g., "more whitespace," "larger typography")
- **Refine** the selected option in an integrated editor with AI-assisted adjustments
- **Export** any option as Figma file, SVG, PNG, or development-ready code (HTML/CSS or React components)

### Iteration
After selecting a direction, the designer enters the refinement loop:

1. Adjust the selected design (move elements, change hierarchy, update content)
2. Ask SketchSpark to regenerate variations of the adjusted design
3. Compare, select, adjust again
4. Repeat until satisfied

Each iteration takes seconds, not hours. The designer maintains creative control — SketchSpark generates options, the designer makes decisions.

---

## Product Architecture

### Core Screens

| Screen | Purpose | Key Interactions |
|--------|---------|------------------|
| **Home / Dashboard** | Project list, recent sketches, quick-start | Create new project, open recent, view history |
| **Sketch Input** | Upload, draw, or import the source sketch | Drag-and-drop upload, freehand canvas, file picker, Figma import |
| **Generation Progress** | Loading state during AI processing | Progress indicator, cancel button, "What's happening" explainer |
| **Results Comparison** | Side-by-side view of 5 generated options | Select, compare overlay, regenerate single, expand detail |
| **Refinement Editor** | Edit selected option with AI assistance | Direct manipulation, AI regeneration of subsections, token application |
| **Export** | Output to design tools or development formats | Figma, Sketch, SVG, PNG, HTML/CSS, React components |
| **History** | Version timeline of all generations and refinements | Browse, restore, branch from any point |
| **Settings** | Project configuration | Platform target, design tokens, team preferences, API keys |
| **Onboarding** | First-run experience for new users | 3-step tutorial: upload → generate → refine |

### Platform Targets
SketchSpark generates designs for three platforms:

- **Web** (responsive: desktop 1440px, tablet 768px, mobile 375px)
- **iOS** (iPhone 15 Pro, iPad Pro)
- **Android** (Pixel 8, Galaxy Tab)

Platform selection affects layout conventions, navigation patterns, typography scales, and touch target sizes. A single sketch can generate options for multiple platforms simultaneously.

### Design Token Integration
Projects can define design tokens (via `design-tokens.json`) that constrain generation:

```json
{
  "colors": {
    "primary": "#2563EB",
    "secondary": "#7C3AED",
    "surface": "#FFFFFF",
    "on-surface": "#1E293B",
    "error": "#DC2626",
    "success": "#16A34A"
  },
  "typography": {
    "heading-1": { "family": "Inter", "weight": 700, "size": "32px", "line-height": 1.2 },
    "heading-2": { "family": "Inter", "weight": 600, "size": "24px", "line-height": 1.3 },
    "body": { "family": "Inter", "weight": 400, "size": "16px", "line-height": 1.5 },
    "caption": { "family": "Inter", "weight": 400, "size": "12px", "line-height": 1.4 }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px"
  },
  "border-radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "full": "9999px"
  }
}
```

When tokens are configured, all generated options use them — ensuring brand consistency across every variation. When tokens are absent, SketchSpark applies sensible defaults.

---

## AI Generation Pipeline

### Sketch Interpretation
The input sketch passes through a vision model that identifies:

- **Elements**: rectangles (cards, containers), circles (avatars, icons), lines (dividers, borders), text blocks, arrows (navigation, flow), images (placeholders)
- **Hierarchy**: relative size indicates importance; vertical position indicates reading order
- **Grouping**: proximity and alignment suggest related elements
- **Intent patterns**: recognized UI conventions (tab bar, header, list, form, modal)

### Option Generation
Each of the five options is generated by the same base model with different layout strategy parameters:

| Option | Strategy | Characteristics |
|--------|----------|-----------------|
| Option 1 | **Faithful** | Closest interpretation of the sketch's literal layout |
| Option 2 | **Grid** | Elements reorganized into a structured grid system |
| Option 3 | **Editorial** | Asymmetric, magazine-style layout with visual hierarchy emphasis |
| Option 4 | **Minimal** | Maximum whitespace, reduced elements, focus on core content |
| Option 5 | **Dense** | Information-rich, compact layout maximizing content density |

The strategies are configurable. Teams can replace defaults or add custom strategies via prompt templates (`prompts/sketch-to-ui.txt`, `prompts/mobile-layout.txt`).

### Prompt Templates
The generation pipeline uses text-based prompt templates that define how the model interprets and renders sketches:

```
# prompts/sketch-to-ui.txt
# Core generation prompt for SketchSpark

## System Context
You are a UI design generator. Given a sketch analysis (element positions,
hierarchy, grouping, intent patterns), generate a high-fidelity UI mockup.

## Constraints
- Apply design tokens if provided; use system defaults otherwise
- Meet WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text)
- Touch targets minimum 44x44px for mobile, 24x24px for web
- Respect platform conventions for navigation, typography, and spacing

## Layout Strategy: {strategy_name}
{strategy_description}

## Output
Render as structured layout definition with element positions, styles,
and content. Include accessibility labels for all interactive elements.
```

These templates are plain text files — fully version-controllable, diffable, and improvable via pull requests (as Marcus demonstrates in Chapter 6).

### Accessibility
Every generated option includes:

- WCAG AA contrast compliance (checked automatically, violations flagged)
- Semantic structure (headings, landmarks, reading order)
- Touch target sizing per platform guidelines
- Alt text suggestions for image placeholders
- Focus order and keyboard navigation hints

An optional post-generation accessibility audit (`prompts/accessibility-check.txt`) runs a second pass and annotates the design with specific compliance notes.

### Model Configuration
The AI model's behavior is controlled through `model-params.yaml`:

```yaml
model:
  version: "sketchspark-v3.2"
  inference:
    temperature: 0.7          # Higher = more creative variation between options
    max_tokens: 8192
    timeout_seconds: 45
  generation:
    num_options: 5             # 1-5 parallel options
    min_confidence: 0.6        # Don't show options below this confidence
    platform: "web"            # web | ios | android
    responsive_breakpoints:
      - 1440
      - 768
      - 375
  quality:
    accessibility_level: "AA"  # AA | AAA
    contrast_check: true
    touch_target_check: true
```

This file is structured YAML — Git can diff it, hooks can validate it, and changes are traceable through commit history.

---

## User Roles and Workflows

### Solo Designer (Freelancer)
- Uploads client sketches, generates options, presents 3–5 directions to the client
- Uses SketchSpark to compress the "sketch to mockup" phase from 2 days to 2 hours
- Exports directly to Figma for final polish and handoff

### Design Team (3–8 people)
- Shared project with design tokens enforcing brand consistency
- Multiple designers generate options for different screens simultaneously
- Results comparison view used in team critiques — "let's look at everyone's options for the checkout flow"
- History view tracks who generated what and which directions were chosen

### Design-Engineering Handoff
- Selected designs export as development-ready code (HTML/CSS or React components)
- Design tokens ensure generated code uses the same spacing, colors, and typography as the design
- Engineers consume tokens from `design-tokens.json` in their build system
- Version history provides context: "why does this screen look this way?" → trace back to the original sketch and the option selection decision

---

## Technical Stack (for repository context)

| Layer | Technology | Repository Artifacts |
|-------|-----------|---------------------|
| Frontend | React + TypeScript | `src/` (not in design repo) |
| Design | Figma (source), PNG/SVG (exports) | `screens/`, `illustrations/`, `icons/` |
| AI Pipeline | Python + PyTorch | `pipeline/`, `model-params.yaml`, `prompts/` |
| Design Tokens | JSON (consumed by both design and engineering) | `design-tokens.json` |
| Documentation | Markdown | `docs/`, `product-brief.md`, `research/` |
| CI/CD | GitHub Actions | `.github/workflows/` |

The design repository (the one tracked in the book's storyline) contains everything except the frontend source code. This is intentional — the repo is a designer's workspace, not an engineering monorepo.

---

## Product Milestones (as referenced in the storyline)

| Tag | Milestone | What's Working |
|-----|-----------|----------------|
| `v0.1-concept` | Concept approved | Product brief, personas, competitive analysis, initial user flows, wireframes |
| `v0.5-alpha` | Internal alpha | End-to-end pipeline: upload sketch → generate 5 options → view comparison. Single platform (web). Default tokens only. |
| `v0.8-beta` | Public beta | All three input methods. Web + iOS platforms. Design token integration. Export to Figma and PNG. Onboarding flow. GitHub public repo. |
| `v1.0` | Public launch | All platforms. Refinement editor. Code export. Accessibility audit. Team collaboration features. Mobile prompt improvements (Marcus's contribution). QuickMock migration complete. |

---

## Competitive Landscape

| Competitor | What It Does | How SketchSpark Differs |
|-----------|-------------|------------------------|
| **Figma** | Collaborative design tool | Figma is the canvas; SketchSpark is the idea accelerator. Exports *to* Figma. |
| **Uizard** | AI screen generation from text prompts | Text-to-UI vs. sketch-to-UI. SketchSpark preserves the designer's spatial intent. |
| **Galileo AI** | AI UI generation from text descriptions | Similar AI approach but text-driven. SketchSpark starts from visual input. |
| **Framer** | Design + publish tool with AI features | Framer focuses on shipping websites. SketchSpark focuses on the exploration phase. |
| **Midjourney / DALL-E** | General image generation | Produces images, not structured UI. Can't export to Figma or generate code. No accessibility checking. |

SketchSpark's differentiator: **parallel options from spatial input**. The designer's sketch encodes intent that text prompts can't — relative sizing, spatial grouping, reading order. Five options from one sketch means the designer explores more of the solution space in less time than any competitor allows.

---

## Why This Product Works as a Book Example

SketchSpark is designed to serve double duty as a compelling product *and* an effective Git teaching vehicle:

1. **Parallel generation mirrors branching.** Five options from one sketch is the same mental model as five branches from one commit. The product's core concept reinforces Git's most important feature.

2. **Full design lifecycle.** Research → concept → exploration → build → beta → launch → scale. Every phase produces different artifact types (text, binary, structured config) that teach different Git workflows.

3. **Mixed file types.** Research briefs (merge-friendly markdown), screen mockups (binary Figma exports), AI prompts (diffable text), illustrations (large binary PNGs), tokens (structured JSON). This variety naturally teaches Git's strengths and limitations.

4. **Team growth.** Solo (Ch1–2) → pair (Ch3) → small team (Ch5) → open source (Ch6). Each growth stage demands the exact Git workflow that chapter teaches.

5. **AI pipeline.** Model configs, prompt templates, and training manifests are text files that benefit from version control, validation hooks, and code review — making chapters on hooks, attributes, and collaboration feel immediately relevant rather than abstract.

6. **Real product decisions.** "Should we use card layout or list layout?" is a design decision readers can visualize. It's more engaging than "should we use tabs or spaces?" — and it naturally becomes a branch, a PR, and a merge.
