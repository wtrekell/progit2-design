# Getting Started with SketchSpark

## Overview

SketchSpark turns rough sketches into polished UI designs. This guide walks you through the design repository — where assets live, how they're organized, and how to contribute.

## Repository Structure

```
sketchspark/
├── product-brief.md          # Product vision and milestones
├── design-tokens.json        # Colors, typography, spacing, radii
├── CONTRIBUTING.md            # Contribution guidelines
│
├── research/                  # Discovery and validation
│   ├── personas.md            # User personas (Maya, David, Raj)
│   ├── competitive-analysis.md # Market landscape
│   └── interview-notes.md    # User interview findings
│
├── concept/                   # Information design
│   ├── information-architecture.md  # Site map and navigation
│   ├── user-flows.md         # Interaction flows (7 core flows)
│   └── wireframes.md         # Text-based wireframe specs
│
├── screens/                   # Production mockup exports (PNG)
│   ├── home/
│   ├── sketch-input/
│   ├── generation-progress/
│   ├── results-comparison/
│   ├── refinement-editor/
│   ├── export/
│   ├── history/
│   ├── settings/
│   └── onboarding/
│
├── illustrations/             # Custom artwork (onboarding, marketing)
├── icons/                     # SVG icon set (24x24 base grid)
│
├── pipeline/                  # AI generation configuration
│   ├── model-params.yaml      # Model version, inference settings
│   ├── prompts/               # Text prompt templates
│   │   ├── sketch-to-ui.txt   # Core generation prompt
│   │   ├── mobile-layout.txt  # Mobile adaptation prompt
│   │   └── accessibility-check.txt  # Post-generation a11y audit
│   └── training-data-manifest.json  # Training dataset registry
│
└── docs/                      # Documentation
    ├── getting-started.md     # This file
    └── design-token-guide.md  # Token usage reference
```

## Key Files

### design-tokens.json
The single source of truth for visual design values. Both the AI pipeline and the engineering team consume this file. Changes here affect all generated output.

### pipeline/model-params.yaml
Controls how the AI model generates options — temperature, number of options, platform target, accessibility level. This is the primary tuning surface for generation quality.

### pipeline/prompts/
Plain text templates that shape AI output. These are version-controlled and diffable — changes can be reviewed and discussed in pull requests just like any other text file.

## Adding Screen Exports

1. Export from Figma at 2x resolution as PNG
2. Place in the appropriate `screens/{screen-name}/` directory
3. Use descriptive filenames: `{screen}-{state}-{platform}.png`
4. Commit with a message describing what changed in the design

## Modifying Design Tokens

1. Edit `design-tokens.json`
2. Verify contrast ratios meet WCAG AA (4.5:1 for body text)
3. Provide before/after screenshots showing the impact
4. Submit as a pull request for team review
