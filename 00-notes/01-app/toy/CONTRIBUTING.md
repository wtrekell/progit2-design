# Contributing to SketchSpark

Thank you for your interest in contributing to SketchSpark! This document covers the guidelines for contributing to the design repository.

## What Lives Here

This repository contains SketchSpark's design assets and AI pipeline configuration — not the frontend source code. Contributions typically involve:

- **Research documents** (personas, interview notes, competitive analysis)
- **Concept work** (information architecture, user flows, wireframes)
- **Screen designs** (Figma exports as PNG, organized by screen)
- **Illustrations** (onboarding graphics, marketing assets)
- **Icons** (SVG, navigation and action icons)
- **Design tokens** (`design-tokens.json`)
- **AI pipeline config** (model parameters, prompt templates, training manifests)
- **Documentation** (setup guides, design rationale)

## How to Contribute

### Small Corrections

Typo fixes, minor clarifications, and small improvements can be submitted directly as pull requests.

### Design Changes

For changes to screen designs, user flows, or information architecture:

1. Open an issue describing the proposed change and the reasoning behind it
2. Wait for discussion and approval before starting work
3. Submit a pull request referencing the issue

### Prompt Template Changes

Changes to AI prompt templates (`pipeline/prompts/`) affect generation output. These require:

1. An issue with before/after examples showing the impact
2. Review from at least one team member
3. Testing against the standard sketch set before merging

### Design Token Changes

Modifications to `design-tokens.json` affect all generated output. Token changes require:

1. An issue explaining the rationale
2. Visual examples of the impact across at least three screens
3. Accessibility validation (contrast ratios, font sizes)

## File Formats

- **Documents**: Markdown (`.md`)
- **Screen exports**: PNG at 2x resolution
- **Icons**: SVG, optimized, 24x24 base grid
- **Illustrations**: PNG at export resolution noted in filename
- **Design source**: Figma (linked, not committed)

## Commit Messages

Write clear, descriptive commit messages. Use the imperative mood:

- "Add checkout flow wireframes"
- "Update primary color token to improve contrast"
- "Fix touch target sizing in mobile prompt template"

## License

By contributing, you agree that your contributions will be licensed under the same terms as the project.
