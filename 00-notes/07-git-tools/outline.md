# Chapter 7: Git Tools — Section Outline

> **Storyline phase**: Production Hardening
> **Characters**: Nora, Sam, Priya, Kai
> **Key event**: Stashing, blame, interactive staging, rebase cleanup, submodules

---

## Structural Note

Chapter 7 is the largest chapter (15 sections, 38 walkthroughs). Several sections have very low design relevance. The outline groups them by priority tier and recommends cuts.

---

## TIER 1: Full Rewrite (High design relevance)

### Section: Stashing and Cleaning (`stashing-cleaning.asc`)
**Original**: 294 lines | **Action**: REWRITE

- **Stash scenario**: Sam is redesigning the results comparison screen (adding overlay diff mode). Tablet layout bug reported. Sam stashes:
  ```
  git stash push -m "WIP: overlay diff mode for results comparison"
  ```
  Fixes tablet bug on `fix/onboarding-tablet-layout`, merges, returns:
  ```
  git checkout feature/overlay-diff
  git stash pop
  ```
- Replace `index.html`/`lib/simplegit.rb` with `screens/results/overlay-diff.fig`, `concept/user-flows.md`
- Keep `git stash list`, `git stash apply`, `git stash drop`
- Expand branch-from-stash: "Perfect when you start work on `main` and realize it should be a feature branch."
- **Clean**: Add warning — "If design exports were untracked, `git clean` removes them permanently. Use `git clean -n` (dry run) first."

### Section: Advanced Merging (`advanced-merging.asc`)
**Original**: 682 lines | **Action**: REWRITE + TRIM

- Replace `hello.rb` with `design-tokens.json` merge conflict (Nora changed color values, Sam changed typography values in the same file)
- Keep three-tree analogy, reframe: "Your version (working directory), the last shared version (HEAD), the incoming version (their branch)"
- Keep `--ours`/`--theirs` strategies — frame as: "For binary files that can't merge, choose one version: `git checkout --ours illustrations/hero.png`"
- Cut `dos2unix` preprocessing, `diff3` attribute detail
- Trim to ~350 lines

### Section: Submodules (`submodules.asc`)
**Original**: 1039 lines | **Action**: REWRITE + TRIM HEAVILY

- **Frame**: Kai's AI pipeline repo (`sketchspark-ml`) is a submodule of the main product repo
- Keep: adding a submodule, cloning with submodules, updating submodule pointer
- Rewrite all examples with `sketchspark-ml` as the submodule
- Cut: publishing submodule changes, submodule foreach, submodule merge/rebase (advanced — link to reference)
- Target: ~300 lines (down from 1039)

---

## TIER 2: Rewrite Examples (Medium relevance)

### Section: Reset Demystified (`reset.asc`)
**Original**: 331 lines | **Action**: REWRITE

- Redesign three-tree metaphor for designers:
  - HEAD = last committed snapshot ("the version you shipped")
  - Index/Staging = next commit in preparation ("what you're about to ship")
  - Working Directory = current state of files ("your live canvas")
- Replace `file.txt` with `design-tokens.json`
- **Sam's mistake**: commits to `main` instead of feature branch:
  ```
  git reset --soft HEAD~1       # undo commit, keep changes staged
  git checkout -b feature/screen-redesign
  git commit -m "Redesign generation progress screen"
  ```
- Keep `--soft`, `--mixed`, `--hard` explanation with clear warnings
- **Squashing via reset**: Priya squashes messy icon commits (add/fix/fix again) into one clean commit

### Section: Rewriting History (`rewriting-history.asc`)
**Original**: 402 lines | **Action**: REWRITE + TRIM

- **Amend**: Nora commits product brief update but forgot to include the updated persona:
  ```
  git add research/personas/early-adopter.md
  git commit --amend
  ```
- **Interactive rebase**: Priya cleans up 5 icon commits into 2 clean ones before opening PR
- **Split**: Sam's commit touches both token changes and screen layout — split for separate review
- Add prominent warning: "Never rewrite history that's been pushed and shared with teammates."
- Cut `filter-branch` entirely — replaced by `git filter-repo` (mention as 1-line note for accidental large file commits)
- Target: ~250 lines (down from 402)

### Section: Interactive Staging (`interactive-staging.asc`)
**Original**: 204 lines | **Action**: REWRITE

- Replace file names with `product-brief.md`, `design-tokens.json`
- **Nora's scenario**: `product-brief.md` has both a scope change (adding tablet support) and research findings update. She stages only the research hunks for the current PR:
  ```
  git add -p product-brief.md
  ```
- Keep patch mode explanation (`y/n/s/e`)
- Note: "This works for text files only. Binary files (PNGs, Figma exports) can't be partially staged."

### Section: Searching (`searching.asc`)
**Original**: 160 lines | **Action**: REWRITE EXAMPLES

- `git grep "primary-blue"` — find all files referencing a specific color token
- `git log -S "5 options" -- product-brief.md` — find when the product concept changed
- `git log -L :generateOptions:pipeline/main.py` — Kai traces function history
- Frame as "more relevant for design system maintainers and leads than individual contributors"

### Section: Debugging (`debugging.asc`)
**Original**: 149 lines | **Action**: REWRITE EXAMPLES

- **Blame**: Priya uses `git blame design-tokens.json` to find who changed `primary-blue` and when
- Since it's a text file, blame shows line-by-line attribution — "Commit `a1b2c3d` by Sam, 3 days ago, changed `primary-blue` from `#1a73e8` to `#1f71e8`"
- **Bisect**: Mark as optional/advanced — "If you're maintaining a large project and a visual regression appeared somewhere in the last 50 commits, bisect helps you find the exact commit. Otherwise, skip this."

---

## TIER 3: Trim or Cut (Low relevance)

### Section: Revision Selection (`revision-selection.asc`)
**Original**: 401 lines | **Action**: TRIM TO ~100 LINES
- Keep: short SHA references, branch references, `HEAD~` and `HEAD^` syntax
- Keep: commit ranges (`main..feature/screens`)
- Cut: detailed reflog walkthrough (save for Ch10), `@{upstream}` syntax detail, ancestry detail
- Frame ranges with: "See what Sam added that's not in main yet: `git log main..feature/production-screens`"

### Section: Credentials (`credentials.asc`)
**Original**: 203 lines | **Action**: TRIM TO ~50 LINES
- Keep: cache, store, osxkeychain overview
- Cut: custom credential helpers, detailed implementation
- Frame: "If Git keeps asking for your password, configure a credential helper."

### Section: Rerere (`rerere.asc`)
**Original**: 255 lines | **Action**: TRIM TO ~30 LINES
- Concept + enable command: `git config --global rerere.enabled true`
- "Git remembers how you resolved a conflict and applies the same resolution next time."

### Section: Signing (`signing.asc`)
**Original**: 204 lines | **Action**: TRIM TO ~10 LINES
- "If your organization requires signed commits for compliance, configure GPG here. Most product teams don't use this."

### Section: Bundling (`bundling.asc`)
**Original**: 171 lines | **Action**: CUT
- Move to appendix or remove. Designers don't transfer repos offline.

### Section: Replace (`replace.asc`)
**Original**: 211 lines | **Action**: CUT
- Too advanced. No design team use case.

### Section: Subtree Merges (`subtree-merges.asc`)
**Original**: 103 lines | **Action**: CUT
- Submodules section covers the relevant use case. Subtree merging is an alternative most teams won't need.

---

## Chapter Summary
**Action**: REWRITE

### New
- "The team has the tools to handle real-world complexity — stashing interrupted work, cleaning up messy history, resolving merge conflicts in token files, and managing the AI pipeline as a submodule. In the next chapter, they encode their process into the repository itself: Git attributes for binary files, commit templates, and validation hooks."
