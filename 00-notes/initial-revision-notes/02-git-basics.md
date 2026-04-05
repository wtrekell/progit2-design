# Chapter 2: Git Basics — UX Designer Revision Notes

## Overview
Chapter 2 is the most critical chapter for UX designer adaptation. It covers the daily Git workflow (init, clone, status, add, commit, diff, log, remotes, tags, undoing). All examples use generic code files — every walkthrough needs design-relevant replacements.

---

## Section: Getting a Repository (`getting-a-repository.asc`)

### Priority: MEDIUM

**Issues:**
- Designers rarely init repos — they usually clone existing design system repos
- No mention of `.gitignore` for design tools or large binary design files

**Revision Suggestions:**
- Add scenario: "Initializing a design system repository" with token files, component guidelines, color palettes
- Add example: `git clone https://github.com/company/design-system-tokens`
- Add sidebar: "Git clone is like downloading a shared Figma project — you get the full history and all branches"

---

## Section: Recording Changes (`recording-changes.asc`)

### Priority: CRITICAL

**Issues:**
- Staging area concept is unfamiliar — designers think "save file" not "stage then commit"
- All examples use `.c` files, `README`, `Rakefile` — none resonate with designers
- `.gitignore` section doesn't mention design tool temp files

**Suggested Analogies:**
- Staging = preparing assets for export; gathering related changes before finalizing
- File status = Figma draft vs. published states
- `git add` = selecting components in Sketch for export

**Revision Suggestions:**
- Replace all generic examples with design files: `design-tokens.json`, `components-documentation.md`, exported assets
- Add `.gitignore` template for designers: `*.sketch~`, `*.figma_cache`, design software temp folders
- Add tip: "Commit design documentation (text files) separately from exported assets (binary files). Text merges; binary doesn't."
- Add "Commit Messages for Design Teams" subsection with examples:
  - Good: "Add button component variants for mobile breakpoints"
  - Good: "Update primary color from #1a73e8 to #1f71e8 (accessibility fix)"
  - Good: "BREAKING: Rename spacing token `sm` to `small`"

**New Content Needed:**
- Sidebar: "Git & Design Files Compatibility Matrix" (tokens JSON = mergeable, Figma source = don't commit, SVG exports = version-control friendly)
- Subsection: "Setting Up a Design System Repository" (init, .gitignore, add tokens, add docs, initial commit)

---

## Section: Working with Remotes (`remotes.asc`)

### Priority: LOW-MEDIUM

- Add design team remote example: origin = team design system, secondary remote = design token library from another team
- Replace libgit2/grit examples with design system repos

---

## Section: Tagging (`tagging.asc`)

### Priority: MEDIUM

- Tags map perfectly to design system releases — leverage this
- Replace generic `v1.4` with: `git tag -a design-system-v2.1.0 -m "Release: new button variants, updated tokens, accessibility audit pass"`
- Add: "For design systems, annotated tags are essential — document what changed so teams know which version they're using"

---

## Section: Undoing Things (`undoing.asc`)

### Priority: MEDIUM

- Add design-focused amend scenario: committed button docs, forgot accessibility notes, amend to include them
- Add warning: "Avoid amending commits already shared with the team — it rewrites history"
- Add `git restore` scenario: "Accidentally staged a large Figma export; use `git restore --staged` to unstage without losing the file"

---

## Section: Viewing History (`viewing-history.asc`)

### Priority: MEDIUM

- Add design-specific log examples:
  - `git log -S "primary-blue" --oneline -- design-tokens.json` (find when a color changed)
  - `git log --author="Sarah" --oneline -- components/` (see teammate's component updates)
  - `git log --grep="BREAKING" --oneline` (find breaking changes)
- Add tip: "Use consistent commit message prefixes (FEATURE:, FIX:, BREAKING:, DOCS:) to make history searchable"

---

## Section: Git Aliases (`aliases.asc`)

### Priority: LOW

- Add design-team sidebar with suggested aliases:
  - `git config --global alias.design-changes 'log --oneline -- design-tokens.json components/'`
  - `git config --global alias.design-releases 'log --grep="RELEASE" --oneline'`

---

## Cross-Cutting Gaps

| Gap | Severity | Action |
|-----|----------|--------|
| Binary vs. text files | CRITICAL | Add early subsection explaining what works in Git and what doesn't for design files |
| Design system workflows | HIGH | Thread design system collaboration throughout |
| Commit message standards | MEDIUM | Add guidelines specific to design changes |
| Collaboration context | MEDIUM | Preview branching early so staging/commit workflow doesn't feel isolated |
