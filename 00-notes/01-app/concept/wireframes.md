# SketchSpark — Wireframes

> Note: These wireframes are text-based representations of the initial concept layouts.
> Production wireframes are maintained in Figma (linked from each screen's directory).

## Home / Dashboard

```
┌─────────────────────────────────────────────────────────┐
│  SketchSpark                          [Avatar] [Settings]│
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│  ◉ Home  │  Good morning, Nora                         │
│          │                                              │
│  Recent  │  ┌─────────────────────────────────────────┐ │
│          │  │         + New Sketch                     │ │
│  Projects│  │   Upload, draw, or import to start      │ │
│          │  └─────────────────────────────────────────┘ │
│  Settings│                                              │
│          │  Recent Projects                             │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│          │  │ Checkout │ │ Profile  │ │ Onboard  │    │
│          │  │ Flow     │ │ Screen   │ │ Wizard   │    │
│          │  │ v3 · 2hr │ │ v1 · 1d │ │ v5 · 3hr │    │
│          │  └──────────┘ └──────────┘ └──────────┘    │
│          │                                              │
│          │  Recent Sketches                             │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│          │  │ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │    │
│          │  │ ░sketch░ │ │ ░sketch░ │ │ ░sketch░ │    │
│          │  │ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │    │
│          │  └──────────┘ └──────────┘ └──────────┘    │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

## Sketch Input

```
┌─────────────────────────────────────────────────────────┐
│  SketchSpark  ›  Checkout Flow         [Avatar] [Settings]│
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│  ◉ Input │  ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐  │
│  ○ Gen   │  │                                       │  │
│  ○ Comp  │          Drop sketch here                │  │
│  ○ Refine│  │       or click to browse              │  │
│  ○ Export│  │                                       │  │
│          │  │   [Upload]  [Draw]  [Import]          │  │
│          │  │                                       │  │
│          │  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘  │
│          │                                              │
│          │  Platform: [Web ▾]                           │
│          │  Tokens:   [design-tokens.json ✓]            │
│          │                                              │
│          │                          [Generate Options →] │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

## Results Comparison

```
┌─────────────────────────────────────────────────────────┐
│  SketchSpark  ›  Checkout Flow         [Avatar] [Settings]│
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│  ○ Input │  5 options generated · 23 seconds            │
│  ○ Gen   │                                              │
│  ◉ Comp  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  │
│  ○ Refine│  │     │ │     │ │     │ │     │ │     │  │
│  ○ Export│  │  1  │ │  2  │ │  3  │ │  4  │ │  5  │  │
│          │  │     │ │     │ │     │ │     │ │     │  │
│          │  │Faith│ │Grid │ │Edtrl│ │Minml│ │Dense│  │
│          │  │ful  │ │     │ │     │ │     │ │     │  │
│          │  │     │ │     │ │     │ │     │ │     │  │
│          │  │ 94% │ │ 87% │ │ 82% │ │ 79% │ │ 85% │  │
│          │  └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘  │
│          │     │       │       │       │       │      │
│          │  [Select] [Select] [Select] [Select] [Select]│
│          │                                              │
│          │  [Compare Two ↔]  [Regenerate ↻]            │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

## Refinement Editor

```
┌─────────────────────────────────────────────────────────┐
│  SketchSpark  ›  Checkout Flow         [Avatar] [Settings]│
├──────────┬──────────────────────────────┬───────────────┤
│          │                              │               │
│  ○ Input │  ┌──────────────────────┐    │  Properties   │
│  ○ Gen   │  │                      │    │               │
│  ○ Comp  │  │   Selected Design    │    │  Element:     │
│  ◉ Refine│  │   (interactive       │    │  Card         │
│  ○ Export│  │    canvas with       │    │               │
│          │  │    moveable          │    │  W: 320px     │
│          │  │    elements)         │    │  H: auto      │
│          │  │                      │    │  Padding: lg  │
│          │  │                      │    │  Radius: md   │
│          │  │                      │    │               │
│          │  └──────────────────────┘    │  Tokens:      │
│          │                              │  ☑ Enforce    │
│          │  [↻ Regenerate Section]      │               │
│          │  [↻ Regenerate Full]         │  Accessibility│
│          │  [→ Export]                  │  ✓ AA Pass    │
│          │                              │               │
└──────────┴──────────────────────────────┴───────────────┘
```

## Export

```
┌─────────────────────────────────────────────────────────┐
│  SketchSpark  ›  Checkout Flow         [Avatar] [Settings]│
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│  ○ Input │  Export Design                               │
│  ○ Gen   │                                              │
│  ○ Comp  │  Format:                                     │
│  ○ Refine│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  ◉ Export│  │  Figma   │ │   SVG    │ │   PNG    │    │
│          │  └──────────┘ └──────────┘ └──────────┘    │
│          │  ┌──────────┐ ┌──────────┐                  │
│          │  │ HTML/CSS │ │  React   │                  │
│          │  └──────────┘ └──────────┘                  │
│          │                                              │
│          │  Options:                                    │
│          │  ☑ Include accessibility annotations         │
│          │  ☑ Use design token references               │
│          │  ☐ Include responsive variants               │
│          │                                              │
│          │                            [Download Export]  │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```
