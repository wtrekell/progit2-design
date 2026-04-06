# Screens

Production UI mockup exports organized by screen. Source designs are maintained in Figma.

## Directory Structure

Each subdirectory corresponds to a core screen in the application:

- `home/` — Dashboard with project list, recent sketches, quick-start
- `sketch-input/` — Upload, draw, and import interfaces
- `generation-progress/` — Loading state during AI processing
- `results-comparison/` — Side-by-side view of 5 generated options
- `refinement-editor/` — Interactive design editor with AI assistance
- `export/` — Export format selection and download
- `history/` — Version timeline browser
- `settings/` — Project and team configuration
- `onboarding/` — First-run tutorial experience

## Conventions

- Export at 2x resolution (PNG)
- Name files descriptively: `home-dashboard-empty-state.png`, `results-comparison-5-options.png`
- Include all states: default, hover, active, empty, error, loading
- Platform variants use suffix: `-web.png`, `-ios.png`, `-android.png`
