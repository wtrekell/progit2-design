# Chapter 7: Git Tools — UX Designer Revision Notes

## Overview
Chapter 7 is the largest tools chapter with 38 walkthroughs. Relevance varies widely — stashing, reset, submodules, and interactive staging are highly relevant; bundling, signing, and advanced filter-branch are low relevance. All examples use code files and need design-specific replacements.

---

## Section: Advanced Merging (`advanced-merging.asc`)

### Priority: HIGH

- Replace `hello.rb` with a realistic design scenario (design token JSON, component definitions)
- Add design system subsection: merge conflict resolution for `tokens.json` or `components.yaml`
- Introduce three-tree analogy: "component in your local artboard (working directory), version in shared library (HEAD), library version someone else committed (incoming branch)"
- De-emphasize manual `dos2unix` preprocessing (too code-specific)

---

## Section: Stashing and Cleaning (`stashing-cleaning.asc`)

### Priority: MEDIUM-HIGH

- Replace `index.html`/`lib/simplegit.rb` with `design-tokens.json`, `icons/` directory, component metadata
- Add "Design Iteration Pausing" scenario: stash new icon set while shipping a production bug fix
- Expand branch-from-stash: "Perfect when you start design exploration on main and realize it should be a feature branch"
- Clarify `git clean` dangers: "If design exports were untracked, `git clean` removes them permanently"

---

## Section: Reset Demystified (`reset.asc`)

### Priority: MEDIUM

- Redesign three-tree metaphor: HEAD = last published design system version, Index = staged for next release, Working Directory = current design canvas
- Replace `file.txt` with `design-system-v1.0.json`
- Add practical scenario: staged both `typography.tokens.json` and `colors.tokens.json`, want to commit only typography now
- Expand squashing: collapse "Add heading font size" + "Oops, wrong size" + "Fix heading size" into clean "Update heading typography"

---

## Section: Rewriting History (`rewriting-history.asc`)

### Priority: MEDIUM

- Add prominent shared-history warning for designers on shared repos
- Design scenario for amend: "Committed 'Update button styles' but forgot focus state CSS"
- Design scenario for split: "One commit refactors spacing tokens AND updates button styles — split for separate review"
- De-emphasize filter-branch — move to appendix; frame as "if you accidentally committed large .psd files"

---

## Section: Interactive Staging (`interactive-staging.asc`)

### Priority: MEDIUM

- Replace file names with design files: `design-system/colors.json`, `icons/icon-library.json`
- Add "Design Token Staging" use case: `tokens.json` has updates to both color and typography — stage only color changes for current PR

---

## Section: Debugging (`debugging.asc`)

### Priority: LOW-MEDIUM

- Git blame: "A color value in your design tokens changed three commits ago and broke styles. Use `git blame colors.json` to find which commit introduced it."
- Git bisect: mark as optional/advanced — "If you're maintaining a large design system..."

---

## Section: Searching (`searching.asc`)

### Priority: LOW-MEDIUM

- Reframe for design system maintenance: "Find all components using the old `primary-blue` token"
- Mark as "more relevant for design system maintainers than individual designers"

---

## Section: Signing (`signing.asc`)

### Priority: LOW

- Add one line: "If your organization requires signed commits for compliance, configure GPG here. Most design teams don't use this."

---

## Section: Bundling (`bundling.asc`)

### Priority: VERY LOW

- UX designers rarely transfer repos offline — remove or move to appendix

---

## Section: Submodules (`submodules.asc`)

### Priority: MEDIUM-HIGH

- Keep and expand with design example: "Your main product repo includes a design system as a submodule. Update submodule pointers when the design system releases a new version."

---

## Section: Replace / Subtree Merges

### Priority: VERY LOW

- Too advanced for most designers — mark as "For Repository Maintainers Only"

---

## Revision Priority Summary

| Section | Relevance | Priority | Action |
|---------|-----------|----------|--------|
| Advanced Merging | Low | HIGH | Replace code examples; add design system scenario |
| Stashing & Cleaning | Medium-High | MEDIUM-HIGH | Add design-specific examples |
| Reset | High | MEDIUM | Redesign metaphor with design vocabulary |
| Rewriting History | Medium | MEDIUM | Add caution; de-emphasize filter-branch |
| Interactive Staging | High | MEDIUM | Replace examples with design files |
| Debugging | Medium | LOW-MEDIUM | Keep blame; soften bisect |
| Searching | Medium | LOW-MEDIUM | Reframe for system maintainers |
| Signing & Bundling | Low | LOWEST | Remove or appendix |
| Submodules | Medium-High | MEDIUM-HIGH | Expand with design system use case |

## New Walkthroughs to Create

1. "Design System Version Management" — merge commits and submodules
2. "Resolving Design File Merge Conflicts" — practical token/component walkthrough
3. "Staging Design Changes Selectively" — `git add -p` for color vs. typography tokens
4. "Finding When a Design Token Changed" — `git blame` on tokens
5. "Undoing a Design System Release" — `git reset` or `git revert` for breaking changes
