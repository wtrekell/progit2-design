# Chapter 6: GitHub — UX Designer Revision Notes

## Overview
Chapter 6 covers GitHub account setup, contributing (forking, PRs), maintaining projects, organizations, and scripting/API. This is one of the most relevant chapters for designers since GitHub is their primary interaction point. However, examples use developer scenarios (Arduino blink project) and miss design-specific workflows.

---

## Section: Account Setup (`1-setting-up-account.asc`)

### Priority: MEDIUM

- Add SSH analogy: "Like a trusted device in Figma — once registered, no re-authentication needed"
- Expand email linking: "If you use studio and personal accounts, link both emails so GitHub tracks your total contribution history"
- Add 2FA context for design teams: "Prevents a compromised password from putting all your team's collaborative work at risk"

---

## Section: Contributing (`2-contributing.asc`)

### Priority: HIGH

**Forking (lines 5-26):**
- Replace historical baggage note with: "Forking is like duplicating a shared design file to your own workspace"

**GitHub Flow / Creating a PR (lines 29-195):**
- Replace Arduino blink example with design system contribution: "Maria wants to add a Tooltip component — she forks, branches, adds component files (SVG, CSS, tokens), commits, pushes, opens PR with light/dark mode screenshots"

**Iterating on a PR (lines 147-205):**
- Add: "You don't need changes to be 'perfect' before opening a PR. Opening early lets your team weigh in on direction."

**Keeping up with Upstream (lines 224-296):**
- Add design token sync scenario: "If the original design system updates token values, how do I sync my fork?"

**GitHub Flavored Markdown — Images (lines 476-486):**
- EXPAND this section: "Drag-and-drop images into PR comments for design reviews. Show before/after comparisons, highlight accessibility concerns with annotations, demonstrate responsive behavior."

**Keeping Forks in Sync (lines 488-548):**
- Add design system context for syncing fork with upstream

**Gaps:**
- No mention of GitHub's PR diff viewer limitations for binary files (PNGs, SVGs) — designers need to upload screenshots separately
- No guidance on branching strategy for design work
- Missing: how to link PRs to issues

---

## Section: Maintaining a Project (`3-maintaining.asc`)

### Priority: MEDIUM-HIGH

- Add design-specific CONTRIBUTING example: icon grid size, accessibility standards, design token naming convention, review criteria, link to Figma
- Expand README for design projects: screenshot/GIF of key components, link to design file, component-to-file mapping, accessibility matrix
- Add new subsection: "Branch Protection for Design Systems" — require PR reviews before merging to main
- Add versioning guidance: use Git tags for design system releases, document changes in CHANGELOG

---

## Section: Managing an Organization (`4-managing-organization.asc`)

### Priority: MEDIUM

- Add motivation: "If you're building a design system with 3+ contributors, an organization makes it easier to grant access to multiple repos and maintain consistent governance"
- Expand teams with design examples: `@core-designers` (read/write all), `@contributors` (specific repos), `@stakeholders` (read-only), `@a11y-reviewers` (mentioned for accessibility reviews)

---

## Section: Scripting GitHub (`5-scripting.asc`)

### Priority: MEDIUM

- Add design-relevant webhook example: "When someone opens a PR on your design system, automatically post to #design-reviews Slack channel"
- Add GitHub Actions context (successor to Services): "Actions let you validate icon sizes, generate component previews, or deploy documentation"
- Add design-specific validation example: "Check committed SVG files for missing `<title>` elements or poor contrast"
- Simplify API section for designers: "Most automation tasks are easier via GitHub Actions than manual API calls"

---

## Cross-Cutting Themes

1. **Design Tools Integration (missing entirely):** Storing design exports, linking to Figma, using GitHub Pages for design docs, automated sync
2. **Design Systems as Use Case:** Different workflows than software — visual review, asset naming, documentation priority, versioning
3. **Asynchronous Collaboration:** "Unlike Figma's real-time collaboration, GitHub is async. Write clear PR descriptions with context, include screenshots, expect 24-48 hours for feedback."
4. **Visual Workflows:** Current examples (Arduino blink) don't resonate — need design system PR with component screenshots
5. **GitHub Pages:** Not mentioned but critical for hosting design system documentation
6. **Access Control:** Need role-based explanation (viewer, contributor, maintainer) with design team mapping
