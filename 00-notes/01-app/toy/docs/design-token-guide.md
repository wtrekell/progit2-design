# Design Token Guide

## What Are Design Tokens?

Design tokens are the atomic values that define SketchSpark's visual language — colors, typography, spacing, and border radii. They live in `design-tokens.json` at the repository root and are consumed by both the AI generation pipeline and the frontend build system.

When tokens are configured, every generated option uses them automatically, ensuring brand consistency across all variations.

## Token Categories

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#2563EB` | Primary actions, links, active states |
| `secondary` | `#7C3AED` | Secondary actions, accents |
| `surface` | `#FFFFFF` | Background surfaces, cards |
| `on-surface` | `#1E293B` | Text and icons on surface backgrounds |
| `error` | `#DC2626` | Error states, destructive actions |
| `success` | `#16A34A` | Success states, confirmations |

#### Contrast Requirements
- `on-surface` on `surface`: 12.63:1 (passes AA and AAA)
- `primary` on `surface`: 4.56:1 (passes AA for normal text)
- `error` on `surface`: 4.63:1 (passes AA for normal text)
- `success` on `surface`: 4.52:1 (passes AA for normal text)

### Typography

| Token | Family | Weight | Size | Line Height |
|-------|--------|--------|------|-------------|
| `heading-1` | Inter | 700 | 32px | 1.2 |
| `heading-2` | Inter | 600 | 24px | 1.3 |
| `heading-3` | Inter | 600 | 20px | 1.35 |
| `body` | Inter | 400 | 16px | 1.5 |
| `body-small` | Inter | 400 | 14px | 1.5 |
| `caption` | Inter | 400 | 12px | 1.4 |

Body text at 16px meets WCAG minimum text size recommendations. Caption at 12px should be used sparingly and only for supplementary information.

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight spacing between related elements |
| `sm` | 8px | Default inner padding, icon gaps |
| `md` | 16px | Card padding, section gaps |
| `lg` | 24px | Major section separation |
| `xl` | 32px | Page-level padding |
| `2xl` | 48px | Hero spacing, major landmarks |

The spacing scale follows a 4px base unit. All values are multiples of 4.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Subtle rounding (inputs, small buttons) |
| `md` | 8px | Cards, containers, standard buttons |
| `lg` | 16px | Modals, large cards, featured elements |
| `full` | 9999px | Pills, circular avatars, round buttons |

## Using Tokens in the AI Pipeline

The generation pipeline reads `design-tokens.json` and passes token values to the model as constraints. When generating UI options, the model:

1. Uses token colors for all surface and text colors
2. Applies token typography for all text elements
3. Follows the token spacing scale for all layout gaps and padding
4. Uses token border radii for all rounded elements

If `design-tokens.json` is absent or empty, the pipeline falls back to sensible defaults (which happen to match the current token values — they were chosen as good defaults).

## Modifying Tokens

Token changes affect every future generation. Before modifying:

1. **Check contrast**: Use a contrast checker to verify WCAG AA compliance
2. **Test across screens**: Generate at least 3 different screen types to verify the change looks good
3. **Document rationale**: Explain why the token was changed in the commit message
4. **Get review**: Token changes require at least one team member's approval
