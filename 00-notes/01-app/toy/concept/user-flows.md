# SketchSpark — User Flows

## Flow 1: New Sketch to Export (Happy Path)

```
[Dashboard] → [+ New Sketch]
    │
    ▼
[Sketch Input]
    ├── Upload photo ──────────┐
    ├── Draw in canvas ────────┤
    └── Import file ───────────┘
                               │
                               ▼
                    [Generation Progress]
                     15–45 seconds
                               │
                               ▼
                    [Results Comparison]
                     5 options displayed
                               │
                    ┌──────────┼──────────┐
                    │          │          │
                    ▼          ▼          ▼
              [Compare]  [Select]   [Regenerate]
              overlay    option     single option
              diff view     │       with new params
                           │          │
                           ▼          │
                    [Refinement]◄─────┘
                     adjust + regenerate
                     (iterate as needed)
                               │
                               ▼
                         [Export]
                     Figma / SVG / PNG /
                     HTML-CSS / React
```

## Flow 2: Upload Photo Sketch

```
[Sketch Input] → [Upload Area]
    │
    ├── Drag and drop image
    ├── Click to browse files
    └── Paste from clipboard
    │
    ▼
[Preview + Confirm]
    ├── Crop / rotate if needed
    ├── Adjust contrast (for low-quality photos)
    └── [Generate] button
    │
    ▼
[Generation Progress]
```

## Flow 3: Freehand Draw

```
[Sketch Input] → [Canvas Mode]
    │
    ├── Pen tool (freehand)
    ├── Shape tools (rectangle, circle, line)
    ├── Text tool (label areas)
    ├── Eraser
    └── Undo / Redo
    │
    ▼
[Canvas with sketch]
    └── [Generate from Canvas] button
    │
    ▼
[Generation Progress]
```

## Flow 4: Compare Two Options

```
[Results Comparison] → Select two options
    │
    ▼
[Overlay Diff View]
    ├── Option A at 50% opacity over Option B
    ├── Swipe slider to reveal A vs B
    ├── Toggle annotations on/off
    └── [Select A] or [Select B] or [Back to All]
```

## Flow 5: Refinement Loop

```
[Refinement Editor]
    │
    ├── Move / resize elements
    ├── Change hierarchy (promote, demote)
    ├── Update placeholder content
    ├── Apply different token values
    │
    ▼
[Regenerate from Refinement]
    ├── Full regeneration (5 new options from modified design)
    └── Partial regeneration (regenerate selected section only)
    │
    ▼
[Results Comparison] → [Select] → [Refine again] or [Export]
```

## Flow 6: Design Token Application

```
[Settings] → [Design Tokens]
    │
    ├── Upload design-tokens.json
    ├── Or configure tokens manually:
    │   ├── Colors (primary, secondary, surface, error, success)
    │   ├── Typography (heading, body, caption families + sizes)
    │   ├── Spacing scale (xs through 2xl)
    │   └── Border radius (sm, md, lg, full)
    │
    ▼
[Tokens Applied]
    └── All subsequent generations use these tokens
```

## Flow 7: Onboarding (First Run)

```
[Welcome Screen]
    │
    ▼
[Step 1: Upload a Sketch]
    ├── Sample sketch provided
    └── Or use your own
    │
    ▼
[Step 2: See Your Options]
    ├── 5 options generated from sample
    └── Guided tour of comparison features
    │
    ▼
[Step 3: Refine and Export]
    ├── Make one adjustment
    ├── See regeneration
    └── Export one option
    │
    ▼
[Dashboard] — onboarding complete
```

## Error Flows

### Sketch Too Simple
```
[Generation] → AI confidence below threshold for all options
    │
    ▼
[Guidance Screen]
    ├── "Your sketch needs more detail for SketchSpark to interpret"
    ├── Highlight areas that need clarification
    └── [Edit Sketch] or [Try Anyway]
```

### Generation Timeout
```
[Generation Progress] → 45 second timeout reached
    │
    ▼
[Partial Results]
    ├── Show any options that completed
    ├── "X of 5 options generated"
    └── [Retry Remaining] or [Continue with Available]
```
