# SketchSpark — Information Architecture

## Site Map

```
SketchSpark
├── Home / Dashboard
│   ├── Recent Projects
│   ├── Recent Sketches
│   └── Quick Start (new sketch)
│
├── Project
│   ├── Sketch Input
│   │   ├── Upload (photo / image)
│   │   ├── Draw (freehand canvas)
│   │   └── Import (Figma / Sketch / SVG / PNG)
│   │
│   ├── Generation Progress
│   │   ├── Progress Indicator
│   │   ├── Cancel
│   │   └── "What's Happening" Explainer
│   │
│   ├── Results Comparison
│   │   ├── Option Cards (1–5)
│   │   │   ├── Full Mockup Preview
│   │   │   ├── Confidence Score
│   │   │   ├── Strategy Label
│   │   │   └── Interpretation Annotations
│   │   ├── Side-by-Side View
│   │   ├── Overlay Diff View
│   │   ├── Regenerate Single Option
│   │   └── Select Option → Refinement
│   │
│   ├── Refinement Editor
│   │   ├── Direct Manipulation (move, resize, reorder)
│   │   ├── AI Regeneration (subsection or full)
│   │   ├── Token Application Panel
│   │   └── Accessibility Check Panel
│   │
│   ├── Export
│   │   ├── Figma
│   │   ├── Sketch
│   │   ├── SVG
│   │   ├── PNG
│   │   ├── HTML/CSS
│   │   └── React Components
│   │
│   └── History
│       ├── Version Timeline
│       ├── Browse Versions
│       ├── Restore Version
│       └── Branch from Version
│
├── Settings
│   ├── Project Settings
│   │   ├── Platform Target (Web / iOS / Android)
│   │   ├── Design Tokens Configuration
│   │   └── Default Generation Parameters
│   ├── Team Settings
│   │   ├── Members
│   │   └── Shared Preferences
│   └── Account Settings
│       ├── Profile
│       └── API Keys
│
└── Onboarding (first-run)
    ├── Step 1: Upload a Sketch
    ├── Step 2: Review Generated Options
    └── Step 3: Refine and Export
```

## Navigation Model

### Primary Navigation (persistent sidebar)
- Dashboard
- Current Project (contextual)
- Settings

### Project Navigation (horizontal tabs within project)
- Input → Generate → Compare → Refine → Export

This follows a linear workflow with the ability to jump back to any step. The History view is accessible from any project screen via a timeline toggle.

## Content Hierarchy

1. **Projects** are the top-level container
2. Each project has **settings** (platform, tokens) and **sketches**
3. Each sketch produces a **generation** (1–5 options)
4. Each generation can lead to **refinements** (iterative)
5. Any state can be **exported** as a deliverable

## Data Objects

| Object | Contains | Relationships |
|--------|----------|---------------|
| Project | Name, platform, tokens, settings | Has many Sketches |
| Sketch | Source image, input method, metadata | Belongs to Project, has many Generations |
| Generation | 1–5 Options, timestamp, parameters | Belongs to Sketch |
| Option | Mockup, confidence, strategy, annotations | Belongs to Generation |
| Refinement | Modified option, adjustment history | Belongs to Option |
| Export | Output file(s), format, timestamp | Belongs to Option or Refinement |
