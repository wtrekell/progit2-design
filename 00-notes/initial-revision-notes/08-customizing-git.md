# Chapter 8: Customizing Git — UX Designer Revision Notes

## Overview
Chapter 8 covers Git configuration, attributes, hooks, and policy enforcement. Several sections have high relevance for design workflows (binary file handling, commit templates, hooks for validation) but are framed entirely for developers.

---

## Section: Git Configuration (`config.asc`)

### Priority: MEDIUM

**Keep/Expand:**
- External merge/diff tools (P4Merge) — visual comparison is intuitive for designers
- Commit templates — reframe for design workflows
- Color configuration — designers naturally understand terminal colors

**Cut/Minimize:**
- `core.autocrlf` and `core.whitespace` — irrelevant to designers shipping design files
- Server-side config — designers don't administer servers

**Revision Suggestions:**
- Expand diff tools with design token file diffs (JSON/YAML with colors, typography)
- Replace commit template `[Ticket: X]` with: `[Component: Button/Primary]` or `[Design System: v2.1]`
- Add new subsection: "Git Config for Design Workflows" — aliases for design-file diffs, ignoring cache files

---

## Section: Git Attributes (`attributes.asc`)

### Priority: HIGH

**High Relevance for Designers:**
- Binary file handling — designers work with binary files constantly (PNG, SVG, Sketch)
- Image diffing with EXIF — designers understand metadata
- Export-ignore — directly applicable: "Exclude design source files from exports but version them in Git"

**Cut/Replace:**
- C code indentation filter — replace with design-relevant filter (SVG optimization or token transformation)
- Complex Ruby keyword expansion — simplify or replace with design metadata injection

**Revision Suggestions:**
- Expand binary file identification with design-specific examples: `.sketch`, `.xd`, `.psd`, Figma JSON
- Include a `.gitattributes` template for design repos
- Replace C indent with: "Design token transformation filter — convert JSON to CSS variables on checkout"
- Emphasize export-ignore: "Keep .sketch files in Git but export clean SVG/PNG without source clutter"
- Add merge strategy note: "Design files should use `merge=ours` — each designer keeps their local version"

---

## Section: Git Hooks (`hooks.asc`)

### Priority: MEDIUM

**Front-load useful hooks:**
- pre-commit, commit-msg, post-commit first
- De-emphasize email workflow hooks (applypatch-msg, etc.) — designers never use `git am`

**Add hook use cases:**
- "Use pre-commit to lint design files before committing"
- "Use commit-msg to validate design update descriptions"
- "Use post-commit to trigger design system builds"

**Provide copy-paste hook scripts** — designers can't write Ruby/Perl

---

## Section: Policy Enforcement (`policy.asc`)

### Priority: MEDIUM-HIGH

**Simplify hook examples drastically:**
- Replace full Ruby scripts with pseudo-code or simpler shell scripts
- Add heavy comments explaining each line

**Create design-specific examples:**
- Commit-msg hook: validate `[Component: ComponentName]` pattern instead of generic `[ref: XXXX]`
- ACL example: Admins = edit anything; Designers = edit screens not tokens; Docs = only edit docs
- Emphasize client-side hooks over server-side (designers care about local validation)

**Testing section (lines 217-280):**
- Keep — demonstrates actual hook behavior with push attempts
- Add design example: documentation writer trying to modify files outside ACL scope

**Cut/Simplify:**
- Pre-rebase hook — too complex for designers; present as "advanced tool for team leads"
- Dense Ruby ACL scripts — provide ready-made scripts designers can copy

---

## Content Gaps

| Gap | Action |
|-----|--------|
| Binary design file handling | Add subsection on storing .sketch, .xd, Figma exports; LFS considerations |
| Design system versioning | Using tags for releases, managing token versions alongside component code |
| Design token management | Storing tokens in Git, version-controlling JSON/YAML, syncing with design tools |
| Asset management | Storing icons, illustrations in Git; organizing and versioning asset libraries |
| Design documentation in Git | Keeping design docs in sync with component code |

## New Content Needed

1. `.gitattributes` template for design repos with comments explaining each rule
2. "Design Token Versioning with Git" subsection combining attributes and config
3. Ready-made hook scripts designers can use as-is
4. "Design System Collaboration with Git" walkthrough combining config, attributes, and hooks
